// Organic curved SVG dividers used between full-bleed sections.
// `fill` should match the color of the section the curve flows INTO.

export function CurveDivider({ fill = 'var(--cream)' }: { fill?: string }) {
  return (
    <div className="pointer-events-none -mt-px leading-[0]" aria-hidden="true">
      <svg
        className="block w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ height: 'clamp(48px, 8vw, 120px)' }}
      >
        <path
          d="M0,64 C240,128 480,16 720,40 C960,64 1200,128 1440,72 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
