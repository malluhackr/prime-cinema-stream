
import MovieCard from "@/components/MovieCard";

interface Movie {
  id: string;
  title: string;
  language: string;
  year: number;
  rating: number;
  duration: string;
  genre: string[];
  director: string;
  cast: string[];
  description: string;
  poster: string;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieSection = ({ title, movies, onMovieClick }: MovieSectionProps) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onMovieClick(movie)}
            size="small"
          />
        ))}
      </div>
    </section>
  );
};

export default MovieSection;
