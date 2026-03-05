// Reusable art banner for page headers.
// Drop images in public/ and pass the filename as `image` prop.

export default function PageBanner({ image, height = '35vh', position = 'center', filter, children }) {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: height, overflow: 'hidden' }}>
      {/* Art */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(/${image})`,
        backgroundSize: 'cover',
        backgroundPosition: position,
        filter: filter || undefined,
      }} />

      {/* Gradient fade to page background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, transparent 30%, rgba(16,13,9,0.7) 60%, #100D09 90%)',
      }} />

      {/* Content overlay (brand title, etc.) */}
      {children && (
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          minHeight: height,
          padding: '0 20px 16px',
        }}>
          {children}
        </div>
      )}
    </div>
  );
}
