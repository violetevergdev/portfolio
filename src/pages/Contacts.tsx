const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>MO, Russia</p>
            <p>Moscow, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram </h2>
            <p>
              <a href="https://t.me/idnwhoiam">@idnwhoiam</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">WhatsApp</h2>
            <p>
              <a href="tel:+79777586203">+7 977 758 62 03</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:belabelllil@gmail.com">belabelllil@gmail.com</a>
            </p>
            <p>
              <a href="mailto:belyaeva.viol@yandex.ru">
                belyaeva.viol@yandex.ru
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
