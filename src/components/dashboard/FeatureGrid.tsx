import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  BarChart3, 
  ShoppingCart, 
  Zap, 
  DollarSign, 
  TrendingUp,
  Users,
  Globe,
  Shield,
  Smartphone,
  Brain,
  UserCheck,
  ArrowRight,
  Lock,
  Crown,
  Rocket
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Catalog & Listings",
    description: "Unified product catalog with bulk operations, AI-assisted mapping, and marketplace-specific overrides.",
    tier: "free",
    features: ["Basic catalog", "Manual listings", "5 products"],
    premium: ["Bulk operations", "AI mapping", "Unlimited products", "Templates", "Policy checker"]
  },
  {
    icon: BarChart3,
    title: "Inventory & Stock",
    description: "Real-time inventory sync across all channels with multi-warehouse support and smart thresholds.",
    tier: "pro",
    features: ["Real-time sync", "Multi-warehouse", "Safety stock", "Oversell prevention"],
    premium: ["Advanced routing", "Aging reports", "Predictive restocking"]
  },
  {
    icon: ShoppingCart,
    title: "Orders & Fulfillment",
    description: "Centralized order management with smart routing, batch processing, and branded tracking.",
    tier: "pro",
    features: ["Order dashboard", "Basic routing", "Shipping labels"],
    premium: ["Smart routing", "Rate shopping", "Branded tracking", "Returns automation"]
  },
  {
    icon: Zap,
    title: "AI-Assisted Tools",
    description: "AI-powered listing generation, image optimization, translation, and intelligent alerts.",
    tier: "enterprise",
    features: ["Basic AI descriptions"],
    premium: ["Advanced AI", "Image cleanup", "Auto-translate", "Smart alerts", "Attribute autofill"]
  },
  {
    icon: DollarSign,
    title: "Pricing & Revenue",
    description: "Dynamic pricing rules, competitor matching, promotion scheduling, and margin optimization.",
    tier: "pro",
    features: ["Basic pricing rules", "Manual adjustments"],
    premium: ["Dynamic pricing", "Competitor tracking", "Promotion calendar", "Margin calculator"]
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description: "Comprehensive performance metrics, forecasting, and data export capabilities.",
    tier: "free",
    features: ["Basic reports", "Revenue tracking"],
    premium: ["Advanced analytics", "Forecasting", "Cohort analysis", "Export to BI", "Custom dashboards"]
  },
  {
    icon: Users,
    title: "Marketing & Growth",
    description: "Retail media management, A/B testing, and social commerce integration.",
    tier: "enterprise",
    features: ["Basic promotions"],
    premium: ["Ad management", "A/B testing", "Social commerce", "Advanced campaigns"]
  },
  {
    icon: Globe,
    title: "Integrations",
    description: "Connect with 50+ marketplaces, e-commerce platforms, and business tools.",
    tier: "free",
    features: ["3 integrations", "Basic sync"],
    premium: ["Unlimited integrations", "Real-time webhooks", "Custom APIs", "Advanced workflows"]
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Policy scanning, automated compliance, and enterprise-grade security features.",
    tier: "enterprise",
    features: ["Basic policy scan"],
    premium: ["Advanced compliance", "Audit logs", "Role-based access", "GDPR tools", "SOC 2 compliance"]
  }
];

const getTierInfo = (tier: string) => {
  switch (tier) {
    case "free":
      return { 
        label: "Free", 
        color: "bg-muted text-muted-foreground",
        icon: UserCheck 
      };
    case "pro":
      return { 
        label: "Pro", 
        color: "bg-gradient-primary text-white",
        icon: Crown 
      };
    case "enterprise":
      return { 
        label: "Enterprise", 
        color: "bg-gradient-hero text-white",
        icon: Rocket 
      };
    default:
      return { 
        label: "Free", 
        color: "bg-muted text-muted-foreground",
        icon: UserCheck 
      };
  }
};

const FeatureGrid = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">
            🎯 Complete Feature Set
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold">
            Everything You Need to
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From basic catalog management to enterprise AI tools, choose the tier that fits your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const tierInfo = getTierInfo(feature.tier);
            const IconComponent = feature.icon;
            const TierIcon = tierInfo.icon;

            return (
              <Card key={index} className="group relative overflow-hidden bg-gradient-card border-primary/10 hover:border-primary/20 transition-all hover:shadow-lg">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge className={`gap-1 ${tierInfo.color}`}>
                      <TierIcon className="h-3 w-3" />
                      {tierInfo.label}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Free tier features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <UserCheck className="h-4 w-4" />
                      Included Features
                    </h4>
                    <ul className="space-y-1">
                      {feature.features.map((item, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <div className="h-1 w-1 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Premium features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-primary flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      Premium Features
                    </h4>
                    <ul className="space-y-1">
                      {feature.premium.map((item, i) => (
                        <li key={i} className="text-sm flex items-center gap-2 text-muted-foreground">
                          <Lock className="h-3 w-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="ghost" className="w-full justify-between group/btn mt-4">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Ready to Transform Your
              <span className="bg-gradient-primary bg-clip-text text-transparent"> E-commerce Operations?</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of sellers who have streamlined their multi-platform operations with ListingPro.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="gap-2 group">
              Start Free Trial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl">
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;