import { Settings, BadgeCheck, DollarSign, Package, Clock, Headphones, ShieldCheck, TrendingUp } from "lucide-react";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Settings,
      title: "Advanced Machinery",
      description:
        "Equipped with state-of-the-art color sorting machines and gravity separators that ensure superior quality and consistency. Our technology-driven approach eliminates human error and delivers precision in every batch.",
      benefits: [
        "Latest color sorting technology",
        "High-precision gravity separators",
        "Automated quality control",
        "Minimal product wastage",
      ],
    },
    {
      icon: BadgeCheck,
      title: "Consistent Quality",
      description:
        "We maintain unwavering quality standards across all our products. Every batch undergoes rigorous testing to ensure it meets our stringent quality parameters and your expectations.",
      benefits: [
        "99.9% purity levels",
        "Uniform grading and sizing",
        "ISO certified processes",
        "Comprehensive quality testing",
      ],
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description:
        "Our efficient processing methods and bulk production capabilities allow us to offer highly competitive prices without compromising on quality. We believe in building long-term partnerships through fair pricing.",
      benefits: [
        "Best market rates",
        "Volume-based discounts",
        "Transparent pricing",
        "No hidden costs",
      ],
    },
    {
      icon: Package,
      title: "Bulk Order Capability",
      description:
        "With large-scale processing capacity, we can handle orders of any size. Whether you need 10 tons or 1000 tons, we have the infrastructure to meet your requirements promptly.",
      benefits: [
        "Large production capacity",
        "Scalable operations",
        "Consistent supply",
        "Multiple variety options",
      ],
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "We understand that time is crucial in business. Our efficient logistics network ensures your orders reach you on time, every time. We maintain buffer stocks to handle urgent requirements.",
      benefits: [
        "On-time delivery guarantee",
        "Pan-India distribution",
        "Efficient logistics",
        "Real-time tracking",
      ],
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Our customer support team is always ready to assist you. From order placement to delivery and beyond, we're here to ensure a smooth and hassle-free experience.",
      benefits: [
        "24/7 customer support",
        "Dedicated account managers",
        "Quick query resolution",
        "Post-delivery support",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Quality Certification",
      description:
        "All our products come with proper quality certificates and documentation. We maintain complete traceability from source to delivery, ensuring transparency at every step.",
      benefits: [
        "Quality certificates provided",
        "Complete documentation",
        "Traceability maintained",
        "Export documentation support",
      ],
    },
    {
      icon: TrendingUp,
      title: "Industry Experience",
      description:
        "With over a decade of experience in peanut processing, we understand the nuances of the industry. Our expertise helps us consistently deliver products that exceed expectations.",
      benefits: [
        "10+ years experience",
        "Industry knowledge",
        "Trusted by 500+ clients",
        "Proven track record",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Exports Pvt. Ltd.",
      role: "Purchase Manager",
      message:
        "We've been sourcing peanuts from Premium Peanuts for the last 3 years. Their quality is consistently excellent and delivery is always on time. The color sorting technology really makes a difference!",
    },
    {
      name: "Priya Sharma",
      company: "Snack Foods India",
      role: "Quality Control Head",
      message:
        "The quality and grading of peanuts we receive is outstanding. Their attention to detail and commitment to quality has helped us maintain our product standards. Highly recommended!",
    },
    {
      name: "Mohammed Ali",
      company: "Global Trading Co.",
      role: "Director",
      message:
        "Premium Peanuts has been our trusted partner for bulk peanut supply. Their competitive pricing and reliable service make them stand out. The team is always responsive to our requirements.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            The advantages that make us the preferred choice for peanut wholesalers and exporters
          </p>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Our Competitive Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart in the peanut processing industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-amber-900" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-amber-900 mb-2">{reason.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">{reason.description}</p>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-bold text-amber-900 mb-3 text-sm">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {reason.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-amber-900 font-bold mt-0.5">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center">
              Traditional vs. Our Advanced Processing
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Traditional */}
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <h3 className="text-xl font-bold text-gray-700 mb-6 text-center">
                    Traditional Processing
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Manual sorting with human error</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Inconsistent quality and grading</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Lower processing capacity</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Higher contamination risk</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Time-consuming processes</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Limited quality control</span>
                    </li>
                  </ul>
                </div>

                {/* Our Processing */}
                <div className="p-8 bg-gradient-to-br from-amber-50 to-green-50">
                  <h3 className="text-xl font-bold text-amber-900 mb-6 text-center">
                    Our Advanced Processing
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span>Automated color sorting - 99.9% accuracy</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span>Consistent quality in every batch</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span>5000+ kg/hour processing capacity</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span>Hygiene and quality assured</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span>Fast and efficient operations</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 mt-1 font-bold">✓</span>
                      <span>Multi-stage quality checks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-green-50 p-8 rounded-lg shadow-md"
              >
                <div className="text-amber-900 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.message}</p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="font-bold text-amber-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-amber-700">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-amber-100">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-amber-100">Years in Business</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-amber-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5000+</div>
              <div className="text-amber-100">Tons Processed/Month</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-amber-100">Quality Standard</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have made the switch to Premium Peanuts.
            Contact us today for a competitive quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-amber-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://wa.me/918250080395"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
