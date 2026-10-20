export default function SectionHeading({ tag, title, text, mint = false }) {
  return (
    <div className="section-header-left section-header">
      <div className="section-aura-glow" />
      <div className={`section-tag ${mint ? 'mint' : ''}`}>{tag}</div>
      <h2 className="headline">{title}</h2>
      <p className="subheadline">{text}</p>
    </div>
  );
}
