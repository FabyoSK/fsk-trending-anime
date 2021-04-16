import { useState } from "react";
import api from "../services/api";
import traceMoeApi from "../services/Trace.moe.api";
import AnimeCardItem from "./AnimeCardItem";
import "../styles/animecard.scss";
interface AnimeInfo {
  title_english: string;
  episode: number;
  from: number;
  to: number;
  similarity: number;
  title_romaji: string;
}
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

export function AnimeSearchByImage() {
  // const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [animeInfo, setAnimeInfo] = useState<AnimeInfo>();
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

  async function handleImageSearchByLink(imageUrl: string) {
    setAnimeInfo(undefined);
    setAnimesearched([]);

    setHasResult(false);
    console.log(imageUrl);
    await traceMoeApi
      .get("search", {
        params: {
          url: imageUrl,
        },
      })
      .then((response) => {
        setAnimeInfo(response.data.docs[0]);

        api
          .get("anime", {
            params: {
              "filter[text]": animeInfo?.title_romaji,
            },
          })
          .then((response) => setAnimesearched(response.data.data));

        setHasResult(true);
        console.log(animeSearched);
      });
  }

  function showResult() {
    return (
      <div>
        <h1>REsultados aqui pohaaaa</h1>;
        <div className="anime-card-section">
          {animeSearched
            .filter((anime) => animeSearched[0].id === anime.id)
            .map((anime) => {
              console.log(anime);
              return <AnimeCardItem key={anime.id} anime={anime} />;
            })}
        </div>
      </div>
    );
  }
  return (
    <>
      {/* <div id="upload-box">
        <input type="file" onChange={handleUpload} />
        <p>Filename: {file?.name}</p>
        <p>File type: {file?.type}</p>
        <p>File size: {file?.size} bytes</p>
      </div> */}

      <input
        type="text"
        value={imageUrl}
        onChange={(e) => {
          setImageUrl(e.target.value);
        }}
      />
      <button type="button" onClick={() => handleImageSearchByLink(imageUrl)}>
        Search
      </button>

      {hasResult && showResult()}
    </>
  );
}
