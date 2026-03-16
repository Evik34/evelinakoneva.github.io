import { Link } from "react-router-dom";

// Импортируем скриншоты
import homeImg from "../assets/cameras/home.png";
import catalogImg from "../assets/cameras/catalog.png";
import basketImg from "../assets/cameras/basket.png";
import callImg from "../assets/cameras/call.png";

function ProjectCameras() {
  return (
    <div className="case">
      <Link to="/" className="back-link">← На главную</Link>
      <h1>Camera Catalog</h1>
      <p className="project-description">
        Интернет-каталог веб-камер на React.js. Коммерческий фриланс-проект с фильтрацией, корзиной и Telegram-уведомлениями.
      </p>

      <h2>Стек технологий</h2>
      <ul>
        <li>React.js</li>
        <li>React Router</li>
        <li>Axios</li>
        <li>CSS Modules</li>
        <li>Telegram Bot API</li>
      </ul>

      <h2>Функциональность</h2>
      <ul>
        <li>Каталог товаров с фильтрацией</li>
        <li>Детальные карточки товаров</li>
        <li>Корзина покупок</li>
        <li>Отправка заказов в Telegram</li>
        <li>Адаптивная верстка</li>
      </ul>

      <h2>Особенности реализации</h2>
      <ul>
        <li>SPA с роутингом на React Router</li>
        <li>Интеграция с REST API</li>
        <li>Все ключи вынесены в .env</li>
      </ul>

      {/* Скриншоты – вертикальное расположение */}
      <h2>Скриншоты</h2>
      <div className="screenshots-vertical">
        <figure>
          <img src={homeImg} alt="Главная страница" />
          <figcaption>Главная страница каталога</figcaption>
        </figure>
        <figure>
          <img src={catalogImg} alt="Страница каталога" />
          <figcaption>Каталог с фильтрацией</figcaption>
        </figure>
        <figure>
          <img src={basketImg} alt="Корзина" />
          <figcaption>Корзина покупок</figcaption>
        </figure>
        <figure>
          <img src={callImg} alt="Форма обратной связи" />
          <figcaption>Форма заказа / обратный звонок</figcaption>
        </figure>
      </div>

      <a
        href="https://github.com/Evik34/camera"
        target="_blank"
        rel="noopener noreferrer"
      >
        Исходный код на GitHub
      </a>
    </div>
  );
}

export default ProjectCameras;