import type { AnchorHTMLAttributes, ReactNode } from "react"

type WaveLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string
  children?: ReactNode
}

export function WaveLink({
  href = "/",
  children = "Discover more",
  className = "",
  ...props
}: WaveLinkProps) {
  return (
    <a className={`wave-link ${className}`} href={href} {...props}>
      <span>{children}</span>
      <svg
        className="wave-link__graphic"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,56.5 c0,0,298.666,0,399.333,0 C448.336,56.5,513.994,46,597,46 c77.327,0,135,10.5,200.999,10.5 c95.996,0,402.001,0,402.001,0"
        />
      </svg>
    </a>
  )
}
