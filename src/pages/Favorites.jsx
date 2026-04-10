import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { products } from "../data/products";
import FavoriteButton from "../components/FavoriteButton";

export default function Favorites() {
  const { ids } = useFavorites();
  const list = products.filter((p) => ids.includes(p.id));

  return (
    <>
      <div className="page-head">
        <h1>Избранное</h1>
        <p className="page-head__lead">
          Сохранённые товары хранятся в этом браузере.
        </p>
      </div>

      {list.length === 0 ? (
        <p className="empty-state">
          Пока пусто. Добавляйте товары кнопкой «♡» в каталоге или на странице
          товара.{" "}
          <Link to="/catalog" className="link-arrow">
            Перейти в каталог
          </Link>
        </p>
      ) : (
        <div className="catalog__grid">
          {list.map((p) => (
            <article className="card card--lift card--with-fav" key={p.id}>
              <FavoriteButton productId={p.id} />
              <Link to={`/product/${p.slug}`} className="card__link">
                <div className="card__img-wrap">
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="card__body">
                  <h2 className="card__title">{p.title}</h2>
                  <p className="card__price">
                    {p.price.toLocaleString("ru-RU")} ₽
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
