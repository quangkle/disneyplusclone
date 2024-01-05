import MoviesCarousel from '@/components/movies-carousel'
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/getMovies';

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className=''>
      <h1 className=''>
        Disney home
      </h1>

      <div className='flex flex-col space-y-2 xl:mt-48'>
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  )
}
