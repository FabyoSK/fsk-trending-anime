import { AnimeSearchByImage } from "../components/AnimeSearchByImage";
import { AnimeSearchByName } from "../components/AnimeSearchByName";
import { Header } from "../components/Header";

export function AnimeSearch() {
  return (
    <>
      <Header />
      <AnimeSearchByName />
      {/* <AnimeSearchByImage /> */}
    </>
  );
}
