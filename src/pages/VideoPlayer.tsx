
import { useState } from "react";
import { Play, Pause, Volume2, Settings, ArrowLeft, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState("malayalam");
  const [selectedQuality, setSelectedQuality] = useState("1080p");

  const audioTracks = [
    { id: "malayalam", label: "Malayalam", flag: "🇮🇳" },
    { id: "english", label: "English", flag: "🇺🇸" },
    { id: "tamil", label: "Tamil", flag: "🇮🇳" },
    { id: "hindi", label: "Hindi", flag: "🇮🇳" }
  ];

  const qualities = ["360p", "720p", "1080p", "4K"];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Player Container */}
      <div className="relative w-full h-[60vh] bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
        
        {/* Back Button */}
        <Button
          variant="ghost"
          className="absolute top-4 left-4 z-20 text-white hover:bg-white/20"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </Button>

        {/* Play/Pause Button */}
        <Button
          className="z-10 bg-white/20 hover:bg-white/30 rounded-full p-4"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
        </Button>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white">
                <Volume2 className="h-5 w-5" />
              </Button>
              <span className="text-sm">00:15:30 / 02:30:45</span>
            </div>
            
            <div className="flex items-center space-x-2">
              {/* Audio Selection */}
              <div className="flex items-center space-x-2">
                <Languages className="h-4 w-4" />
                <select
                  value={selectedAudio}
                  onChange={(e) => setSelectedAudio(e.target.value)}
                  className="bg-white/20 border border-white/30 rounded px-2 py-1 text-sm"
                >
                  {audioTracks.map((track) => (
                    <option key={track.id} value={track.id} className="bg-black">
                      {track.flag} {track.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quality Selection */}
              <select
                value={selectedQuality}
                onChange={(e) => setSelectedQuality(e.target.value)}
                className="bg-white/20 border border-white/30 rounded px-2 py-1 text-sm"
              >
                {qualities.map((quality) => (
                  <option key={quality} value={quality} className="bg-black">
                    {quality}
                  </option>
                ))}
              </select>

              <Button variant="ghost" size="icon" className="text-white">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/30 rounded-full h-1 mt-2">
            <div className="bg-red-500 h-1 rounded-full" style={{ width: "25%" }}></div>
          </div>
        </div>
      </div>

      {/* Movie Info */}
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4">Pulimurugan</h1>
          <div className="flex items-center space-x-4 mb-4">
            <Badge className="bg-cinema-gold text-black">2016</Badge>
            <Badge variant="secondary">Action</Badge>
            <Badge variant="secondary">Thriller</Badge>
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span>8.1</span>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-4xl">
            A man-eating tiger terrorizes the locals of a village. Murugan, a hunter, is summoned to kill the predator. 
            An action-packed thriller that showcases the raw power of nature and human determination.
          </p>
        </div>

        {/* Current Audio Track */}
        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Now Playing</h3>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{audioTracks.find(t => t.id === selectedAudio)?.flag}</span>
            <span className="text-cinema-gold font-medium">
              {audioTracks.find(t => t.id === selectedAudio)?.label} Audio
            </span>
            <Badge variant="outline" className="border-cinema-gold text-cinema-gold">
              {selectedQuality}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
