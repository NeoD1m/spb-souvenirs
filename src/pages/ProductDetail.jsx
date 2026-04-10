import { Link, useParams } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import { getProductBySlug, products } from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="page-head">
        <h1>Товар не найден</h1>
        <p>
          <Link to="/catalog">Вернуться в каталог</Link>
        </p>
      </div>
    );
  }

  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);
  const more =
    related.length < 3
      ? products
          .filter((p) => p.id !== product.id && !related.includes(p))
          .slice(0, 3 - related.length)
      : [];
  const suggestions = [...related, ...more].slice(0, 3);

  return (
    <>
      <nav className="breadcrumbs" aria-label="Хлебные крошки">
        <Link to="/">Главная</Link>
        <span aria-hidden="true"> / </span>
        <Link to="/catalog">Каталог</Link>
        <span aria-hidden="true"> / </span>
        <span>{product.title}</span>
      </nav>

      <article className="product-detail">
        <div className="product-detail__media">
          <div className="product-detail__frame product-detail__frame--fav">
            <FavoriteButton productId={product.id} />
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <div className="product-detail__info">
          <h1>{product.title}</h1>
          <p className="product-detail__price">
            {product.price.toLocaleString("ru-RU")} ₽
          </p>
          <p className="product-detail__lead">{product.short}</p>
          <p>{product.description}</p>
          <div className="product-detail__actions">
            <Link to="/contact" className="btn btn--primary">
              Уточнить наличие
            </Link>
            <Link to="/catalog" className="btn btn--outline">
              Другие товары
            </Link>
          </div>
        </div>
      </article>

      {suggestions.length > 0 && (
        <section className="section section--related">
          <h2 className="section__title-sm">Смотрите также</h2>
          <div className="catalog__grid catalog__grid--compact">
            {suggestions.map((p) => (
              <article className="card card--lift card--with-fav" key={p.id}>
                <FavoriteButton productId={p.id} />
                <Link to={`/product/${p.slug}`} className="card__link">
                  <div className="card__img-wrap">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">{p.title}</h3>
                    <p className="card__price">
                      {p.price.toLocaleString("ru-RU")} ₽
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
