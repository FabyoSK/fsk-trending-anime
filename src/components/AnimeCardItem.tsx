import { useState } from "react";

interface AnimeItemProps {
  anime: {
    id: number;
    attributes: {
      posterImage: {
        large: string;
      };
      canonicalTitle: string;
      description: string;
    };
  };
}

export function AnimeCardItem(props: AnimeItemProps) {
  const [readMore, setReadMore] = useState(false);
  const MAX_LENGTH = 250;

  function handleShowMore() {
    setReadMore(!readMore);
  }

  return (
    <div key={props.anime.id} className="anime-card">
      {/* <h1>{anime.id}</h1> */}
      <img
        src={props.anime.attributes.posterImage.large}
        alt=""
        className="anime-card-img"
      />
      <div className="anime-card-info">
        <h2>{props.anime.attributes.canonicalTitle}</h2>

        {!readMore
          ? props.anime.attributes.description.substring(0, MAX_LENGTH)
          : props.anime.attributes.description}
        <p></p>
        <button className="anime-card-button" onClick={handleShowMore}>
          {readMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default AnimeCardItem;
