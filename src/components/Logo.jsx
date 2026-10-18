// RAY DIGITAL mark: rounded block with sharp diagonal "ray" cuts (matches the brand artwork).
// For a pixel-perfect match, export your logo as SVG and paste its paths here.
export default function Logo({ size = 36, mono = false }) {
  const fill = mono ? '#F2F4F0' : '#C6FF00';
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false" fill={fill}>
      <path d="M0 4.5L21.5 26V48H0Z" />
      <path d="M3 0H33.5A14.3 14.3 0 0 1 47.8 14V16.5L42 16.5L47.8 28V46Z" />
      <path className="leg" d="M17 27L30 41H26L17 31Z" />
    </svg>
  );
}