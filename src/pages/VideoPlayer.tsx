
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, Settings, ArrowLeft, Languages, Star, Maximize, RotateCcw, RotateCw, Volume1, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAudio, setSelectedAudio] = useState("malayalam");
  const [selectedQuality, setSelectedQuality] = useState("1080p");
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(9045); // 2h 30m 45s in seconds
  
  const playerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  const audioTracks = [
    { id: "malayalam", label: "Malayalam", flag: "🇮🇳" },
    { id: "english", label: "English", flag: "🇺🇸" },
    { id: "tamil", label: "Tamil", flag: "🇮🇳" },
    { id: "hindi", label: "Hindi", flag: "🇮🇳" }
  ];

  const qualities = ["360p", "720p", "1080p", "4K"];
  const playbackSpeeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  useEffect(() => {
    // Simulate video progress
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(prev => Math.min(prev + 1, duration));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSeek = (value: number[]) => {
    setCurrentTime(value[0]);
  };

  return (
    <div 
      ref={playerRef}
      className="min-h-screen bg-black text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Video Player Container */}
      <div className="relative w-full h-screen bg-black flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
        
        {/* Back Button */}
        <Button
          variant="ghost"
          className={`absolute top-4 left-4 z-30 text-white hover:bg-red-600/20 transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </Button>

        {/* Center Play/Pause Button */}
        <Button
          className="z-20 bg-red-600/80 hover:bg-red-700/90 rounded-full p-6 transform hover:scale-110 transition-all duration-200 shadow-lg shadow-red-600/30"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause className="h-12 w-12" /> : <Play className="h-12 w-12" />}
        </Button>

        {/* Video Controls */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Progress Bar */}
          <div className="w-full mb-4">
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={handleSeek}
              className="w-full cursor-pointer"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-red-600/20"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-red-600/20"
                  onClick={toggleMute}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="h-5 w-5" />
                  ) : volume < 50 ? (
                    <Volume1 className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </Button>
                <div className="w-20">
                  <Slider
                    value={[isMuted ? 0 : volume]}
                    max={100}
                    step={1}
                    onValueChange={(value) => {
                      setVolume(value[0]);
                      setIsMuted(value[0] === 0);
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              
              <span className="text-sm font-mono">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              {/* Playback Speed */}
              <select
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                className="bg-red-900/50 border border-red-500/30 rounded px-2 py-1 text-sm focus:bg-red-800/50 focus:border-red-500"
              >
                {playbackSpeeds.map((speed) => (
                  <option key={speed} value={speed} className="bg-black">
                    {speed}x
                  </option>
                ))}
              </select>

              {/* Audio Selection */}
              <div className="flex items-center space-x-2">
                <Languages className="h-4 w-4" />
                <select
                  value={selectedAudio}
                  onChange={(e) => setSelectedAudio(e.target.value)}
                  className="bg-red-900/50 border border-red-500/30 rounded px-2 py-1 text-sm focus:bg-red-800/50 focus:border-red-500"
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
                className="bg-red-900/50 border border-red-500/30 rounded px-2 py-1 text-sm focus:bg-red-800/50 focus:border-red-500"
              >
                {qualities.map((quality) => (
                  <option key={quality} value={quality} className="bg-black">
                    {quality}
                  </option>
                ))}
              </select>

              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-red-600/20"
                onClick={toggleFullscreen}
              >
                <Maximize className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Movie Info */}
      <div className="container mx-auto px-6 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">Pulimurugan</h1>
          <div className="flex items-center space-x-4 mb-4">
            <Badge className="bg-red-600 text-white">2016</Badge>
            <Badge variant="secondary" className="bg-red-900/30 border-red-500/30 text-red-400">Action</Badge>
            <Badge variant="secondary" className="bg-red-900/30 border-red-500/30 text-red-400">Thriller</Badge>
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 text-red-400 fill-current" />
              <span className="text-red-400 font-semibold">8.1</span>
            </div>
          </div>
          <p className="text-gray-300 text-lg max-w-4xl">
            A man-eating tiger terrorizes the locals of a village. Murugan, a hunter, is summoned to kill the predator. 
            An action-packed thriller that showcases the raw power of nature and human determination.
          </p>
        </div>

        {/* Current Playback Info */}
        <div className="bg-gradient-to-r from-red-900/20 to-black/40 rounded-lg p-4 mb-6 border border-red-500/20">
          <h3 className="text-lg font-semibold mb-2 text-red-400">Now Playing</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">{audioTracks.find(t => t.id === selectedAudio)?.flag}</span>
              <span className="text-red-300 font-medium">
                {audioTracks.find(t => t.id === selectedAudio)?.label} Audio
              </span>
              <Badge variant="outline" className="border-red-500 text-red-400">
                {selectedQuality}
              </Badge>
              <Badge variant="outline" className="border-red-500 text-red-400">
                Speed: {playbackSpeed}x
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-red-400 text-sm">Volume: {isMuted ? 'Muted' : `${volume}%`}</p>
              <p className="text-gray-400 text-sm">Progress: {Math.round((currentTime / duration) * 100)}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
