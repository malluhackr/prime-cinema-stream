
import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WatchingNowProps {
  currentMovie: {
    id: string;
    title: string;
    poster: string;
    progress?: number;
  };
  onContinueWatching: () => void;
}

const WatchingNow = ({ currentMovie, onContinueWatching }: WatchingNowProps) => {
  return (
    <Card className="bg-gradient-to-r from-red-900/20 to-black/40 border-red-500/30 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={currentMovie.poster}
              alt={currentMovie.title}
              className="w-16 h-20 object-cover rounded-lg"
            />
            {currentMovie.progress && (
              <div className="absolute bottom-0 left-0 right-0 bg-red-600 h-1 rounded-b-lg">
                <div
                  className="bg-red-400 h-full rounded-b-lg transition-all duration-300"
                  style={{ width: `${currentMovie.progress}%` }}
                />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-red-400 font-semibold text-sm mb-1">Watching Now</h3>
            <p className="text-white font-bold text-lg leading-tight mb-2">
              {currentMovie.title}
            </p>
            
            <Button
              onClick={onContinueWatching}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-semibold rounded-full"
            >
              <Play className="mr-1 h-4 w-4 fill-current" />
              Continue
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WatchingNow;
