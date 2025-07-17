import { useState, useEffect } from "react";
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_urls: string[];
  colors: string[];
  sizes: string[];
  is_featured: boolean;
  category_id: string;
  created_at?: string;
  categories?: {
    name: string;
    slug: string;
  };
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

const Shop = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories (
            name,
            slug
          )
        `)
        .eq('is_active', true);

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-30", label: "Under $30" },
    { value: "30-60", label: "$30 - $60" },
    { value: "60-100", label: "$60 - $100" },
    { value: "100+", label: "Over $100" },
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.categories?.slug === selectedCategory;
    
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

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "newest":
        return new Date(b.created_at || '').getTime() - new Date(a.created_at || '').getTime();
      case "featured":
      default:
        return b.is_featured ? 1 : -1;
    }
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
                    <SelectItem value="all">All Products</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.slug}>
                        {category.name}
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
                {sortedProducts.length} products
              </span>
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  {categories.find(c => c.slug === selectedCategory)?.name}
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
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
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
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className={`grid gap-6 ${
              isGridView 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {sortedProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image_urls[0] || "/placeholder.svg"}
                  category={product.categories?.name || ""}
                  rating={5}
                  reviews={0}
                  isBestseller={product.is_featured}
                />
              ))}
            </div>
          )}

          {/* No Products Message */}
          {!loading && sortedProducts.length === 0 && (
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