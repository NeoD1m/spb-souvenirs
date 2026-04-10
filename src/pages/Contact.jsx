import { useState } from "react";

const initial = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm(initial);
  }

  return (
    <>
      <div className="page-head">
        <h1>Контакты</h1>
        <p className="page-head__lead">
          Напишите нам — ответим в рабочие часы в течение одного дня.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h2>Шоурум</h2>
          <p>Невский проспект, 28</p>
          <p className="contact-card__muted">Пн–Сб 10:00–20:00</p>
          <p>
            <a href="tel:+78120000000">+7 (812) 000-00-00</a>
          </p>
          <p>
            <a href="mailto:info@suveniryspb.ru">info@suveniryspb.ru</a>
          </p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {sent && (
            <div className="form__notice" role="status">
              Спасибо! Мы получили сообщение и свяжемся с вами по указанным
              контактам.
            </div>
          )}
          <label className="field">
            <span className="field__label">Имя</span>
            <input
              className="input"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />
          </label>
          <label className="field">
            <span className="field__label">Email</span>
            <input
              className="input"
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </label>
          <label className="field">
            <span className="field__label">Телефон</span>
            <input
              className="input"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              autoComplete="tel"
            />
          </label>
          <label className="field">
            <span className="field__label">Сообщение</span>
            <textarea
              className="input input--area"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn btn--primary btn--block">
            Отправить
          </button>
        </form>
      </div>
    </>
  );
}
