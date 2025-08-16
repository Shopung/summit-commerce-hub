import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, AlertTriangle, TrendingUp, Package } from "lucide-react";

const Inventory = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">
            📊 Inventory Management
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold">
            Real-Time
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Inventory Sync</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep track of your stock levels across all channels and prevent overselling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">23</div>
              <p className="text-xs text-muted-foreground">
                Requires attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground">
                +5.4% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sync Status</CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">Live</div>
              <p className="text-xs text-muted-foreground">
                All channels synced
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            This page is under construction. Full inventory management features coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Inventory;