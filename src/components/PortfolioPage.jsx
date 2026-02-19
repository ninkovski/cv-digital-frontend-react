import ResumeSkeleton from './ResumeSkeleton'
import { useResume } from '../hooks/useResume'

function ProfileHeader({ profile }) {
  return (
    <div className="mb-5 profile-header">
      <h1 className="title is-3-mobile is-2-tablet mb-2">{profile.fullName}</h1>
      <p className="subtitle is-6-mobile is-5-tablet has-text-primary mb-3">{profile.role}</p>
      <p className="content mb-4">{profile.summary}</p>

      <div className="buttons are-small">
        {profile.linkedinUrl && (
          <a className="button is-link is-light" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {profile.githubUrl && (
          <a className="button is-dark is-light" href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

function ExperienceList({ experiences = [] }) {
  return (
    <div className="experience-section">
      <h2 className="title is-4">Experiencia</h2>
      {experiences.map((experience, index) => (
        <article className="card mb-4 experience-card" key={`${experience.company}-${index}`}>
          <div className="card-content">
            <p className="title is-6 mb-1">{experience.position}</p>
            <p className="subtitle is-7 mb-3">{experience.company}</p>
            <p className="is-size-7 has-text-grey mb-3">
              {experience.startDate} - {experience.endDate}
            </p>
            <ul>
              {(experience.highlights || []).map((highlight, highlightIndex) => (
                <li className="mb-2" key={`${highlight}-${highlightIndex}`}>
                  • {highlight}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}

function SkillsList({ skills = [] }) {
  return (
    <aside className="skills-section">
      <h2 className="title is-4">Skills</h2>
      <div className="skills-wrap">
        {skills.map((skill, index) => (
          <span className="skill-badge" key={`${skill.name}-${index}`}>
            {skill.name} · {skill.level} · {skill.years} años
          </span>
        ))}
      </div>
    </aside>
  )
}

function CertificationsList({ certifications = [] }) {
  return (
    <div className="certifications-section">
      <h2 className="title is-4">Certificaciones</h2>
      <div className="certifications-row">
        {certifications.map((certification, index) => (
          <article className="card certification-card" key={`${certification.name}-${index}`}>
            <div className="card-content">
              <div className="certification-head">
                <span className="certification-logo">{(certification.provider || certification.name || '?').charAt(0)}</span>
                <p className="certification-name">{certification.name}</p>
              </div>
              {certification.credentialUrl && (
                <a className="certification-link" href={certification.credentialUrl} target="_blank" rel="noreferrer">
                  Ver credencial
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const { data, isLoading, error, retry } = useResume()

  if (isLoading) return <ResumeSkeleton />

  if (error) {
    return (
      <section className="section">
        <div className="container is-max-desktop">
          <article className="message is-danger">
            <div className="message-header">
              <p>No pudimos cargar tu perfil</p>
            </div>
            <div className="message-body">
              <p className="mb-4">{error}</p>
              <button className="button is-danger is-light" onClick={retry}>
                Reintentar
              </button>
            </div>
          </article>
        </div>
      </section>
    )
  }

  if (!data) {
    return (
      <section className="section">
        <div className="container">
          <p className="has-text-grey">No hay información disponible del perfil.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container is-max-desktop">
        <div className="box portfolio-shell">
          <div className="portfolio-main-flow">
            <ProfileHeader profile={data} />
            <CertificationsList certifications={data.certifications} />
            <SkillsList skills={data.skills} />
            <ExperienceList experiences={data.experiences} />
          </div>
        </div>
      </div>
    </section>
  )
}
