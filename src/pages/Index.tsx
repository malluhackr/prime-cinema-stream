
import { useState } from "react";
import { Search, Play, Info, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
  trailer?: string;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Sample movie data - in a real app, this would come from an API
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
      id: "4",
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
      id: "5",
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
      id: "6",
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

  const featuredMovie = movies[0];

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getMoviesByLanguage = (language: string) => {
    return filteredMovies.filter(movie => movie.language === language);
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
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-80 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${featuredMovie.poster})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <Badge className="mb-4 bg-cinema-gold text-black">Featured Movie</Badge>
            <h2 className="text-6xl font-bold mb-4 text-shadow">{featuredMovie.title}</h2>
            <p className="text-xl mb-6 text-gray-200 leading-relaxed">
              {featuredMovie.description}
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{featuredMovie.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-5 w-5 text-gray-400" />
                <span>{featuredMovie.duration}</span>
              </div>
              <span className="text-gray-400">{featuredMovie.year}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-red-gradient hover:scale-105 transition-transform text-white font-semibold px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Play Now
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-3">
                    <Info className="mr-2 h-5 w-5" />
                    More Info
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-cinema-dark border-white/20 text-white max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{featuredMovie.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-gray-300">{featuredMovie.description}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Director</h4>
                        <p className="text-gray-300">{featuredMovie.director}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Cast</h4>
                        <p className="text-gray-300">{featuredMovie.cast.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {featuredMovie.genre.map((g) => (
                        <Badge key={g} variant="secondary" className="bg-cinema-purple">
                          {g}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Categories */}
      <section className="container mx-auto px-6 py-12">
        <Tabs defaultValue="malayalam" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 border border-white/20 mb-8">
            <TabsTrigger value="malayalam" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">
              Malayalam
            </TabsTrigger>
            <TabsTrigger value="tamil" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">
              Tamil
            </TabsTrigger>
            <TabsTrigger value="telugu" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">
              Telugu
            </TabsTrigger>
            <TabsTrigger value="english" className="data-[state=active]:bg-cinema-gold data-[state=active]:text-black">
              English
            </TabsTrigger>
          </TabsList>

          {["malayalam", "tamil", "telugu", "english"].map((language) => (
            <TabsContent key={language} value={language} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getMoviesByLanguage(language).map((movie) => (
                  <Card
                    key={movie.id}
                    className="bg-white/5 border-white/10 overflow-hidden card-hover cursor-pointer group"
                    onClick={() => setSelectedMovie(movie)}
                  >
                    <div className="relative">
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-white group-hover:text-cinema-gold transition-colors">
                        {movie.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                        <span>{movie.year}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
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
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

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
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{selectedMovie.rating}</span>
                  </div>
                  <span>{selectedMovie.year}</span>
                  <span>{selectedMovie.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedMovie.genre.map((g) => (
                    <Badge key={g} className="bg-cinema-purple">
                      {g}
                    </Badge>
                  ))}
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
                  <Button className="bg-red-gradient hover:scale-105 transition-transform flex-1">
                    <Play className="mr-2 h-5 w-5" />
                    Play Now
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Add to Watchlist
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
