export function Img({
  label,
  src,
  eager,
}: {
  label: string;
  src?: string;
  eager?: boolean;
}) {
  return (
    <div className="imgph" data-label={label}>
      {src && <img src={src} alt={label} loading={eager ? "eager" : "lazy"} />}
    </div>
  );
}
