export function CablewayPlaySection() {
  return (
    <div
      className="cableway-play-section"
      role="group"
      aria-label="Interactive cableway"
    >
      <iframe
        src="/cableway/index.html?style=marker&embedded=1&autoplay=0"
        className="cableway-play-frame"
        title="Interactive cableway"
        loading="lazy"
      />
    </div>
  )
}
