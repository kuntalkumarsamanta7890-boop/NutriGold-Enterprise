import { Target, Eye, Award, Users, Zap, Shield } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality and maintain the highest standards",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building long-term relationships through consistent delivery",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Investing in latest technology for superior processing",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your success is our priority, always",
    },
  ];

  const machinery = [
    {
      name: "Color Sorting Machine",
      description: "Advanced optical sensors detect and remove discolored, damaged, or foreign particles",
      features: [
        "High-resolution cameras",
        "99.9% sorting accuracy",
        "Multi-color detection",
        "High-speed processing",
      ],
    },
    {
      name: "Gravity Separator",
      description: "Precision grading based on weight and density for uniform quality",
      features: [
        "Accurate size grading",
        "Density-based separation",
        "Minimal product loss",
        "Consistent results",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About NutriGold </h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            Your trusted partner for premium quality processed peanuts in India
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Established in West Bengal, NutriGold Industries has grown from a small processing
                unit to one of the region's most trusted peanut suppliers. Our journey has been
                driven by an unwavering commitment to quality and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With over a decade of experience in peanut processing, we understand the needs
                of wholesalers, exporters, and food manufacturers. Our state-of-the-art facility
                is equipped with advanced machinery that ensures every peanut meets international
                quality standards.
              </p>
              <p className="text-lg text-gray-700">
                We believe in building lasting relationships with our clients by delivering
                consistent quality, competitive pricing, and reliable service. Our team of
                experienced professionals works tirelessly to ensure that your business receives
                the best quality peanuts, every single time.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1764842344473-02930cc67bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGZhY3RvcnklMjBjbGVhbnxlbnwxfHx8fDE3NzQ0MzM5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our Facility"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To deliver premium quality processed peanuts through advanced technology and
                rigorous quality control, while building trusted partnerships with our clients
                across India and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-amber-900" />
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To become India's most trusted and preferred peanut processing company,
                recognized for exceptional quality, innovation, and customer service excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-amber-900" />
                  </div>
                  <h3 className="font-bold text-xl text-amber-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Machinery */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Advanced Processing Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art machinery ensuring superior quality and consistency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {machinery.map((machine, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">{machine.name}</h3>
                <p className="text-gray-700 mb-6">{machine.description}</p>
                <h4 className="font-bold text-amber-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {machine.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-amber-900 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
              Our Commitment to Quality & Hygiene
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Quality is not just a goal for us—it's our promise. Every batch of peanuts that
              leaves our facility has undergone rigorous quality checks and processing to ensure
              it meets the highest standards.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We maintain strict hygiene protocols throughout our processing facility. From the
              moment raw peanuts enter our unit to the final packaging, cleanliness and food
              safety are our top priorities.
            </p>
            <p className="text-lg text-gray-700">
              Our quality control team monitors every step of the process, ensuring that only
              premium grade peanuts reach our customers. This attention to detail has earned us
              the trust of leading exporters and food manufacturers across India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
