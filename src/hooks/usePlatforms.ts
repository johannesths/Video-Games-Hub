/**
 * usePlatforms.ts
 *
 * Utelizes the useData.ts generic data hook to fetch the game platforms.
 */

import useData from "./useData";
import { Platform } from "./useGames";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
export default usePlatforms;
