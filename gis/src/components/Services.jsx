import React from "react";


const Services = () => {
  return (
    <section className="services-block text-center p-8">
      <h3 className="fw-bold mb-4 animate__animated animate__fadeInUp wow">Наши Услуги</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <ul className="text-left space-y-3">
          <li>📍 Создание электронно-цифровой карты</li>
          <li>🗺 Разработка 3D модели местности на основе географической информации</li>
          <li>📌 Векторизация (оцифровка) различных картографических материалов</li>
          <li>📊 Работа с различными базами данных в области географической информативной системы</li>
          <li>🌍 Публикация географической информации в сети интернет</li>
        </ul>
        <div className="relative w-full">
          <div id="servicesCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner rounded-lg overflow-hidden">
              <div className="carousel-item active">
                <img src="photo/service1.jpg" className="w-full" alt="Услуга 1" />
              </div>
              <div className="carousel-item">
                <img src="photo/service2.jpg" className="w-full" alt="Услуга 2" />
              </div>
              <div className="carousel-item">
                <img src="photo/service3.jpg" className="w-full" alt="Услуга 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#servicesCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#servicesCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services