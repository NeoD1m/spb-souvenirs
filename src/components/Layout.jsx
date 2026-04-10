import { NavLink, Outlet } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const nav = [
  { to: "/", label: "Главная", end: true },
  { to: "/catalog", label: "Каталог", end: false },
  { to: "/favorites", label: "Избранное", end: false, badge: true },
  { to: "/about", label: "О компании", end: false },
  { to: "/delivery", label: "Доставка", end: false },
  { to: "/contact", label: "Контакты", end: false }
];

export default function Layout() {
  const { count } = useFavorites();
  return (
    <div className="layout">
      <a href="#main" className="skip-link">
        К содержимому
      </a>
      <header className="topbar">
        <div className="topbar__inner">
          <NavLink to="/" className="brand" end>
            <span className="brand__mark" aria-hidden="true" />
            <span className="brand__text">
              <span className="brand__name">Сувениры СПб</span>
              <span className="brand__tag">Санкт-Петербург</span>
            </span>
          </NavLink>
          <nav className="nav" aria-label="Основное меню">
            <ul>
              {nav.map(({ to, label, end, badge }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      isActive ? "nav__link nav__link--active" : "nav__link"
                    }
                  >
                    {label}
                    {badge && count > 0 && (
                      <span className="nav__badge" aria-label={`В избранном: ${count}`}>
                        {count}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" className="main-outlet">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer__grid">
          <div>
            <p className="footer__title">Сувениры СПб</p>
            <p className="footer__muted">
              Памятные подарки и сувениры с душой Петербурга с 2012 года.
            </p>
          </div>
          <div>
            <p className="footer__title">Адрес</p>
            <p>Невский проспект, 28</p>
            <p className="footer__muted">Санкт-Петербург, Россия</p>
          </div>
          <div>
            <p className="footer__title">Связь</p>
            <p>
              <a href="tel:+78120000000">+7 (812) 000-00-00</a>
            </p>
            <p>
              <a href="mailto:info@suveniryspb.ru">info@suveniryspb.ru</a>
            </p>
          </div>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} Сувениры СПб</p>
      </footer>
    </div>
  );
}
