import { SearchResults } from "@/types";

async function fetchFromTmdb(url: URL, cacheTime?: number) {
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("language", "en-US");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: cacheTime || 24 * 60 * 60 //24hrs
        }
    };

    const response = await fetch(url, options);
    const data = (await response.json()) as SearchResults

    return data;
}

export async function getUpcomingMovies() {
    const url = new URL("https://api.themoviesdb.org/3/movies/upcoming");
    const data = await fetchFromTmdb(url);

    return data.results;
}

export async function getTopRatedMovies() {
    const url = new URL("https://api.themoviesdb.org/3/movies/top_rated");
    const data = await fetchFromTmdb(url);

    return data.results;
}

export async function getPopularMovies() {
    const url = new URL("https://api.themoviesdb.org/3/movies/popular");
    const data = await fetchFromTmdb(url);

    return data.results;
}

export async function getDiscoverMovies(genreId?: string, keywords?: string) {
    const url = new URL("https://api.themoviesdb.org/3/discover/movie");

    keywords && url.searchParams.set("with_keywords", keywords);
    genreId && url.searchParams.set("with_genres", genreId);

    const data = await fetchFromTmdb(url);

    return data.results;
}

export async function getSearchedMovies(term: string) {
    const url = new URL("https://api.themoviesdb.org/3/search/movie");
    url.searchParams.set("query", term);
    
    const data = await fetchFromTmdb(url);

    return data.results;
}