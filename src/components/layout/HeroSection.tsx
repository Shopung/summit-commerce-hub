import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Package, 
  BarChart3, 
  Zap, 
  TrendingUp,
  Star,
  Users,
  ShoppingCart,
  Globe,
  Shield,
  CheckCircle
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-primary opacity-[0.02]" />
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                🚀 Multi-Platform Excellence
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Premium
                </span>{" "}
                Multi-Platform
                <br />
                Listing Management
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Streamline your e-commerce operations across Amazon, eBay, Walmart, Etsy, and more. 
                AI-powered tools, real-time inventory sync, and enterprise-grade analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="gap-2 group">
                Start Free Trial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" className="gap-2">
                Watch Demo
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="h-8 w-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-white text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">2,500+ sellers</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
                <span className="text-sm text-muted-foreground ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-card border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Unified Catalog</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage all products from one central dashboard
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Real-time Sync</h3>
                  <p className="text-sm text-muted-foreground">
                    Inventory updates across all platforms instantly
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">AI-Powered</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart descriptions, pricing, and optimization
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Deep insights and performance tracking
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-gradient-primary opacity-10 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-gradient-primary opacity-5 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Platform logos */}
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Seamlessly integrate with leading e-commerce platforms
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Amazon', 'eBay', 'Walmart', 'Etsy', 'Shopify', 'WooCommerce'].map((platform) => (
              <div key={platform} className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;