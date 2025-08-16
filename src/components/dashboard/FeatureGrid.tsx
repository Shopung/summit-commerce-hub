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

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with multi-platform selling",
    icon: UserCheck,
    color: "bg-muted text-muted-foreground",
    gradient: "bg-gradient-subtle",
    features: [
      "Basic product catalog (up to 5 products)",
      "Manual listing creation",
      "Basic inventory tracking",
      "Simple order management",
      "Basic analytics & reports",
      "3 marketplace integrations",
      "Email support",
      "Basic pricing rules"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "Scale your business with advanced automation and AI tools",
    icon: Crown,
    color: "bg-gradient-primary text-white",
    gradient: "bg-gradient-primary",
    features: [
      "Everything in Free, plus:",
      "Unlimited products & listings",
      "Bulk listing operations",
      "Real-time inventory sync across all channels",
      "Smart order routing & fulfillment",
      "AI-powered listing descriptions",
      "Dynamic pricing with competitor tracking",
      "Advanced analytics & forecasting",
      "Unlimited marketplace integrations", 
      "Multi-warehouse support",
      "Branded tracking pages",
      "Priority support"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Complete solution for large-scale operations with dedicated support",
    icon: Rocket,
    color: "bg-gradient-hero text-white", 
    gradient: "bg-gradient-hero",
    features: [
      "Everything in Pro, plus:",
      "Advanced AI tools & image optimization",
      "Multi-account management",
      "Custom marketplace integrations",
      "Advanced compliance & security tools",
      "Retail media ad management",
      "A/B testing for listings",
      "API access & webhooks",
      "Role-based team access",
      "Audit logs & activity tracking",
      "Dedicated customer success manager",
      "Custom training & onboarding"
    ],
    highlight: false
  }
];


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

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => {
            const IconComponent = tier.icon;

            return (
              <Card key={index} className={`group relative overflow-hidden border-2 transition-all hover:shadow-xl ${
                tier.highlight 
                  ? 'border-primary/50 shadow-lg scale-105' 
                  : 'border-primary/10 hover:border-primary/20'
              }`}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-6 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center space-y-6 pb-8">
                  <div className="flex flex-col items-center space-y-4">
                    <div className={`h-16 w-16 rounded-2xl ${tier.gradient} flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{tier.name}</h3>
                      <div className="flex items-baseline justify-center gap-1 mt-2">
                        <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                          {tier.price}
                        </span>
                        <span className="text-muted-foreground">/{tier.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className={`text-sm leading-relaxed ${
                          feature.startsWith('Everything in') ? 'font-medium text-primary' : ''
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={tier.highlight ? "hero" : "outline"} 
                    className="w-full gap-2 group/btn mt-6"
                    size="lg"
                  >
                    {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>

                {/* Hover effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${tier.gradient}`} />
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