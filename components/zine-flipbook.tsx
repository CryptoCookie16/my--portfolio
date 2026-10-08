"use client"

import { FormEvent, useEffect, useMemo, useRef, useState } from "react"
import type { PageFlip as PageFlipInstance } from "page-flip"

// 002 is an extra blank before Chapter One and 003 repeats the cover.
// Keep later blank pages: they are intentional parts of the designed spreads.
const PAGE_FILES = [1, ...Array.from({ length: 63 }, (_, index) => index + 4)]
const PAGE_COUNT = PAGE_FILES.length
const PAGE_ROOT = "/zine/january-march-march/pages"

function pageUrl(index: number) {
  return `${PAGE_ROOT}/${String(PAGE_FILES[index]).padStart(3, "0")}.webp`
}

export function ZineFlipbook() {
  const bookRef = useRef<HTMLDivElement>(null)
  const readerRef = useRef<HTMLDivElement>(null)
  const pageFlipRef = useRef<PageFlipInstance | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [jumpValue, setJumpValue] = useState("1")
  const [isReady, setIsReady] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const pageUrls = useMemo(
    () => Array.from({ length: PAGE_COUNT }, (_, index) => pageUrl(index)),
    []
  )

  useEffect(() => {
    let disposed = false
    let pageFlip: PageFlipInstance | null = null

    async function mountBook() {
      if (!bookRef.current) return
      const { PageFlip } = await import("page-flip")
      if (disposed || !bookRef.current) return

      pageFlip = new PageFlip(bookRef.current, {
        width: 440,
        height: 622,
        size: "stretch",
        minWidth: 260,
        maxWidth: 470,
        minHeight: 368,
        maxHeight: 664,
        drawShadow: true,
        flippingTime: 900,
        usePortrait: true,
        startPage: 0,
        autoSize: true,
        maxShadowOpacity: 0.38,
        showCover: true,
        mobileScrollSupport: true,
        swipeDistance: 26,
        clickEventForward: true,
        useMouseEvents: true,
        showPageCorners: true,
        disableFlipByClick: false,
      })

      pageFlip.on("init", () => {
        if (!disposed) setIsReady(true)
      })
      pageFlip.on("flip", (event) => {
        if (disposed) return
        const next = Number(event.data) + 1
        setCurrentPage(next)
        setJumpValue(String(next))
      })
      const pages = bookRef.current.querySelectorAll<HTMLElement>(".zine-reader__page")
      pageFlip.loadFromHTML(pages)
      pageFlipRef.current = pageFlip
    }

    mountBook()
    return () => {
      disposed = true
      pageFlipRef.current = null
      pageFlip?.destroy()
    }
  }, [pageUrls])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.target instanceof HTMLInputElement) return
      if (event.key === "ArrowLeft") {
        event.preventDefault()
        pageFlipRef.current?.flipPrev("bottom")
      }
      if (event.key === "ArrowRight") {
        event.preventDefault()
        pageFlipRef.current?.flipNext("bottom")
      }
    }

    function onFullscreenChange() {
      setIsFullscreen(document.fullscreenElement === readerRef.current)
      window.setTimeout(() => window.dispatchEvent(new Event("resize")), 80)
    }

    window.addEventListener("keydown", onKeyDown)
    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("fullscreenchange", onFullscreenChange)
    }
  }, [])

  function goToPage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const requested = Number.parseInt(jumpValue, 10)
    const target = Number.isFinite(requested)
      ? Math.min(PAGE_COUNT, Math.max(1, requested))
      : currentPage
    setJumpValue(String(target))
    pageFlipRef.current?.flip(target - 1, "bottom")
  }

  async function toggleFullscreen() {
    if (!readerRef.current) return
    if (document.fullscreenElement) {
      await document.exitFullscreen()
    } else {
      await readerRef.current.requestFullscreen()
    }
  }

  return (
    <section
      ref={readerRef}
      className="zine-reader"
      aria-label="January, March, March interactive zine"
    >
      <div className="zine-reader__intro">
        <p>{isReady ? "拖动页角，或点击书页边缘翻页" : "正在装订书页…"}</p>
        <p className="zine-reader__hint">← → 键盘翻页 · 手机可左右滑动</p>
      </div>

      <div className="zine-reader__stage">
        <div ref={bookRef} className="zine-reader__book">
          {pageUrls.map((src, index) => (
            <div
              key={src}
              className="zine-reader__page"
              data-density={index === 0 || index === PAGE_COUNT - 1 ? "hard" : "soft"}
            >
              {/* The source files are already optimized book-page renders. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`January, March, March，第 ${index + 1} 页`}
                draggable={false}
                loading={index < 5 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="zine-reader__controls">
        <button
          type="button"
          onClick={() => pageFlipRef.current?.flipPrev("bottom")}
          disabled={!isReady || currentPage === 1}
          aria-label="上一页"
        >
          ←
        </button>

        <form onSubmit={goToPage} className="zine-reader__pagination">
          <label htmlFor="zine-page-jump" className="sr-only">
            跳转到指定页
          </label>
          <input
            id="zine-page-jump"
            type="number"
            inputMode="numeric"
            min={1}
            max={PAGE_COUNT}
            value={jumpValue}
            onChange={(event) => setJumpValue(event.target.value)}
            onBlur={() => setJumpValue(String(currentPage))}
          />
          <span aria-live="polite">/ {PAGE_COUNT}</span>
        </form>

        <button
          type="button"
          onClick={() => pageFlipRef.current?.flipNext("bottom")}
          disabled={!isReady || currentPage === PAGE_COUNT}
          aria-label="下一页"
        >
          →
        </button>

        <button
          type="button"
          className="zine-reader__fullscreen"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? "退出全屏" : "全屏阅读"}
        >
          {isFullscreen ? "退出全屏" : "全屏"}
        </button>
      </div>

      <style jsx>{`
        .zine-reader {
          --reader-ink: #292822;
          width: min(100%, 1560px);
          margin: 0 auto;
          padding: clamp(1.25rem, 3vw, 2.5rem);
          overflow: hidden;
          color: var(--reader-ink);
          background:
            radial-gradient(circle at 50% 38%, rgba(255, 255, 255, 0.82), transparent 53%),
            #e9e5dc;
          border: 1px solid rgba(58, 53, 43, 0.13);
        }

        .zine-reader:fullscreen {
          width: 100vw;
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 0;
          padding: clamp(1rem, 2vw, 2rem);
        }

        .zine-reader:fullscreen .zine-reader__intro {
          position: absolute;
          top: 1.25rem;
          left: 2rem;
          right: 2rem;
          z-index: 5;
        }

        .zine-reader__intro {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: rgba(41, 40, 34, 0.58);
        }

        .zine-reader__intro p {
          margin: 0;
        }

        .zine-reader__hint {
          text-align: right;
        }

        .zine-reader__stage {
          min-height: min(62vh, 700px);
          display: grid;
          place-items: center;
          perspective: 2400px;
        }

        .zine-reader:fullscreen .zine-reader__stage {
          width: 100%;
          min-height: 0;
          height: calc(100vh - 7.5rem);
          overflow: hidden;
        }

        .zine-reader:fullscreen .zine-reader__controls {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          z-index: 5;
          margin: 0;
        }

        .zine-reader__book {
          filter: drop-shadow(0 18px 22px rgba(33, 29, 20, 0.18));
        }

        :global(.zine-reader__page) {
          overflow: hidden;
          background: #fff;
        }

        :global(.zine-reader__page img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          user-select: none;
          -webkit-user-drag: none;
        }

        .zine-reader__controls {
          min-height: 3rem;
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.7rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
        }

        .zine-reader__controls button,
        .zine-reader__pagination input {
          height: 2.45rem;
          border: 1px solid rgba(41, 40, 34, 0.22);
          background: rgba(250, 248, 242, 0.62);
          color: inherit;
        }

        .zine-reader__controls button {
          min-width: 2.8rem;
          padding: 0 0.8rem;
          cursor: pointer;
          transition: background 180ms ease, border-color 180ms ease;
        }

        .zine-reader__controls button:hover:not(:disabled),
        .zine-reader__controls button:focus-visible {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(41, 40, 34, 0.48);
        }

        .zine-reader__controls button:disabled {
          opacity: 0.28;
          cursor: default;
        }

        .zine-reader__pagination {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .zine-reader__pagination input {
          width: 3.2rem;
          padding: 0 0.35rem;
          text-align: center;
          font: inherit;
          appearance: textfield;
        }

        .zine-reader__pagination input::-webkit-inner-spin-button,
        .zine-reader__pagination input::-webkit-outer-spin-button {
          appearance: none;
          margin: 0;
        }

        .zine-reader__fullscreen {
          margin-left: 0.45rem;
          min-width: 4.5rem !important;
        }

        @media (max-width: 700px) {
          .zine-reader {
            padding: 1rem 0.7rem 1.2rem;
          }

          .zine-reader__stage {
            min-height: min(71vh, 760px);
          }

          .zine-reader__intro {
            display: block;
            text-align: center;
            line-height: 1.8;
          }

          .zine-reader__hint {
            display: none;
          }

          .zine-reader__controls {
            gap: 0.45rem;
          }

          .zine-reader__fullscreen {
            margin-left: 0;
          }
        }
      `}</style>
    </section>
  )
}
