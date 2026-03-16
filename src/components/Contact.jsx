import resume from "../assets/Resume.pdf";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Контакты</h2>

      {/* Сетка с контактами (4 карточки) */}
      <div className="contact-grid">
        <a href="tel:+79991234567" className="contact-card">
          <span className="contact-label">Телефон</span>
          <span className="contact-value">+7 (927) 963-66-64</span>
        </a>

        <a
          href="https://t.me/Evelynaq"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-label">Telegram</span>
          <span className="contact-value">@Evelynaq</span>
        </a>

        <a href="mailto:evikkac34@mail.ru" className="contact-card">
          <span className="contact-label">Email</span>
          <span className="contact-value">evikkac34@mail.ru</span>
        </a>

        <a
          href="https://github.com/Evik34"
          className="contact-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-label">GitHub</span>
          <span className="contact-value">github.com/Evik34</span>
        </a>
      </div>

      {/* Отдельная большая кнопка для резюме */}
      <div className="resume-wrapper">
        <a href={resume} className="resume-button" download>
          Скачать резюме (PDF)
        </a>
      </div>
    </section>
  );
}

export default Contact;