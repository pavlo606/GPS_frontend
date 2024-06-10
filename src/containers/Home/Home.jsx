import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
    return (
        <div>
            <section class="hero">
                <h1>Ласкаво просимо до GPS Tracker</h1>
                <p>Переглядайте та аналізуйте ваші маршрути з легкістю.</p>
                <Link to="/routes" class="btn">Мої Маршрути</Link>
            </section>

            <section class="features">
                <div class="feature">
                    <h2>Простий у використанні</h2>
                    <p>Наш сервіс пропонує простий та інтуїтивно зрозумілий інтерфейс для перегляду маршрутів.</p>
                </div>
                <div class="feature">
                    <h2>Детальний аналіз</h2>
                    <p>Отримайте детальну інформацію про кожен ваш маршрут.</p>
                </div>
                <div class="feature">
                    <h2>Надійність</h2>
                    <p>Ваші дані завжди під надійним захистом.</p>
                </div>
            </section>
        </div>
    )
}

export default Home;