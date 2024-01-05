import { Movie } from "@/types";

type Props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;
}

function MoviesCarousel({
    title, movies, isVertical
}: Props) {
    return (
        <div>
            <h2></h2>
        </div>
    )
}

export default MoviesCarousel;