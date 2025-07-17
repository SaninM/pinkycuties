import { useState } from "react";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import braceletImage from "@/assets/product-bracelet-1.jpg";
import necklaceImage from "@/assets/product-necklace-1.jpg";
import waistBeadsImage from "@/assets/product-waist-beads-1.jpg";
import coupleSetImage from "@/assets/product-couple-set-1.jpg";

const Shop = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");

  const allProducts = [
    {
      id: "1",
      name: "Pink Serenity African Bead Bracelet",
      price: 2500,
      originalPrice: 3200,
      image: braceletImage,
      category: "Bracelets",
      rating: 5,
      reviews: 24,
      isBestseller: true,
    },
    {
      id: "2", 
      name: "Heritage Multi-Strand Necklace",
      price: 4800,
      image: necklaceImage,
      category: "Necklaces",
      rating: 5,
      reviews: 18,
      isNew: true,
    },
    {
      id: "3",
      name: "Traditional Waist Beads Collection",
      price: 1800,
      image: waistBeadsImage,
      category: "Waist Beads",
      rating: 5,
      reviews: 32,
      isBestseller: true,
    },
    {
      id: "4",
      name: "Unity Couple Jewelry Set",
      price: 6500,
      originalPrice: 8000,
      image: coupleSetImage,
      category: "Couple Sets",
      rating: 5,
      reviews: 12,
    },
    {
      id: "5",
      name: "Royal Gold Bangle Set",
      price: 3200,
      image: braceletImage,
      category: "Bangles",
      rating: 5,
      reviews: 15,
    },
    {
      id: "6",
      name: "Sunset Coral Necklace",
      price: 3800,
      image: necklaceImage,
      category: "Necklaces",
      rating: 4,
      reviews: 21,
      isNew: true,
    },
    {
      id: "7",
      name: "Earth Goddess Waist Beads",
      price: 2200,
      image: waistBeadsImage,
      category: "Waist Beads",
      rating: 5,
      reviews: 28,
    },
    {
      id: "8",
      name: "Harmony Couple Bracelets",
      price: 4200,
      originalPrice: 5000,
      image: coupleSetImage,
      category: "Couple Sets",
      rating: 5,
      reviews: 8,
    },
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "Bracelets", label: "Bracelets" },
    { value: "Necklaces", label: "Necklaces" },
    { value: "Bangles", label: "Bangles" },
    { value: "Waist Beads", label: "Waist Beads" },
    { value: "Couple Sets", label: "Couple Sets" },
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-2000", label: "Under KSh 2,000" },
    { value: "2000-4000", label: "KSh 2,000 - 4,000" },
    { value: "4000-6000", label: "KSh 4,000 - 6,000" },
    { value: "6000+", label: "Over KSh 6,000" },
  ];

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    
    let priceMatch = true;
    if (selectedPriceRange !== "all") {
      const [min, max] = selectedPriceRange.split("-");
      if (max) {
        priceMatch = product.price >= parseInt(min) && product.price <= parseInt(max);
      } else {
        priceMatch = product.price >= parseInt(min.replace("+", ""));
      }
    }
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
          Shop Our Collection
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover handcrafted African bead jewelry made with love and tradition
        </p>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        <Card className="lg:w-80 h-fit">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="h-5 w-5" />
              <h3 className="font-semibold">Filters</h3>
            </div>
            
            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Category
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Filter */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Price Range
                </label>
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedPriceRange("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Products Section */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {categories.find(c => c.value === selectedCategory)?.label}
                  <button 
                    onClick={() => setSelectedCategory("all")}
                    className="ml-1 hover:bg-muted-foreground/20 rounded-full p-0.5"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Select defaultValue="featured">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex rounded-md border border-border">
                <Button
                  variant={isGridView ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setIsGridView(true)}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={!isGridView ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setIsGridView(false)}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            isGridView 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Filter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to see more products
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;