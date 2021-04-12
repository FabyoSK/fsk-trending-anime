import { useEffect, useState } from "react";

import api from "./services/api";
import "./styles.scss";
interface AnimeInfo {
  id: number;
  attributes: {
    posterImage: {
      large: string;
    };
    canonicalTitle: string;
    description: string;
  };
}
export function Landing() {
  const [aniTrend, setAniTrend] = useState<AnimeInfo[]>([]);
  const [readMore, setReadMore] = useState(false);
  const MAX_LENGTH = 250;

  useEffect(() => {
    api.get("trending/anime").then((response) => {
      setAniTrend(response.data.data);
      console.log(response.data.data[0]);
    });
  }, []);

  function handleShowMore(content: string) {
    setReadMore(!readMore);
  }
  return (
    <div className="anime-card-section">
      {aniTrend.map((anime: AnimeInfo) => {
        return (
          <div key={anime.id} className="anime-card">
            {/* <h1>{anime.id}</h1> */}
            <img
              src={anime.attributes.posterImage.large}
              alt=""
              className="anime-card-img"
            />
            <div className="anime-card-info">
              <h2>{anime.attributes.canonicalTitle}</h2>

              {!readMore
                ? anime.attributes.description.substring(0, MAX_LENGTH)
                : anime.attributes.description}
              <p></p>
              <button
                className="anime-card-button"
                onClick={() => handleShowMore(anime.attributes.description)}
              >
                Clicame
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
