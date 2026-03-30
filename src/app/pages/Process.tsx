import { Truck, Droplet, ScanLine, Scale, Package, CheckCircle } from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Truck,
      title: "Raw Peanut Procurement",
      description:
        "We source premium quality raw peanuts directly from trusted farmers and suppliers. Our procurement team carefully selects only the best raw materials that meet our stringent quality criteria.",
      details: [
        "Direct sourcing from verified farmers",
        "Quality inspection at source",
        "Moisture content verification",
        "Free from contamination",
      ],
    },
    {
      icon: Droplet,
      title: "Cleaning & Drying",
      description:
        "Raw peanuts undergo thorough cleaning to remove dirt, stones, and foreign materials. They are then dried to optimal moisture levels to ensure longevity and prevent fungal growth.",
      details: [
        "Multi-stage cleaning process",
        "Dust and debris removal",
        "Controlled drying environment",
        "Optimal moisture level: 6-8%",
      ],
    },
    {
      icon: ScanLine,
      title: "Color Sorting",
      description:
        "Advanced color sorting machines use high-resolution cameras and optical sensors to detect and remove discolored, damaged, or defective peanuts, ensuring uniform quality and appearance.",
      details: [
        "High-speed optical detection",
        "Removal of discolored peanuts",
        "Foreign particle detection",
        "99.9% sorting accuracy",
      ],
    },
    {
      icon: Scale,
      title: "Gravity Separation",
      description:
        "Precision gravity separators grade peanuts based on size, weight, and density. This ensures consistent sizing for different grades like Bold, Java, and other specifications.",
      details: [
        "Weight-based grading",
        "Size classification",
        "Density separation",
        "Multiple grade options",
      ],
    },
    {
      icon: Package,
      title: "Final Packaging",
      description:
        "Processed peanuts are hygienically packed in food-grade materials to maintain freshness and quality during storage and transportation. We offer customized packaging solutions based on client requirements.",
      details: [
        "Food-grade packaging materials",
        "Moisture-proof sealing",
        "Custom packaging options",
        "Proper labeling and documentation",
      ],
    },
    {
      icon: CheckCircle,
      title: "Quality Control & Dispatch",
      description:
        "Final quality checks ensure every batch meets our high standards before dispatch. We maintain detailed records and provide certificates of quality with every shipment.",
      details: [
        "Comprehensive quality testing",
        "Laboratory analysis",
        "Quality certificates provided",
        "Timely delivery guaranteed",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Processing Excellence</h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            A meticulous step-by-step process ensuring premium quality at every stage
          </p>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              From Farm to Your Facility
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every step is carefully monitored and optimized for maximum quality output
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-amber-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                        {index + 1}
                      </div>
                      <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center">
                        <Icon className="w-7 h-7 text-amber-900" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700 mb-6">{step.description}</p>
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h4 className="font-bold text-amber-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                    <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg aspect-video flex items-center justify-center">
                      <Icon className="w-24 h-24 text-amber-900 opacity-30" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 text-center">
              Quality Assurance at Every Step
            </h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Our comprehensive quality control measures ensure that every batch meets
              international standards
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-amber-900 mb-2">99.9%</div>
                <div className="text-gray-600">Purity Level</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-amber-900 mb-2">100%</div>
                <div className="text-gray-600">Quality Tested</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-amber-900 mb-2">ISO</div>
                <div className="text-gray-600">Certified Process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Technology-Driven Processing
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Our investment in advanced machinery sets us apart from traditional processing
                units. We use state-of-the-art equipment that combines speed with precision.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The color sorting machine can process thousands of kilograms per hour while
                maintaining exceptional accuracy. Our gravity separator ensures perfect grading,
                giving you consistent quality in every batch.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-900 mb-1">5000+ kg/hr</div>
                  <div className="text-sm text-gray-600">Processing Capacity</div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-amber-900 mb-1">&lt;0.1%</div>
                  <div className="text-sm text-gray-600">Defect Rate</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1721937127582-ed331de95a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29ydGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzc0NDMzOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sorting Technology"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
