
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Movie {
  id: string;
  title: string;
  description: string;
  poster: string;
  year: number;
  rating: number;
  genre: string[];
}

interface HeroBannerProps {
  movies: Movie[];
  onPlayMovie: (movieId: string) => void;
  onMovieInfo: (movie: Movie) => void;
}

const HeroBanner = ({ movies, onPlayMovie, onMovieInfo }: HeroBannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
  };

  if (!movies.length) return null;

  const currentMovie = movies[currentIndex];

  return (
    <div className="relative h-[70vh] overflow-hidden rounded-2xl mb-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(220, 38, 38, 0.8), rgba(0, 0, 0, 0.6)), url(${currentMovie.poster})`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center space-x-4">
              <Badge className="bg-red-600 hover:bg-red-700 text-white px-3 py-1">
                {currentMovie.year}
              </Badge>
              <div className="flex items-center space-x-2">
                {currentMovie.genre.slice(0, 2).map((g) => (
                  <Badge key={g} variant="outline" className="border-red-500 text-red-400">
                    {g}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center space-x-1 text-red-400">
                <span>⭐</span>
                <span className="font-semibold">{currentMovie.rating}</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent leading-tight">
              {currentMovie.title}
            </h1>
            
            <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
              {currentMovie.description}
            </p>
            
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => onPlayMovie(currentMovie.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg shadow-red-600/30"
              >
                <Play className="mr-2 h-6 w-6 fill-current" />
                Watch Now
              </Button>
              
              <Button
                onClick={() => onMovieInfo(currentMovie)}
                variant="outline"
                className="border-2 border-red-500 text-red-400 hover:bg-red-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-200"
              >
                <Info className="mr-2 h-5 w-5" />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white rounded-full p-3 z-20"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-red-600 text-white rounded-full p-3 z-20"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-red-500 scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
