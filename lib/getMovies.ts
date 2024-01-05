import { SearchResults } from "@/types";
import axios from "axios";

async function fetchFromTmdb(url: URL, cacheTime?: number) {
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");

    const options = {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: cacheTime || 24 * 60 * 60 //24hrs
        }
    };

    const response = await axios.get(url.toString(), options);
    const data = response.data as SearchResults

    return data;
}

export async function getUpcomingMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
    const data = await fetchFromTmdb(url);

    return data.results;
}

export async function getTopRatedMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
    const data = await fetchFromTmdb(url);

    return data.results;
}

export async function getPopularMovies() {
    const url = new URL("https://api.themoviedb.org/3/movie/popular");
    const data = await fetchFromTmdb(url);

    return data.results;
}

export async function getDiscoverMovies(genreId?: string, keywords?: string) {
    const url = new URL("https://api.themoviedb.org/3/discover/movie");

    keywords && url.searchParams.set("with_keywords", keywords);
    genreId && url.searchParams.set("with_genres", genreId);

    const data = await fetchFromTmdb(url);

    return data.results;
}

export async function getSearchedMovies(term: string) {
    const url = new URL("https://api.themoviedb.org/3/search/movie");
    url.searchParams.set("query", term);
    
    const data = await fetchFromTmdb(url);

    return data.results;
}