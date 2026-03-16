import { Link } from "react-router-dom";
import Diagram from "../components/Diagram";
import angryImg from "../assets/ai_psychologist/ai-psychologist-angry.png";

function ProjectAI() {
  return (
    <div className="case">
      <Link to="/" className="back-link">← На главную</Link>
      <h1>AI Psychologist</h1>
      <p className="project-description">
        Десктоп-приложение на JavaFX для анализа эмоционального состояния пользователя по фотографии и ведения диалога с искусственным интеллектом. Проект объединяет компьютерное зрение и NLP.
      </p>

      <h2>Задача</h2>
      <p>
        Создать приложение, которое помогает пользователю лучше понимать свои эмоции. Пользователь загружает фото, система определяет эмоции (радость, грусть, гнев и т.д.), после чего AI-ассистент (Yandex GPT) даёт персонализированные рекомендации, учитывая выявленное состояние.
      </p>

      <h2>Архитектура</h2>
      <Diagram
        nodes={[
          "Загрузка фото",
          "OpenCV (детекция лиц)",
          "Google Vision API (анализ эмоций)",
          "Формирование контекста",
          "Yandex GPT API",
          "Генерация ответа"
        ]}
      />

      <h2>Технологический стек</h2>
      <ul>
        <li>Java 11 — основной язык</li>
        <li>JavaFX — графический интерфейс</li>
        <li>OpenCV — предобработка изображений</li>
        <li>Google Vision API — распознавание лиц и эмоций</li>
        <li>Yandex GPT API — генерация текста</li>
        <li>Maven — сборка, управление зависимостями</li>
        <li>REST-клиент (OkHttp) — работа с API</li>
      </ul>

      <h2>Ключевые функции</h2>
      <ul>
        <li>Распознавание 7 базовых эмоций</li>
        <li>Поддержка нескольких лиц на одном фото</li>
        <li>Контекстный диалог с памятью последних сообщений</li>
        <li>Асинхронная обработка запросов (без блокировки UI)</li>
        <li>Обработка ошибок и таймаутов</li>
      </ul>

      <h2>Особенности реализации</h2>
      <ul>
        <li>Архитектура MVC, разделение логики и представления</li>
        <li>Паттерны Singleton (для API-клиентов) и Factory (для компонентов)</li>
        <li>Многопоточность — параллельный вызов двух API</li>
        <li>Кэширование результатов анализа</li>
      </ul>
	{/* ===== Скриншоты ===== */}
<h2>Скриншоты интерфейса</h2>
<div className="screenshots">
  
  <figure>
    <img src={angryImg} alt="Анализ эмоции" />
    <figcaption>Анализ фото – обнаружена эмоция «злость»</figcaption>
  </figure>
  
</div>
      <a href="https://github.com/Evik34/AI-psychologist" target="_blank" rel="noopener noreferrer">
        Исходный код на GitHub
      </a>
    </div>
  );
}

export default ProjectAI;