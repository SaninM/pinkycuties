import { Link } from "react-router-dom";
import { ArrowRight, Star, Truck, Shield, Headphones, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import heroImage from "@/assets/hero-jewelry.jpg";
import braceletImage from "@/assets/product-bracelet-1.jpg";
import necklaceImage from "@/assets/product-necklace-1.jpg";
import waistBeadsImage from "@/assets/product-waist-beads-1.jpg";
import coupleSetImage from "@/assets/product-couple-set-1.jpg";

const Homepage = () => {
  const featuredProducts = [
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
  ];

  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Free Shipping",
      description: "Free delivery on orders over KSh 3,000"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guarantee",
      description: "Authentic African beads, handcrafted with care"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "We're here to help with any questions"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Artisan Made",
      description: "Supporting local African artisans"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Handcrafted
              <span className="bg-gradient-primary bg-clip-text text-transparent"> African</span>
              <br />
              Jewelry
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the beauty of authentic African bead jewelry. Each piece tells a story 
              of heritage, craftsmanship, and timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6"
              >
                <Link to="/shop">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-primary hover:bg-primary-light"
              >
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked pieces that showcase the beauty and craftsmanship of African bead jewelry
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-primary hover:bg-primary-light">
              <Link to="/shop">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground">
              Find the perfect piece for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Bracelets", href: "/bracelets", image: braceletImage },
              { name: "Necklaces", href: "/necklaces", image: necklaceImage },
              { name: "Waist Beads", href: "/waist-beads", image: waistBeadsImage },
            ].map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group relative aspect-square rounded-lg overflow-hidden shadow-soft hover:shadow-gold transition-all duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <div className="flex items-center text-white">
                    <span className="text-sm">Shop Now</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Our African Heritage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Pinky Cuties, we celebrate the rich tradition of African bead making. 
                Each piece in our collection is handcrafted by skilled artisans who have 
                passed down their techniques through generations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the vibrant colors to the intricate patterns, every bead tells a story 
                of culture, heritage, and artistic excellence. We're proud to bring these 
                beautiful traditions to jewelry lovers around the world.
              </p>
              <Button asChild variant="outline" size="lg" className="border-primary hover:bg-primary-light">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-gold">
                <img
                  src={heroImage}
                  alt="African artisan crafting jewelry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                rating: 5,
                comment: "Absolutely beautiful jewelry! The quality is amazing and the beads are so vibrant. I get compliments everywhere I go.",
              },
              {
                name: "Grace K.",
                rating: 5,
                comment: "I love supporting African artisans through Pinky Cuties. The waist beads are authentic and beautifully made.",
              },
              {
                name: "David & Lisa",
                rating: 5,
                comment: "We bought the couple set for our anniversary. It's perfect and arrived beautifully packaged. Highly recommend!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;