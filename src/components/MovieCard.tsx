
import { Play, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    rating: number;
    year: number;
    genre: string[];
    poster: string;
    duration?: string;
  };
  onClick: () => void;
  size?: "small" | "medium" | "large";
}

const MovieCard = ({ movie, onClick, size = "medium" }: MovieCardProps) => {
  const sizeClasses = {
    small: "h-48",
    medium: "h-80",
    large: "h-96"
  };

  return (
    <Card
      className="bg-white/5 border-white/10 overflow-hidden card-hover cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={movie.poster}
          alt={movie.title}
          className={`w-full ${sizeClasses[size]} object-cover transition-transform group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Play className="h-12 w-12 text-white" />
        </div>
      </div>
      <CardContent className="p-3">
        <h3 className="font-bold text-sm mb-1 text-white group-hover:text-cinema-gold transition-colors line-clamp-2">
          {movie.title}
        </h3>
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>{movie.year}</span>
          <div className="flex items-center space-x-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span>{movie.rating}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          {movie.genre.slice(0, 2).map((g) => (
            <Badge key={g} variant="secondary" className="text-xs bg-cinema-purple/50">
              {g}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
