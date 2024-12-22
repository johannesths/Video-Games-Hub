import useData from "./useData";

/* Utelize useData generic hook to fetch genres */

export interface Genre {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

const useGenres = () => useData<Genre>("/genres");


export default useGenres;