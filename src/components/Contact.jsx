export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="address">
            <h3>Visit Us</h3>
            <address>
              Chess Circle,<br />
              Chennai, Tamil Nadu,<br />
              India
            </address>
          </div>
          <div className="enquiry">
            <h3>Get in Touch</h3>
            <p>Have questions about our courses? We&apos;d love to hear from you!</p>
            <a href="mailto:info@chessacademy.com" className="btn btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
