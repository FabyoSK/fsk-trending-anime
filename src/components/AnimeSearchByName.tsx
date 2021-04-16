import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import api from "../services/api";
// import traceMoeApi from "../services/Trace.moe.api";

import AnimeCardItem from "./AnimeCardItem";
import "../styles/animecard.scss";
import "../styles/search.scss";

// interface AnimeInfo {
//   title_english: string;
//   episode: number;
//   from: number;
//   to: number;
//   similarity: number;
//   title_romaji: string;
// }
interface AnimeCardProps {
  id: number;
  attributes: {
    posterImage: {
      large: string;
    };
    canonicalTitle: string;
    description: string;
  };
}

export function AnimeSearchByName() {
  // const [file, setFile] = useState();
  const [querie, setQuerie] = useState("");
  // const [animeInfo, setAnimeInfo] = useState<AnimeInfo>();
  const [animeSearched, setAnimesearched] = useState<AnimeCardProps[]>([]);

  const [hasResult, setHasResult] = useState(false);
  // async function handleUpload(event) {
  //   setFile(event.target.files[0]);

  //   console.log("GG");

  //   // Create an object of formData
  //   const formData = new FormData();

  //   // Update the formData object
  //   formData.append("image", file);

  //   // Details of the uploaded file
  //   console.log(file);

  //   await axios
  //     .post("https://trace.moe/api/search", formData)
  //     .then((response) => console.log(response))
  //     .catch((err) => console.log(err));
  // }

  async function handleImageSearch(querie: string) {
    setHasResult(false);
    console.log(querie);

    api
      .get("anime", {
        params: {
          "filter[text]": querie,
          "page[limit]": "12",
        },
      })
      .then((response) => setAnimesearched(response.data.data));

    setHasResult(true);
    console.log(animeSearched);
  }

  function showResult() {
    return (
      <div>
        <h1>Search Result:</h1>
        <div className="anime-card-section">
          {animeSearched.map((anime) => {
            console.log(anime);
            return <AnimeCardItem key={anime.id} anime={anime} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          value={querie}
          onChange={(e) => {
            setQuerie(e.target.value);
          }}
          placeholder="Search for something"
        />
        <button type="submit" onClick={() => handleImageSearch(querie)}>
          <FiSearch size={16} color="#fff" />
        </button>
      </div>

      {hasResult && showResult()}
    </div>
  );
}
