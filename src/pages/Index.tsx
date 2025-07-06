import { useState } from "react";
import { Home, Clock, Play, TrendingUp, Globe, Shield } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import MovieSection from "@/components/MovieSection";
import TabContentComponent from "@/components/TabContent";
import MiniPlayer from "@/components/MiniPlayer";

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

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<WebSeries | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [miniPlayerMovie, setMiniPlayerMovie] = useState<Movie | null>(null);
  
  // Simulate user authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentWatchingMovie] = useState({
    id: "1",
    title: "Pulimurugan",
    poster: "https://images.unsplash.com/photo-1489599988341-4c31b197df07?w=400",
    progress: 45
  });

  const movies: Movie[] = [
    {
      id: "1",
      title: "Pulimurugan",
      language: "malayalam",
      year: 2016,
      rating: 8.1,
      duration: "2h 41m",
      genre: ["Action", "Thriller"],
      director: "Vysakh",
      cast: ["Mohanlal", "Kamalini Mukherjee", "Jagapathi Babu"],
      description: "A man-eating tiger terrorizes the locals of a village. Murugan, a hunter, is summoned to kill the predator. An action-packed thriller that showcases the raw power of nature and human determination.",
      poster: "https://images.unsplash.com/photo-1489599988341-4c31b197df07?w=800"
    },
    {
      id: "2",
      title: "Drishyam",
      language: "malayalam",
      year: 2013,
      rating: 8.7,
      duration: "2h 40m",
      genre: ["Crime", "Drama"],
      director: "Jeethu Joseph",
      cast: ["Mohanlal", "Meena", "Asha Sharath"],
      description: "A man goes to extreme lengths to save his family from punishment after they commit an unexpected crime.",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400"
    },
    {
      id: "3",
      title: "Minnal Murali",
      language: "malayalam",
      year: 2021,
      rating: 7.8,
      duration: "2h 38m",
      genre: ["Action", "Superhero"],
      director: "Basil Joseph",
      cast: ["Tovino Thomas", "Guru Somasundaram"],
      description: "A tailor gains special powers after being struck by lightning, but must take on an unexpected enemy.",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400"
    },
    {
      id: "4",
      title: "Vikram",
      language: "tamil",
      year: 2022,
      rating: 8.4,
      duration: "2h 54m",
      genre: ["Action", "Thriller"],
      director: "Lokesh Kanagaraj",
      cast: ["Kamal Haasan", "Vijay Sethupathi", "Fahadh Faasil"],
      description: "Members of a black ops team must track and eliminate a gang of masked murderers. High-octane action meets brilliant storytelling in this thrilling masterpiece.",
      poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800"
    },
    {
      id: "5",
      title: "Ponniyin Selvan I",
      language: "tamil",
      year: 2022,
      rating: 7.8,
      duration: "2h 47m",
      genre: ["Drama", "History"],
      director: "Mani Ratnam",
      cast: ["Vikram", "Aishwarya Rai", "Trisha"],
      description: "Arulmozhi Varman continues on his journey to become Rajaraja I, the greatest ruler of the historic Chola empire.",
      poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
    },
    {
      id: "6",
      title: "RRR",
      language: "telugu",
      year: 2022,
      rating: 8.8,
      duration: "3h 7m",
      genre: ["Action", "Drama"],
      director: "S.S. Rajamouli",
      cast: ["N.T. Rama Rao Jr.", "Ram Charan", "Alia Bhatt"],
      description: "A tale of two legendary revolutionaries and their journey far away from home before they started fighting for their country. Epic action sequences and emotional storytelling.",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800"
    },
    {
      id: "7",
      title: "Pushpa: The Rise",
      language: "telugu",
      year: 2021,
      rating: 7.6,
      duration: "2h 59m",
      genre: ["Action", "Crime"],
      director: "Sukumar",
      cast: ["Allu Arjun", "Rashmika Mandanna", "Fahadh Faasil"],
      description: "A labourer named Pushpa makes enemies as he rises in the world of red sandalwood smuggling.",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400"
    }
  ];

  const webSeries: WebSeries[] = [
    {
      id: "ws1",
      title: "The Boys",
      language: "english",
      year: 2019,
      rating: 8.7,
      seasons: 4,
      genre: ["Action", "Comedy", "Crime"],
      description: "A group of vigilantes set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",
      poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
    },
    {
      id: "ws2",
      title: "Dark",
      language: "german",
      year: 2017,
      rating: 8.8,
      seasons: 3,
      genre: ["Sci-Fi", "Thriller", "Drama"],
      description: "A missing child causes four families to help each other for answers and forces them to face their own dark secrets.",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400"
    },
    {
      id: "ws3",
      title: "Money Heist",
      language: "spanish",
      year: 2017,
      rating: 8.2,
      seasons: 5,
      genre: ["Crime", "Drama", "Thriller"],
      description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      poster: "https://images.unsplash.com/photo-1489599988341-4c31b197df07?w=400"
    }
  ];

  const menuItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Clock, label: "Latest Movie", id: "latest-movie" },
    { icon: Play, label: "Latest Web Serial", id: "latest-series" },
    { icon: TrendingUp, label: "Trending Movie", id: "trending-movie" },
    { icon: TrendingUp, label: "Trending Web Series", id: "trending-series" },
    { icon: Globe, label: "Malayalam Dubbed Movie", id: "dubbed" },
    { icon: Shield, label: "Privacy Policy", id: "privacy" }
  ];

  // Search functionality
  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return movies.filter(movie => 
      movie.title.toLowerCase().includes(query) ||
      movie.director.toLowerCase().includes(query) ||
      movie.cast.some(actor => actor.toLowerCase().includes(query)) ||
      movie.genre.some(genre => genre.toLowerCase().includes(query))
    );
  };

  const handlePlayFromBanner = (movieId: string) => {
    const movie = movies.find(m => m.id === movieId);
    if (movie) {
      setMiniPlayerMovie(movie);
      setShowMiniPlayer(true);
    }
  };

  const handleMovieInfo = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleContinueWatching = () => {
    navigate("/video-player");
  };

  const handleMenuClick = (id: string) => {
    if (id === "privacy") {
      navigate("/privacy-policy");
    }
    setShowMobileMenu(false);
  };

  const handleMovieClick = (movie: Movie) => {
    setMiniPlayerMovie(movie);
    setShowMiniPlayer(true);
  };

  const handleSeriesClick = (series: WebSeries) => {
    setSelectedSeries(series);
  };

  const handlePlayMovie = () => {
    navigate("/video-player");
  };

  const handleExpandMiniPlayer = () => {
    setShowMiniPlayer(false);
    navigate("/video-player");
  };

  const handleCloseMiniPlayer = () => {
    setShowMiniPlayer(false);
    setMiniPlayerMovie(null);
  };

  const getMoviesByLanguage = (language: string) => {
    return movies.filter(movie => movie.language === language);
  };

  const getLatestMovies = () => {
    return [...movies].sort((a, b) => b.year - a.year).slice(0, 6);
  };

  const getTrendingMovies = () => {
    return [...movies].sort((a, b) => b.rating - a.rating).slice(0, 6);
  };

  const getTrendingWebSeries = () => {
    return webSeries.slice(0, 6);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isAuthenticated={isAuthenticated}
        currentWatchingMovie={currentWatchingMovie}
        onContinueWatching={handleContinueWatching}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        menuItems={menuItems}
        onMenuClick={handleMenuClick}
        searchResults={getSearchResults()}
        onMovieClick={handleMovieClick}
      />

      {/* Hero Banner */}
      <div className="container mx-auto px-6 pt-8">
        <HeroBanner
          movies={movies.slice(0, 4)}
          onPlayMovie={handlePlayFromBanner}
          onMovieInfo={handleMovieInfo}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-7 bg-red-900/20 border border-red-500/30 mb-8">
            <TabsTrigger value="home" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Home</TabsTrigger>
            <TabsTrigger value="latest-movie" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Latest</TabsTrigger>
            <TabsTrigger value="latest-series" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Series</TabsTrigger>
            <TabsTrigger value="trending-movie" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Trending</TabsTrigger>
            <TabsTrigger value="trending-series" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Hot Series</TabsTrigger>
            <TabsTrigger value="malayalam" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Malayalam</TabsTrigger>
            <TabsTrigger value="dubbed" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">Dubbed</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabContentComponent
            value="home"
            title="Featured Today"
            movies={getLatestMovies().slice(0, 6)}
            onMovieClick={handleMovieClick}
            onSeriesClick={handleSeriesClick}
          />

          <TabContentComponent
            value="latest-movie"
            title="Latest Movies (Malayalam First)"
            movies={getLatestMovies()}
            onMovieClick={handleMovieClick}
            onSeriesClick={handleSeriesClick}
          />

          <TabContentComponent
            value="latest-series"
            title="Latest Web Series"
            webSeries={webSeries}
            onMovieClick={handleMovieClick}
            onSeriesClick={handleSeriesClick}
          />

          <TabContentComponent
            value="trending-movie"
            title="Trending Movies (Malayalam Amazon Prime)"
            movies={getTrendingMovies()}
            onMovieClick={handleMovieClick}
            onSeriesClick={handleSeriesClick}
          />

          <TabContentComponent
            value="trending-series"
            title="Trending Web Series"
            webSeries={getTrendingWebSeries()}
            onMovieClick={handleMovieClick}
            onSeriesClick={handleSeriesClick}
          />

          <TabContentComponent
            value="malayalam"
            title="Malayalam Movies"
            movies={getMoviesByLanguage("malayalam")}
            onMovieClick={handleMovieClick}
            onSeriesClick={handleSeriesClick}
          />

          <TabContentComponent
            value="dubbed"
            title="Malayalam Dubbed Movies"
            movies={movies.filter(m => m.language !== "malayalam").map(movie => ({...movie, title: `${movie.title} (Malayalam Dubbed)`}))}
            onMovieClick={handleMovieClick}
            onSeriesClick={handleSeriesClick}
          />
        </Tabs>
      </div>

      {/* Mini Player */}
      {showMiniPlayer && miniPlayerMovie && (
        <MiniPlayer
          movie={miniPlayerMovie}
          onExpand={handleExpandMiniPlayer}
          onClose={handleCloseMiniPlayer}
        />
      )}

      {/* Movie Detail Modal */}
      {selectedMovie && (
        <Dialog open={!!selectedMovie} onOpenChange={() => setSelectedMovie(null)}>
          <DialogContent className="bg-black/95 backdrop-blur-md border-red-500/30 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedMovie.poster}
                  alt={selectedMovie.title}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <DialogHeader>
                  <DialogTitle className="text-3xl bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">{selectedMovie.title}</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-4 text-sm">
                  <span>{selectedMovie.year}</span>
                  <span>{selectedMovie.duration}</span>
                  <span className="font-semibold">{selectedMovie.rating}⭐</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{selectedMovie.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-400">Director</h4>
                    <p className="text-gray-300">{selectedMovie.director}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400">Cast</h4>
                    <p className="text-gray-300">{selectedMovie.cast.join(", ")}</p>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200 flex-1"
                    onClick={handlePlayMovie}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Play Now
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Web Series Detail Modal */}
      {selectedSeries && (
        <Dialog open={!!selectedSeries} onOpenChange={() => setSelectedSeries(null)}>
          <DialogContent className="bg-black/95 backdrop-blur-md border-red-500/30 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedSeries.poster}
                  alt={selectedSeries.title}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <DialogHeader>
                  <DialogTitle className="text-3xl bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">{selectedSeries.title}</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-4 text-sm">
                  <span>{selectedSeries.year}</span>
                  <span>{selectedSeries.seasons} Seasons</span>
                  <span className="font-semibold">{selectedSeries.rating}⭐</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{selectedSeries.description}</p>
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 transform hover:scale-105 transition-all duration-200 flex-1"
                    onClick={handlePlayMovie}
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Play Now
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Index;
