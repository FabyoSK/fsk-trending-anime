import React from "react";

import { FiSearch } from "react-icons/fi";
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
            <li>
              <a href="/trending/manga">Top Mangas</a>
            </li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for something" />
          <button type="submit">
            <FiSearch size={16} color="#fff" />
          </button>
        </div>
      </div>
    </header>
  );
}
