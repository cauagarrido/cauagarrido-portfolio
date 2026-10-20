import { timelineColumns } from '../../data/timeline.js';
import SectionHeading from '../common/SectionHeading.jsx';
import TimelineColumn from './TimelineColumn.jsx';

export default function Experience() {
  return (
    <section className="experience-section" id="about">
      <div className="container">
        <SectionHeading
          tag="Formação & Experiência"
          mint
          title={<>De números a estratégia: <br />a formação do <span className="purple">profissional.</span></>}
          text="Uma trajetória multidisciplinar que une o olhar artístico e refinado do design gráfico à precisão lógica da engenharia de software."
        />

        <div className="timeline-layout">
          {timelineColumns.map(({ id, title, Icon, mint, entries }) => (
            <TimelineColumn key={id} title={title} Icon={Icon} mint={mint} entries={entries} />
          ))}
        </div>
      </div>
    </section>
  );
}
