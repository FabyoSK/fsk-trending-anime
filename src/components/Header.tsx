import "../styles/header.scss";

export function Header() {
  return (
    <header className="header">
      <div>
        <h1>SKAni</h1>
        <nav>
          <ul>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/trending/animes">Top Animes</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
