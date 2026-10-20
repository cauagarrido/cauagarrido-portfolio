import { technologies } from '../../data/technologies.js';
import SectionHeading from '../common/SectionHeading.jsx';

export default function Technologies() {
  return (
    <section className="technologies-section" id="technologies">
      <div className="container">
        <SectionHeading
          tag="Habilidades & Especialidades"
          title={<>Stack & <span className="purple">Tecnologias</span></>}
          text="Ferramentas e linguagens dominadas que utilizo no dia a dia para desenvolver sistemas de alta performance, do backend ao frontend."
        />

        <div className="tech-cards-grid">
          {technologies.map(({
            id, category, name, description, BrandIcon, FooterIcon, footer, color,
          }) => (
            <div className="tech-card" data-category={category} key={id}>
              <div className="tech-card-header">
                <div className="tech-icon-box">
                  <BrandIcon />
                </div>
              </div>
              <div className="tech-card-body">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
              <div className="tech-card-footer">
                <FooterIcon style={{ color }} />
                <span>{footer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
