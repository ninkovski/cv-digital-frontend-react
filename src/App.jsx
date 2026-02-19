import PortfolioPage from './components/PortfolioPage'

export default function App() {
  return (
    <>
      <header className="hero is-dark">
        <div className="hero-body py-5">
          <div className="container is-max-desktop">
            <p className="title is-5-mobile is-4-tablet">Portafolio Profesional</p>
            <p className="subtitle is-7-mobile is-6-tablet mb-0">
              Ingeniería de Software · Clase Modelo UTEC
            </p>
          </div>
        </div>
      </header>

      <main>
        <PortfolioPage />
      </main>

      <footer className="footer py-5">
        <div className="content has-text-centered is-size-7-mobile">
          <p>
            CV Digital dinámico con React + Bulma · Consumido desde API REST Spring Boot.
          </p>
        </div>
      </footer>
    </>
  )
}
