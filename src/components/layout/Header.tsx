import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Search, 
  Settings, 
  User, 
  Menu,
  Package,
  BarChart3,
  ShoppingCart,
  Zap,
  DollarSign,
  TrendingUp,
  Users,
  Globe,
  Shield
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Package className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ListingPro
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Multi-Platform</p>
            </div>
          </div>
          <Badge variant="secondary" className="hidden md:inline-flex text-xs">
            Enterprise
          </Badge>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          <Button variant="ghost" size="sm" className="gap-2">
            <Package className="h-4 w-4" />
            Catalog
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Inventory
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Orders
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Zap className="h-4 w-4" />
            AI Tools
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <DollarSign className="h-4 w-4" />
            Pricing
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <TrendingUp className="h-4 w-4" />
            Analytics
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Search className="h-4 w-4" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
            >
              3
            </Badge>
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Settings className="h-4 w-4" />
          </Button>

          {/* User Profile */}
          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Package className="h-4 w-4" />
              Catalog & Listings
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <BarChart3 className="h-4 w-4" />
              Inventory & Stock
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders & Fulfillment
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Zap className="h-4 w-4" />
              AI-Assisted Tools
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <DollarSign className="h-4 w-4" />
              Pricing & Revenue
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics & Reporting
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-4 w-4" />
              Marketing & Growth
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Globe className="h-4 w-4" />
              Integrations
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Shield className="h-4 w-4" />
              Compliance & Security
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;