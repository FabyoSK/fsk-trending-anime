import { useEffect, useState } from "react";

import { AnimeCardItem } from "../components/AnimeCardItem";
import { Header } from "../components/Header";
import api from "../services/api";

import "../styles/animecard.scss";
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
export function TrendingAnimes() {
  const [aniTrend, setAniTrend] = useState<AnimeInfo[]>([]);

  useEffect(() => {
    api.get("trending/anime").then((response) => {
      setAniTrend(response.data.data);
      console.log(response.data.data[0]);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="anime-card-section">
        {aniTrend.map((anime) => {
          return <AnimeCardItem key={anime.id} anime={anime} />;
        })}
      </div>
    </>
  );
}