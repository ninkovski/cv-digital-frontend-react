export default function ResumeSkeleton() {
  return (
    <section className="section">
      <div className="container">
        <div className="box">
          <div className="skeleton skeleton-title mb-4" />
          <div className="skeleton skeleton-subtitle mb-4" />
          <div className="skeleton skeleton-text mb-2" />
          <div className="skeleton skeleton-text mb-2" />
          <div className="skeleton skeleton-text mb-5" />

          <div className="columns is-multiline">
            <div className="column is-12-tablet is-8-desktop">
              <div className="skeleton skeleton-title mb-3" />
              <div className="skeleton skeleton-card mb-3" />
              <div className="skeleton skeleton-card mb-5" />
              
              <div className="skeleton skeleton-title mb-3" />
              <div className="skeleton skeleton-card mb-3" />
              <div className="skeleton skeleton-card" />
            </div>
            <div className="column is-12-tablet is-4-desktop">
              <div className="skeleton skeleton-title mb-3" />
              <div className="skeleton skeleton-chip mb-2" />
              <div className="skeleton skeleton-chip mb-2" />
              <div className="skeleton skeleton-chip" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
