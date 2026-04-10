import { Link } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import { products } from "../data/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      <section className="hero hero--home">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__content hero__content--wide">
          <p className="eyebrow">Санкт-Петербург · сувенирная мастерская</p>
          <h1 className="hero__title">
            Подарки с характером
            <span className="hero__title-accent"> Северной столицы</span>
          </h1>
          <p className="hero__lead">
            Брелоки, фигурки, стекло и праздничные коллекции — всё, что хочется
            увезти из Петербурга или подарить тем, кто любит город так же, как вы.
          </p>
          <div className="hero__actions">
            <Link to="/catalog" className="btn btn--primary">
              Открыть каталог
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Заказать оптом
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="section__head">
          <h2>Почему мы</h2>
          <p className="section__sub">
            Отбираем производителей и следим за качеством — от брелка до
            декоративной тарелки.
          </p>
        </div>
        <ul className="features">
          <li className="feature-card">
            <span className="feature-card__icon" aria-hidden="true">◆</span>
            <h3>Локальные мотивы</h3>
            <p>Архитектура, символы города и узнаваемые образы в каждой коллекции.</p>
          </li>
          <li className="feature-card">
            <span className="feature-card__icon" aria-hidden="true">◇</span>
            <h3>Опт и розница</h3>
            <p>Индивидуальные условия для магазинов, отелей и туроператоров.</p>
          </li>
          <li className="feature-card">
            <span className="feature-card__icon" aria-hidden="true">○</span>
            <h3>Доставка по РФ</h3>
            <p>Надёжная упаковка и отправка в любой регион — см. раздел доставки.</p>
          </li>
        </ul>
      </section>

      <section className="section">
        <div className="section__head section__head--row">
          <div>
            <h2>Избранное из каталога</h2>
            <p className="section__sub">Недавно популярные позиции</p>
          </div>
          <Link to="/catalog" className="link-arrow">
            Весь каталог →
          </Link>
        </div>
        <div className="catalog__grid catalog__grid--home">
          {featured.map((p) => (
            <article className="card card--lift card--with-fav" key={p.id}>
              <FavoriteButton productId={p.id} />
              <Link to={`/product/${p.slug}`} className="card__link">
                <div className="card__img-wrap">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="card__body">
                  <h3>{p.title}</h3>
                  <p className="card__price">{p.price.toLocaleString("ru-RU")} ₽</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <div>
            <h2>Нужен подбор под мероприятие?</h2>
            <p>
              Поможем с ассортиментом, брендированием и сроками — напишите или
              позвоните.
            </p>
          </div>
          <Link to="/contact" className="btn btn--light">
            Связаться
          </Link>
        </div>
      </section>
    </>
  );
}
