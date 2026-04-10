import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1>Страница не найдена</h1>
      <p className="not-found__text">
        Возможно, ссылка устарела или адрес введён с ошибкой.
      </p>
      <Link to="/" className="btn btn--primary">
        На главную
      </Link>
    </div>
  );
}
