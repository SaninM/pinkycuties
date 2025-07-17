import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "hello@pinkycuties.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+254 712 345 678",
      description: "Mon-Fri 9AM-6PM EAT"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "Nairobi, Kenya",
      description: "By appointment only"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We'll get back to you quickly"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactInfo.map((info, index) => (
          <Card key={index} className="text-center hover:shadow-soft transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                {info.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
              <p className="text-lg font-medium text-primary mb-1">{info.details}</p>
              <p className="text-sm text-muted-foreground">{info.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Your last name" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="What is this about?" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Tell us how we can help you..."
                className="min-h-[120px]"
              />
            </div>
            
            <Button className="w-full bg-gradient-primary hover:opacity-90">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                question: "Do you offer custom jewelry designs?",
                answer: "Yes! We love creating custom pieces. Contact us with your ideas and we'll work with our artisans to bring your vision to life."
              },
              {
                question: "How long does shipping take?",
                answer: "Within Kenya: 2-3 business days. International shipping: 7-14 business days depending on location."
              },
              {
                question: "What if I'm not satisfied with my purchase?",
                answer: "We offer a 30-day return policy for unworn items in original packaging. Customer satisfaction is our priority."
              },
              {
                question: "Are your beads authentic African beads?",
                answer: "Absolutely! We source all our beads directly from artisans across East Africa, ensuring authenticity and quality."
              },
              {
                question: "Do you offer wholesale pricing?",
                answer: "Yes, we have wholesale options for retailers and bulk orders. Contact us for more information about our wholesale program."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-center">Business Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Customer Service</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Order Processing</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 5:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Weekends</span>
                  <span className="font-medium">Orders processed on Monday</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;