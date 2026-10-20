export default function TimelineColumn({ title, Icon, mint = false, entries }) {
  return (
    <div className="timeline-column">
      <div className="timeline-column-header">
        <span className={`timeline-column-badge ${mint ? 'mint' : 'purple'}`}>
          <Icon />
          <span>{title}</span>
        </span>
      </div>

      <div className="timeline-list">
        {entries.map(({ id, period, title: entryTitle, institution, description, Icon: EntryIcon }) => (
          <div className="timeline-item-sphere" key={id}>
            <div className={`timeline-dot ${mint ? 'mint-dot' : ''}`}>
              <EntryIcon />
            </div>
            <div className={`timeline-card-content ${mint ? 'mint-hover' : ''}`}>
              <span className={`timeline-year-tag ${mint ? 'mint' : ''}`}>{period}</span>
              <h3 className="timeline-card-title">{entryTitle}</h3>
              <p className="timeline-institution">{institution}</p>
              <p className="timeline-card-desc">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
