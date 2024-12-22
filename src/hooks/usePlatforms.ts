import useData from "./useData";
import { Platform } from "./useGames";
  
/* Utelize useData generic hook to fetch platforms */

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
export default usePlatforms;