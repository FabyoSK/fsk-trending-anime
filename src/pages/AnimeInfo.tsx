import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";

import "../styles/animeInfo.scss";

interface AnimeInfoInterface {
  id: number;
  attributes: {
    canonicalTitle: string;
    coverImage: {
      original: string;
    };
    posterImage: {
      large: string;
    };
    description: string;
  };
}
export function AnimeInfo() {
  const [animeInfo, setAnimeInfo] = useState<AnimeInfoInterface>();

  const { id }: { id: string } = useParams();

  useEffect(() => {
    api.get(`anime/${id}`).then((response) => {
      setAnimeInfo(response.data.data);
      console.log(response.data.data);
    });
  }, [id]);

  return (
    <div>
      <div className="hero">
        <img src={animeInfo?.attributes.coverImage?.original} alt="" />
      </div>
      <div className="anime-photo-section">
        <img src={animeInfo?.attributes.posterImage.large} alt="" />
      </div>
      <p>{animeInfo?.attributes.description}</p>
    </div>
  );
}
