import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import { categories, products } from "../data/products";

export default function Catalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const catOk = category === "all" || p.category === category;
      const textOk =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q);
      return catOk && textOk;
    });
  }, [query, category]);

  return (
    <>
      <div className="page-head">
        <h1>Каталог</h1>
        <p className="page-head__lead">
          Фильтруйте по категории или найдите сувенир по названию.
        </p>
      </div>

      <div className="catalog-toolbar">
        <label className="field">
          <span className="field__label">Поиск</span>
          <input
            type="search"
            className="input"
            placeholder="Например: брелок, шар, тарелка…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
        </label>
        <div className="chips" role="group" aria-label="Категории">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              className={
                category === c.id ? "chip chip--active" : "chip"
              }
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <p className="catalog-meta">
        Найдено: {filtered.length}{" "}
        {filtered.length === 1 ? "товар" : "товаров"}
      </p>

      <div className="catalog__grid">
        {filtered.map((p) => (
          <article className="card card--lift card--with-fav" key={p.id}>
            <FavoriteButton productId={p.id} />
            <Link to={`/product/${p.slug}`} className="card__link">
              <div className="card__img-wrap">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
              <div className="card__body">
                <h2 className="card__title">{p.title}</h2>
                <p className="card__excerpt">{p.short}</p>
                <p className="card__price">{p.price.toLocaleString("ru-RU")} ₽</p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="empty-state">
          Ничего не нашлось. Попробуйте другой запрос или сбросьте категорию.
        </p>
      )}
    </>
  );
}
