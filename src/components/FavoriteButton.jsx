import { useFavorites } from "../context/FavoritesContext";

export default function FavoriteButton({ productId, label = "В избранное" }) {
  const { toggle, has } = useFavorites();
  const active = has(productId);

  return (
    <button
      type="button"
      className={`fav-btn ${active ? "fav-btn--active" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(productId);
      }}
      aria-pressed={active}
      aria-label={active ? `${label} — убрать` : `${label} — добавить`}
      title={active ? "Убрать из избранного" : "В избранное"}
    >
      <span aria-hidden="true">{active ? "♥" : "♡"}</span>
    </button>
  );
}
