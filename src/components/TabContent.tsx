
import { TabsContent } from "@/components/ui/tabs";
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

interface WebSeries {
  id: string;
  title: string;
  language: string;
  year: number;
  rating: number;
  seasons: number;
  genre: string[];
  description: string;
  poster: string;
}

interface TabContentProps {
  value: string;
  title: string;
  movies?: Movie[];
  webSeries?: WebSeries[];
  onMovieClick: (movie: Movie) => void;
  onSeriesClick: (series: WebSeries) => void;
}

const TabContentComponent = ({ value, title, movies, webSeries, onMovieClick, onSeriesClick }: TabContentProps) => {
  return (
    <TabsContent value={value} className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {movies && movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onMovieClick(movie)}
            size="small"
          />
        ))}
        {webSeries && webSeries.map((series) => (
          <MovieCard
            key={series.id}
            movie={{
              id: series.id,
              title: series.title,
              rating: series.rating,
              year: series.year,
              genre: series.genre,
              poster: series.poster
            }}
            onClick={() => onSeriesClick(series)}
            size="small"
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default TabContentComponent;
