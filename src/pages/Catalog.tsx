import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package, Plus, Upload, Download } from "lucide-react";

const Catalog = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mb-4">
            📦 Product Catalog
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold">
            Manage Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Product Catalog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Centralize all your products in one place and sync across all marketplaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <Card className="group cursor-pointer hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Add Product</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Create a new product listing
              </p>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Upload className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Bulk Import</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Import products from CSV
              </p>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Package className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Templates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Use pre-built listing templates
              </p>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all">
            <CardHeader className="text-center">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Download className="h-6 w-6 text-white" />
              </div>
              <CardTitle>Export</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground text-center">
                Export your product data
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            This page is under construction. Full catalog management features coming soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;