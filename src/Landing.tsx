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

  useEffect(() => {
    api.get("trending/anime").then((response) => {
      setAniTrend(response.data.data);
      console.log(response.data.data[0]);
    });
  }, []);

  return (
    <div>
      {aniTrend.map((anime: AnimeInfo) => {
        return (
          <div key={anime.id} className="anime-card">
            <h1>{anime.id}</h1>
            <img
              src={anime.attributes.posterImage.large}
              alt=""
              className="anime-card-img"
            />
            <h2>{anime.attributes.canonicalTitle}</h2>
            <p>{anime.attributes.description}</p>
          </div>
        );
      })}
    </div>
  );
}
