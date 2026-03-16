import { Link } from "react-router-dom";
import adminImg from "../assets/hogwarts/adminpanel.png";
import regImg from "../assets/hogwarts/reg.png";
import loginImg from "../assets/hogwarts/login.png";

function ProjectHogwarts() {
  return (
    <div className="case">
      <Link to="/" className="back-link">← На главную</Link>
      <h1>Hogwarts School System</h1>
      <p className="project-description">
        Система управления школой с личным кабинетом, расписанием и админ-панелью. REST API + PostgreSQL.
      </p>

      <h2>Задача</h2>
      <p>
        Разработать бэкенд для управления учебным заведением: студенты, преподаватели, курсы, расписание. Создать коллекции в Postman для тестирования.
      </p>

      <h2>Стек технологий</h2>
      <ul>
        <li>PostgreSQL — база данных</li>
        <li>REST API (Java / Spring Boot)</li>
        <li>Postman — тестирование эндпоинтов</li>
        <li>Swagger/OpenAPI (опционально)</li>
      </ul>

      <h2>Реализованные эндпоинты</h2>
      <ul>
        <li>CRUD для студентов, преподавателей, курсов</li>
        <li>Назначение студента на курс</li>
        <li>Получение расписания по группам</li>
        <li>Базовая авторизация для админ-панели</li>
      </ul>

      <h2>Планы по развитию</h2>
      <ul>
        <li>Создать фронтенд на React</li>
        <li>Добавить JWT-аутентификацию</li>
        <li>Личный кабинет с оценками</li>
      </ul>

      {/* Скриншоты – вертикальное расположение */}
      <h2>Скриншоты</h2>
      <div className="screenshots-vertical">
        <figure>
          <img src={loginImg} alt="Форма входа" />
          <figcaption>Страница авторизации</figcaption>
        </figure>
        <figure>
          <img src={regImg} alt="Регистрация" />
          <figcaption>Регистрация нового пользователя</figcaption>
        </figure>
        <figure>
          <img src={adminImg} alt="Админ-панель" />
          <figcaption>Панель управления</figcaption>
        </figure>
      </div>

      <a
        href="https://github.com/твой-username/hogwarts-system"
        target="_blank"
        rel="noopener noreferrer"
      >
        Исходный код на GitHub
      </a>
    </div>
  );
}

export default ProjectHogwarts;