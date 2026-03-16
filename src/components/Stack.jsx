function Stack() {
  const categories = [
    {
      name: "Frontend",
      items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      name: "Backend / API",
      items: ["REST API", "Axios", "Node.js (basics)", "PostgreSQL (basics)"],
    },
    {
      name: "Инструменты",
      items: ["Git", "VS Code", "npm/yarn", "Maven", "Postman"],
    },
    {
      name: "Дополнительные технологии",
      isInline: true, // флаг для горизонтального расположения
      items: ["Java", "JavaFX", "OpenCV", "Telegram Bot API", "Yandex GPT", "Google Vision"],
    },
    {
      name: "Soft Skills",
      isFullWidth: true,
      items: [
        "Структурирую задачи и координирую работу для достижения общего результата",
        "Выстраиваю эффективную коммуникацию, поддерживаю продуктивную атмосферу в команде",
        "Сохраняю ясность мышления и эффективность в условиях многозадачности",
        "Анализирую информацию, выделяю главное и нахожу нестандартные решения",
        "Быстро осваиваю новые технологии и применяю их на практике",
        "Тщательно прорабатываю детали, предупреждаю ошибки",
        "Отвечаю за результат, выполняю обязательства точно и в срок",
        "Генерирую идеи, предлагаю и реализую улучшения",
      ],
    },
  ];

  return (
    <section id="stack" className="stack">
      <h2 className="section-title">Навыки</h2>
      <div className="stack-categories">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`stack-category ${cat.isFullWidth ? "full-width-category" : ""}`}
          >
            <h3>{cat.name}</h3>
            <div
              className={`tech-list ${
                cat.name === "Soft Skills" ? "soft-skills-grid" : ""
              } ${cat.isInline ? "tech-list-inline" : ""}`}
            >
              {cat.items.map((item) => (
                <span key={item} className="tech-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stack;