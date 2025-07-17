import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground font-bold">PC</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-foreground">Pinky Cuties</h3>
                <p className="text-xs text-muted-foreground">Handmade African Jewelry</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting beautiful handmade African bead jewelry with love and tradition. 
              Each piece tells a story of heritage and artistry.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:bg-primary-light">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-light">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-light">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-light">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Shop All
              </Link>
              <Link to="/bracelets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Bracelets
              </Link>
              <Link to="/necklaces" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Necklaces
              </Link>
              <Link to="/bangles" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Bangles
              </Link>
              <Link to="/waist-beads" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Waist Beads
              </Link>
              <Link to="/couple-sets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Couple Sets
              </Link>
            </nav>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Customer Care</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/size-guide" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Size Guide
              </Link>
              <Link to="/care-instructions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Care Instructions
              </Link>
              <Link to="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Shipping & Returns
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
              <Link to="/custom-orders" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Custom Orders
              </Link>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Stay Connected</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@pinkycuties.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+254 712 345 678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h5 className="text-sm font-medium text-foreground">Newsletter</h5>
              <p className="text-xs text-muted-foreground">
                Get updates on new collections and exclusive offers
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="text-sm"
                />
                <Button variant="default" size="sm" className="bg-gradient-primary hover:opacity-90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/wholesale" className="hover:text-primary transition-colors">
              Wholesale Inquiries
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2024 Pinky Cuties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;