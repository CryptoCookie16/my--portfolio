import type { AnchorHTMLAttributes, ReactNode } from "react"

type WaveLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string
  children?: ReactNode
  dataLang?: "en" | "zh"
}

export function WaveLink({
  href = "/",
  children = "Discover more",
  className = "",
  dataLang,
  ...props
}: WaveLinkProps) {
  const label = dataLang === "zh" && typeof children === "string"
    ? Array.from(children).map((character, index) => (
        <span key={`${character}-${index}`}>{character}</span>
      ))
    : children

  return (
    <a className={`wave-link ${className}`} data-lang={dataLang} href={href} {...props}>
      <span className="wave-link__label">{label}</span>
      <svg
        className="wave-link__graphic"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,54 c0,0,298.666,0,399.333,0 C448.336,54,513.994,50.5,597,50.5 c77.327,0,135,3.5,200.999,3.5 c95.996,0,402.001,0,402.001,0"
        />
      </svg>
    </a>
  )
}
