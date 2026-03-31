import { Package, Droplet, Ruler, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { InquiryForm } from "../components/InquiryForm";

export function Products() {
  const products = [
    {
      name: "Raw Peanuts",
      image: "https://images.unsplash.com/photo-1524594345772-c953a3ae53e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBwZWFudXRzJTIwcXVhbGl0eXxlbnwxfHx8fDE3NzQ0MzM5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium quality raw peanuts sourced from trusted farmers",
      specs: [
        { label: "Moisture", value: "6-8%" },
        { label: "Purity", value: "99%" },
        { label: "Foreign Matter", value: "<0.5%" },
        { label: "Grade", value: "A Grade" },
      ],
    },
    {
      name: "Color Sorted Peanuts",
      image: "https://images.unsplash.com/photo-1705845580041-f04ad853617f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3J0ZWQlMjBwZWFudXRzJTIwYm93bHxlbnwxfHx8fDE3NzQ0MzM5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Perfectly sorted peanuts with advanced color sorting technology",
      specs: [
        { label: "Moisture", value: "6-7%" },
        { label: "Purity", value: "99.9%" },
        { label: "Discolored", value: "<0.1%" },
        { label: "Quality", value: "Export Grade" },
      ],
    },
    {
      name: "Bold Peanuts (Graded)",
      image: "https://images.unsplash.com/photo-1524594345772-c953a3ae53e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFudXRzJTIwcm9hc3RlZCUyMHF1YWxpdHl8ZW58MXx8fHwxNzc0NDMzOTI0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Large-sized premium bold peanuts, uniformly graded",
      specs: [
        { label: "Count", value: "38/42, 40/50" },
        { label: "Moisture", value: "6-8%" },
        { label: "Size", value: "9-11mm" },
        { label: "Application", value: "Roasting, Snacks" },
      ],
    },
    {
      name: "Java Peanuts (Graded)",
      image: "https://images.unsplash.com/photo-1705845580041-f04ad853617f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3J0ZWQlMjBwZWFudXRzJTIwYm93bHxlbnwxfHx8fDE3NzQ0MzM5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Medium-sized Java variety peanuts, perfectly sorted",
      specs: [
        { label: "Count", value: "45/55, 50/60" },
        { label: "Moisture", value: "6-8%" },
        { label: "Size", value: "7-9mm" },
        { label: "Application", value: "Oil, Butter, Snacks" },
      ],
    },
    {
      name: "TJ Peanuts (Graded)",
      image: "https://images.unsplash.com/photo-1524594345772-c953a3ae53e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBwZWFudXRzJTIwcXVhbGl0eXxlbnwxfHx8fDE3NzQ0MzM5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Premium TJ variety for export and processing",
      specs: [
        { label: "Count", value: "55/65, 60/70" },
        { label: "Moisture", value: "6-8%" },
        { label: "Oil Content", value: "48-50%" },
        { label: "Application", value: "Export, Processing" },
      ],
    },
    {
      name: "Custom Bulk Orders",
      image: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwcGFja2FnaW5nfGVufDF8fHx8MTc3NDQzMzkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Customized specifications and packaging for your business needs",
      specs: [
        { label: "Min Order", value: "10 Tons" },
        { label: "Packaging", value: "Custom" },
        { label: "Delivery", value: "Pan India" },
        { label: "Support", value: "24/7" },
      ],
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Export Quality",
      description: "Meeting international quality standards",
    },
    {
      icon: Droplet,
      title: "Optimal Moisture",
      description: "Controlled moisture levels for longevity",
    },
    {
      icon: Ruler,
      title: "Uniform Grading",
      description: "Precision grading for consistency",
    },
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Tailored packaging solutions available",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Products</h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            High-quality peanuts available in various grades and specifications for your business needs
          </p>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-amber-900" />
                  </div>
                  <h3 className="font-bold text-lg text-amber-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Product Range
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of premium quality peanuts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="bg-amber-50 rounded-lg p-4 mb-4">
                    <h4 className="font-bold text-amber-900 mb-3 text-sm">Specifications:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {product.specs.map((spec, idx) => (
                        <div key={idx}>
                          <div className="text-xs text-gray-600">{spec.label}</div>
                          <div className="font-medium text-sm text-amber-900">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full bg-amber-900 text-white py-2 rounded-lg font-medium hover:bg-amber-800 transition-colors text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center">
              Quality Specifications
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-xl text-amber-900 mb-4">Standard Parameters</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-900 font-bold">•</span>
                      <span>Moisture content: 6-8% (controllable as per requirement)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-900 font-bold">•</span>
                      <span>Oil content: 48-50% (variety dependent)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-900 font-bold">•</span>
                      <span>Foreign matter: Less than 0.5%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-900 font-bold">•</span>
                      <span>Damaged/discolored kernels: Less than 1%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-amber-900 mb-4">Packaging Options</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-900 font-bold">•</span>
                      <span>25 kg / 50 kg PP bags</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-900 font-bold">•</span>
                      <span>Vacuum-sealed bags available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-900 font-bold">•</span>
                      <span>Custom packaging as per requirement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-900 font-bold">•</span>
                      <span>Export-ready containers and pallets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Need Custom Specifications?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We understand that different businesses have different requirements. Our team can
                work with you to provide customized grades, sizes, and packaging solutions that
                perfectly match your needs.
              </p>
              <div className="bg-amber-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-amber-900 mb-3">We Can Customize:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Moisture content levels</li>
                  <li>✓ Size and count specifications</li>
                  <li>✓ Packaging type and size</li>
                  <li>✓ Delivery schedules</li>
                  <li>✓ Quality parameters</li>
                </ul>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
              >
                Discuss Your Requirements
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <InquiryForm title="Get Product Quote" />
          </div>
        </div>
      </section>
    </div>
  );
}
