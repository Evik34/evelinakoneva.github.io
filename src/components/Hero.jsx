import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Эвелина Конева
      </motion.h1>

      <p className="hero-role">Frontend Developer</p>

      <p className="hero-desc">
        Разрабатываю современные интерфейсы и AI‑интеграции.
        Основной фокус: React, UI Engineering, AI Applications.
      </p>

      <div className="hero-meta">
        <div>УГНТУ (Институт цифровых систем, автоматизации и энергетики)</div>
        <div>Средний балл <span>4.97</span></div>
        <div>Технологии скусственного интеллекта в нефтегазовой отрасли</div>
      </div>
    </section>
  );
}

export default Hero;