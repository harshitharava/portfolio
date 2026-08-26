export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer-note">Probably tweaking this footer again.</p>

        <h2 className="footer-statement">
          That&apos;s the work. Here&apos;s the{" "}
          <span className="muted">awkward</span> reaching out part.
        </h2>

        <div className="footer-actions">
          <a
            className="fpill fpill-accent"
            href="mailto:aravaharshith@gmail.com"
          >
            Drop an Email
          </a>
          <a
            className="fpill"
            href="/harshith-arava-resume.pdf"
            download="Harshith-Arava-Resume.pdf"
          >
            Download resume <span aria-hidden="true">↓</span>
          </a>
          <a
            className="fpill"
            href="https://www.behance.net/aravaharshith3"
            target="_blank"
            rel="noopener"
          >
            Behance <span aria-hidden="true">↗</span>
          </a>
          <a
            className="fpill"
            href="https://www.linkedin.com/in/harshitharava/"
            target="_blank"
            rel="noopener"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer-rule" />

        <div className="footer-bottom">
          <span className="footer-mark" aria-hidden="true" />
          <span>No templates were harmed</span>
        </div>
      </div>
    </footer>
  );
}
