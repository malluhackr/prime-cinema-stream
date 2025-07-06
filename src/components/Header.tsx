
import { useState } from "react";
import { Search, Menu, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import WatchingNow from "@/components/WatchingNow";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isAuthenticated: boolean;
  currentWatchingMovie: {
    id: string;
    title: string;
    poster: string;
    progress: number;
  };
  onContinueWatching: () => void;
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
  menuItems: Array<{
    icon: any;
    label: string;
    id: string;
  }>;
  onMenuClick: (id: string) => void;
  searchResults?: Array<{
    id: string;
    title: string;
    year: number;
    poster: string;
    cast: string[];
    director: string;
  }>;
  onMovieClick: (movie: any) => void;
}

const Header = ({
  searchQuery,
  setSearchQuery,
  isAuthenticated,
  currentWatchingMovie,
  onContinueWatching,
  showMobileMenu,
  setShowMobileMenu,
  menuItems,
  onMenuClick,
  searchResults = [],
  onMovieClick
}: HeaderProps) => {
  const navigate = useNavigate();
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSearchResults(query.length > 0);
  };

  const handleSearchResultClick = (movie: any) => {
    setSearchQuery("");
    setShowSearchResults(false);
    onMovieClick(movie);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setShowSearchResults(false);
  };

  return (
    <header className="relative z-50 bg-gradient-to-r from-red-900/20 to-black/60 backdrop-blur-md border-b border-red-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
              KeralaPrime
            </h1>
            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onMenuClick(item.id)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {/* Enhanced Search Bar */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by title, actor, or director..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-10 w-96 bg-red-900/20 border-red-500/30 text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              
              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-md border border-red-500/30 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                  {searchResults.map((movie) => (
                    <div
                      key={movie.id}
                      onClick={() => handleSearchResultClick(movie)}
                      className="flex items-center space-x-3 p-3 hover:bg-red-900/20 cursor-pointer border-b border-red-500/10 last:border-b-0"
                    >
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="text-white font-medium">{movie.title}</h4>
                        <p className="text-gray-400 text-sm">{movie.year}</p>
                        <p className="text-gray-400 text-xs">Dir: {movie.director}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {showSearchResults && searchResults.length === 0 && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-md border border-red-500/30 rounded-lg shadow-xl p-4 z-50">
                  <p className="text-gray-400 text-center">No movies found</p>
                </div>
              )}
            </div>
            
            {!isAuthenticated ? (
              <Button
                onClick={handleLogin}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-200"
              >
                <User className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            ) : (
              <div className="w-64">
                <WatchingNow
                  currentMovie={currentWatchingMovie}
                  onContinueWatching={onContinueWatching}
                />
              </div>
            )}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-red-600/20"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="md:hidden mt-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search movies..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-10 pr-10 w-full bg-red-900/20 border-red-500/30 text-white placeholder:text-gray-400 focus:border-red-500"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onMenuClick(item.id)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors p-2 rounded hover:bg-white/10"
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
  );
};

export default Header;
