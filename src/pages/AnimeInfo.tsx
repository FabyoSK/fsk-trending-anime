import { useEffect, useState } from "react";

import { AnimeCardItem } from "../components/AnimeCardItem";
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
export function AnimeInfo() {
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo>();

  useEffect(() => {
    api.get("anime/41370").then((response) => {
      setAnimeInfo(response.data.data);
      console.log(response.data.data);
    });
  }, []);

  return (
    <div>
      <img src="" alt="" />
      <img src={animeInfo?.attributes.posterImage.large} alt="" />
      <p>{animeInfo?.attributes.description}</p>
    </div>
  );
}
