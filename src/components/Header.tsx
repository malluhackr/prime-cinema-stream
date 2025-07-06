
import { useState } from "react";
import { Search, Menu, User } from "lucide-react";
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
  onMenuClick
}: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
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
                className="pl-10 w-80 bg-red-900/20 border-red-500/30 text-white placeholder:text-gray-400 focus:border-red-500"
              />
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
        
        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onMenuClick(item.id)}
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
  );
};

export default Header;
