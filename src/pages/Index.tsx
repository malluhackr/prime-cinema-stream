
import { useState } from "react";
import { Search, Play, Menu, Home, Clock, TrendingUp, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
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

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<WebSeries | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Sample movie data with more content
  const movies: Movie[] = [
    // Malayalam Movies
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
      description: "A man-eating tiger terrorizes the locals of a village. Murugan, a hunter, is summoned to kill the predator.",
      poster: "https://images.unsplash.com/photo-1489599988341-4c31b197df07?w=400"
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
    // Tamil Movies
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
      description: "Members of a black ops team must track and eliminate a gang of masked murderers.",
      poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400"
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
    // Telugu Movies
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
      description: "A tale of two legendary revolutionaries and their journey far away from home before they started fighting for their country.",
      poster: "https://images.unsplash.com/photo-1489599988341-4c31b197df07?w=400"
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

  // Web Series Data
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

  const handleMenuClick = (id: string) => {
    if (id === "privacy") {
      navigate("/privacy-policy");
    }
    setShowMobileMenu(false);
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handlePlayMovie = () => {
    navigate("/video-player");
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
    <div className="min-h-screen bg-cinema-dark text-white">
      {/* Header */}
      <header className="relative z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-3xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                KeralaPrime
              </h1>
              {/* Desktop Menu */}
              <nav className="hidden lg:flex items-center space-x-6">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cinema-gold transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="grid grid-cols-2 gap-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleMenuClick(item.id)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cinema-gold transition-colors p-2 rounded hover:bg-white/10"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-4 md:grid-cols-7 bg-white/10 border border-white/20 mb-8">
            <TabsTrigger value="home" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">Home</TabsTrigger>
            <TabsTrigger value="latest-movie" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">Latest</TabsTrigger>
            <TabsTrigger value="latest-series" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">Series</TabsTrigger>
            <TabsTrigger value="trending-movie" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">Trending</TabsTrigger>
            <TabsTrigger value="trending-series" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">Hot Series</TabsTrigger>
            <TabsTrigger value="malayalam" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">Malayalam</TabsTrigger>
            <TabsTrigger value="dubbed" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">Dubbed</TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="animate-fade-in">
            <div className="space-y-12">
              {/* Featured Section */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-cinema-gold">Featured Today</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {getLatestMovies().slice(0, 6).map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                      size="small"
                    />
                  ))}
                </div>
              </section>

              {/* Trending Movies */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-cinema-gold">Trending Movies</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {getTrendingMovies().map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      onClick={() => handleMovieClick(movie)}
                      size="small"
                    />
                  ))}
                </div>
              </section>
            </div>
          </TabsContent>

          {/* Latest Movies Tab */}
          <TabsContent value="latest-movie" className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-cinema-gold">Latest Movies (Malayalam First)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {getLatestMovies().map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => handleMovieClick(movie)}
                  size="small"
                />
              ))}
            </div>
          </TabsContent>

          {/* Latest Web Series Tab */}
          <TabsContent value="latest-series" className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-cinema-gold">Latest Web Series</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {webSeries.map((series) => (
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
                  onClick={() => setSelectedSeries(series)}
                  size="small"
                />
              ))}
            </div>
          </TabsContent>

          {/* Trending Movies Tab */}
          <TabsContent value="trending-movie" className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-cinema-gold">Trending Movies (Malayalam Amazon Prime)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {getTrendingMovies().map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => handleMovieClick(movie)}
                  size="small"
                />
              ))}
            </div>
          </TabsContent>

          {/* Trending Web Series Tab */}
          <TabsContent value="trending-series" className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-cinema-gold">Trending Web Series</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {getTrendingWebSeries().map((series) => (
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
                  onClick={() => setSelectedSeries(series)}
                  size="small"
                />
              ))}
            </div>
          </TabsContent>

          {/* Malayalam Movies Tab */}
          <TabsContent value="malayalam" className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-cinema-gold">Malayalam Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {getMoviesByLanguage("malayalam").map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => handleMovieClick(movie)}
                  size="small"
                />
              ))}
            </div>
          </TabsContent>

          {/* Malayalam Dubbed Movies Tab */}
          <TabsContent value="dubbed" className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-cinema-gold">Malayalam Dubbed Movies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {movies.filter(m => m.language !== "malayalam").map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={{...movie, title: `${movie.title} (Malayalam Dubbed)`}}
                  onClick={() => handleMovieClick(movie)}
                  size="small"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Movie Detail Modal */}
      {selectedMovie && (
        <Dialog open={!!selectedMovie} onOpenChange={() => setSelectedMovie(null)}>
          <DialogContent className="bg-cinema-dark border-white/20 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
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
                  <DialogTitle className="text-3xl">{selectedMovie.title}</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-4 text-sm">
                  <span>{selectedMovie.year}</span>
                  <span>{selectedMovie.duration}</span>
                  <span className="font-semibold">{selectedMovie.rating}⭐</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{selectedMovie.description}</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-cinema-gold">Director</h4>
                    <p className="text-gray-300">{selectedMovie.director}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cinema-gold">Cast</h4>
                    <p className="text-gray-300">{selectedMovie.cast.join(", ")}</p>
                  </div>
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="bg-red-gradient hover:scale-105 transition-transform flex-1"
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
          <DialogContent className="bg-cinema-dark border-white/20 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
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
                  <DialogTitle className="text-3xl">{selectedSeries.title}</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-4 text-sm">
                  <span>{selectedSeries.year}</span>
                  <span>{selectedSeries.seasons} Seasons</span>
                  <span className="font-semibold">{selectedSeries.rating}⭐</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{selectedSeries.description}</p>
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="bg-red-gradient hover:scale-105 transition-transform flex-1"
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
