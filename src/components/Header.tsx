import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Bracelets", href: "/bracelets" },
    { name: "Necklaces", href: "/necklaces" },
    { name: "Bangles", href: "/bangles" },
    { name: "Waist Beads", href: "/waist-beads" },
    { name: "Couple Sets", href: "/couple-sets" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-bold text-lg">PC</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                Pinky Cuties
              </h1>
              <p className="text-xs text-muted-foreground">Handmade African Jewelry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary-light">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary-light relative">
              <Heart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 bg-accent text-accent-foreground">
                3
              </Badge>
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-primary-light">
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="hover:bg-primary-light relative">
              <ShoppingBag className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 bg-primary text-primary-foreground">
                2
              </Badge>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2 px-2 rounded-md hover:bg-primary-light"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Search className="h-4 w-4" />
                  <span>Search</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <Heart className="h-4 w-4" />
                  <span>Wishlist</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Account</span>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;