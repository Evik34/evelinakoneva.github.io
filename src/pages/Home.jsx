import Hero from "../components/Hero";
import Stack from "../components/Stack";
import ProjectPreview from "../components/ProjectPreview";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Hero />

      <Stack />

      <section id="projects" className="projects">
        <h2 className="section-title">Проекты</h2>
        <div className="projects-grid">
          <ProjectPreview
            title="AI Psychologist"
            link="/ai-psychologist"
            description="Десктоп-приложение на JavaFX для анализа эмоций по фото и диалога с AI. Интеграция Google Vision и Yandex GPT."
            tags={["Java", "JavaFX", "OpenCV", "REST API"]}
          />
          <ProjectPreview
            title="Camera Catalog"
            link="/camera-catalog"
            description="Интернет-каталог веб-камер на React.js. Коммерческий фриланс-проект с фильтрацией, корзиной и Telegram-уведомлениями."
            tags={["React", "React Router", "Axios", "Telegram API"]}
          />
          <ProjectPreview
            title="Hogwarts System"
            link="/hogwarts-system"
            description="Система управления школой с личным кабинетом, расписанием и админ-панелью. REST API + PostgreSQL."
            tags={["PostgreSQL", "REST API", "Postman"]}
          />
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default Home;