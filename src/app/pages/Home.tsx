import { Link } from "react-router";
import {
  CheckCircle,
  Award,
  TrendingUp,
  Package,
  ArrowRight,
} from "lucide-react";
import { InquiryForm } from "../components/InquiryForm";

export function Home() {
  const highlights = [
    {
      icon: Award,
      title: "Advanced Color Sorting Technology",
      description:
        "State-of-the-art color sorting machines ensure only premium quality peanuts",
    },
    {
      icon: Package,
      title: "Precision Gravity Separation",
      description:
        "Advanced gravity separators for perfect size and weight grading",
    },
    {
      icon: CheckCircle,
      title: "High Purity & Export Quality",
      description:
        "Meeting international standards with consistent quality control",
    },
    {
      icon: TrendingUp,
      title: "Bulk Supply Capability",
      description:
        "Large-scale production capacity to meet your business demands",
    },
  ];

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "50+", label: "Happy Clients" },
    { value: "99.9%", label: "Purity Level" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-900 to-amber-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/9/346390117/OJ/EO/HE/125428876/peanut-process-machine-1000x1000.jpg"
            alt="Peanut Processing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Quality Processed Peanuts with Advanced
              Sorting Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100">
              Delivering exceptional quality, purity, and
              reliability through state-of-the-art processing
              technology. Your trusted partner for bulk peanut
              supply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-colors text-center"
              >
                Get Quote
              </Link>
              <Link
                to="/products"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-amber-900 transition-colors text-center"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Why Choose Our Peanuts?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced technology and rigorous quality control
              ensure premium products every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-amber-900" />
                  </div>
                  <h3 className="font-bold text-lg text-amber-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1524594345772-c953a3ae53e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBwZWFudXRzJTIwcXVhbGl0eXxlbnwxfHx8fDE3NzQ0MzM5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality Peanuts"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Premium Peanut Processing Unit in West Bengal
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We are a leading peanut processing unit based in
                West Bengal, equipped with cutting-edge
                machinery including advanced color sorting
                machines and gravity separators.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our commitment to quality, hygiene, and customer
                satisfaction has made us the preferred choice
                for wholesalers, exporters, and food
                manufacturers across India.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>ISO certified processing facility</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Advanced quality control systems</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Experienced team of professionals</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>Timely delivery guaranteed</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Our Processing Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From procurement to packaging, every step is
              optimized for quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-xl text-amber-900 mb-2">
                Quality Procurement
              </h3>
              <p className="text-gray-600">
                We source only the finest raw peanuts from
                trusted farmers
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-xl text-amber-900 mb-2">
                Advanced Sorting
              </h3>
              <p className="text-gray-600">
                Color sorting and gravity separation for perfect
                grading
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-xl text-amber-900 mb-2">
                Quality Packaging
              </h3>
              <p className="text-gray-600">
                Hygienically packed to maintain freshness and
                quality
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 bg-amber-900 text-white px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
            >
              View Complete Process
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Inquiry Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                Ready to Experience Premium Quality?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Join hundreds of satisfied clients who trust us
                for their bulk peanut requirements. Get in touch
                today for competitive quotes and reliable
                supply.
              </p>
              <img
                src="https://images.unsplash.com/photo-1721937127582-ed331de95a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29ydGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzc0NDMzOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Processing Machine"
                className="rounded-lg shadow-lg w-full mt-6"
              />
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}