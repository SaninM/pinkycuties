import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
  category: string;
  isBestseller?: boolean;
  isNew?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating = 5,
  reviews = 0,
  category,
  isBestseller = false,
  isNew = false,
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg border border-border overflow-hidden hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {isBestseller && (
          <Badge className="bg-accent text-accent-foreground">
            Bestseller
          </Badge>
        )}
        {isNew && (
          <Badge variant="secondary">
            New
          </Badge>
        )}
        {originalPrice && (
          <Badge variant="destructive">
            Sale
          </Badge>
        )}
      </div>

      {/* Wishlist Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
      >
        <Heart className="h-4 w-4" />
      </Button>

      {/* Product Image */}
      <Link to={`/product/${id}`} className="block">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {category}
          </p>
          <Link to={`/product/${id}`}>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {name}
            </h3>
          </Link>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < rating ? "fill-accent text-accent" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-foreground">
              KSh {price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                KSh {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          size="sm"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;