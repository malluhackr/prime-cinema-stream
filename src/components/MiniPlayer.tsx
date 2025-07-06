
import { useState } from "react";
import { Play, Pause, Maximize2, Volume2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface MiniPlayerProps {
  movie: {
    id: string;
    title: string;
    poster: string;
    year: number;
    rating: number;
    genre: string[];
    duration: string;
  };
  onExpand: () => void;
  onClose: () => void;
}

const MiniPlayer = ({ movie, onExpand, onClose }: MiniPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-black/95 backdrop-blur-md border border-red-500/30 rounded-lg shadow-2xl z-40 overflow-hidden">
      {/* Mini Video Area */}
      <div 
        className="relative h-48 bg-gradient-to-br from-red-900/20 to-black cursor-pointer group"
        onClick={onExpand}
      >
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="icon"
            className="bg-red-600/80 hover:bg-red-700 rounded-full p-4 transform group-hover:scale-110 transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
        </div>

        {/* Expand Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 text-white hover:bg-red-600/20"
          onClick={(e) => {
            e.stopPropagation();
            onExpand();
          }}
        >
          <Maximize2 className="h-4 w-4" />
        </Button>

        {/* Close Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 left-2 text-white hover:bg-red-600/20"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ×
        </Button>
      </div>

      {/* Movie Info */}
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">{movie.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
          <span>{movie.year}</span>
          <span>⭐ {movie.rating}</span>
          <span>{movie.duration}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {movie.genre.slice(0, 2).map((g) => (
            <Badge key={g} variant="secondary" className="text-xs bg-red-900/30 border-red-500/30 text-red-400">
              {g}
            </Badge>
          ))}
        </div>
        
        {/* Mini Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-red-600/20 h-8 w-8"
            >
              <Volume2 className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-red-600/20 h-8 w-8"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-1"
            onClick={onExpand}
          >
            Watch Full Screen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;
