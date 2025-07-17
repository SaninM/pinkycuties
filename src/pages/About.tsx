import { Heart, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-jewelry.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Craft",
      description: "Every piece is created with love and dedication to preserving African jewelry traditions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Supporting Artisans",
      description: "We work directly with skilled African artisans, ensuring fair trade and sustainable practices."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Excellence",
      description: "Using only the finest African beads and materials, we guarantee exceptional quality in every piece."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Cultural Heritage",
      description: "Celebrating and sharing the rich cultural heritage of African bead making with the world."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pinky Cuties was born from a deep love for African culture and the beautiful 
              tradition of bead making that has been passed down through generations.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Where Tradition Meets Modern Style
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2020, Pinky Cuties began as a small passion project to bring 
                the beauty of authentic African bead jewelry to modern fashion enthusiasts. 
                Our founder, inspired by travels across East Africa, discovered the incredible 
                artistry and cultural significance behind traditional bead making.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we work with a network of skilled artisans across Kenya, Tanzania, 
                and Uganda, ensuring that each piece not only meets our high standards of 
                quality but also supports local communities and preserves ancient crafting techniques.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every bead tells a story. Every color has meaning. Every piece carries the 
                spirit of African heritage while embracing contemporary style preferences.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-gold">
                <img
                  src={heroImage}
                  alt="African artisan crafting jewelry"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-primary rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Pinky Cuties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-8">
              Our Mission
            </h2>
            <div className="bg-gradient-soft rounded-2xl p-8 md:p-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                "To celebrate and preserve the rich tradition of African bead making while 
                creating beautiful, high-quality jewelry that empowers artisans and brings 
                joy to our customers around the world."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <p className="text-muted-foreground">Partner Artisans</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-muted-foreground">Pieces Crafted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The passionate people behind Pinky Cuties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Grace Wanjiku",
                role: "Founder & Creative Director",
                bio: "A passionate advocate for African culture with over 10 years of experience in jewelry design."
              },
              {
                name: "Samuel Ochieng",
                role: "Artisan Relations Manager",
                bio: "Bridging the gap between traditional craftsmen and modern markets across East Africa."
              },
              {
                name: "Faith Akinyi",
                role: "Quality Assurance Lead",
                bio: "Ensuring every piece meets our exacting standards of craftsmanship and authenticity."
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;