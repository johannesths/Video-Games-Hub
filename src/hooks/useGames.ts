import { GameQuery } from "@/App";
import useData from "./useData";

/* Utelizes generic data hook (useData) to fetch games from RAWG API */

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform}[];
    metacritic: number
  }
  
  
const useGames = (gameQuery: GameQuery) => 
  useData<Game>("/games", { params: { genres: gameQuery.genre?.id,
     platforms: gameQuery.platform?.id,
     ordering: gameQuery.sortOrder,
     search: gameQuery.searchText,
    }},
     [gameQuery]); 

export default useGames;