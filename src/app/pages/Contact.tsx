import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { InquiryForm } from "../components/InquiryForm";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Shyampur, Tarkeswar", "West Bengal", "India"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+91 82500 80395", "+91 88888 88888"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@premiumpeanuts.com", "sales@premiumpeanuts.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            Get in touch with us for bulk orders, inquiries, or any questions about our products
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-amber-900" />
                  </div>
                  <h3 className="font-bold text-lg text-amber-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inquiry Form */}
            <InquiryForm title="Send Your Inquiry" />

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-6">
                Let's Discuss Your Requirements
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Whether you're a wholesaler, exporter, or food manufacturer, we're here to
                provide you with premium quality peanuts that meet your exact specifications.
              </p>

              <div className="bg-gradient-to-br from-amber-50 to-green-50 p-6 rounded-lg mb-6">
                <h3 className="font-bold text-amber-900 mb-4">What We Can Help You With:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-900 font-bold mt-0.5">•</span>
                    <span>Bulk peanut supply for your business</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-900 font-bold mt-0.5">•</span>
                    <span>Custom grading and sizing requirements</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-900 font-bold mt-0.5">•</span>
                    <span>Export quality documentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-900 font-bold mt-0.5">•</span>
                    <span>Customized packaging solutions</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-900 font-bold mt-0.5">•</span>
                    <span>Long-term supply partnerships</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-900 font-bold mt-0.5">•</span>
                    <span>Competitive pricing and quotes</span>
                  </li>
                </ul>
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <a
                  href="tel:+918250080395"
                  className="flex items-center gap-3 bg-amber-900 text-white p-4 rounded-lg hover:bg-amber-800 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="text-sm text-amber-100">Call Us Now</div>
                    <div className="font-bold">+91 82500 80395</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/918250080395?text=Hello!%20I'm%20interested%20in%20your%20peanut%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div>
                    <div className="text-sm text-green-100">WhatsApp Us</div>
                    <div className="font-bold">Chat Directly</div>
                  </div>
                </a>

                <a
                  href="mailto:klkrsa1@gmail.com"
                  className="flex items-center gap-3 bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="text-sm text-blue-100">Email Us</div>
                    <div className="font-bold">klkrsa1@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center">
            Find Us Here
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Embedded Google Map - Replace with actual location coordinates */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.91427004878312!2d87.78773814439774!3d22.77917078546918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f80d78d8f2a0b3%3A0xc2a23366c007c117!2sRanjit%20Samanta!5e0!3m2!1sen!2sin!4v1774871518250!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-amber-900 mb-2">
                  What is the minimum order quantity?
                </h3>
                <p className="text-gray-700">
                  Our minimum order quantity is typically 10 tons. However, we can discuss
                  flexible arrangements based on your specific requirements.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-amber-900 mb-2">
                  Do you provide samples?
                </h3>
                <p className="text-gray-700">
                  Yes, we provide product samples for quality assessment. Please contact us
                  with your requirements and we'll arrange sample delivery.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-amber-900 mb-2">
                  What are your payment terms?
                </h3>
                <p className="text-gray-700">
                  We offer flexible payment terms for established clients. For new clients, we
                  typically work with advance payment or LC terms. Contact us to discuss.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-amber-900 mb-2">
                  How long does delivery take?
                </h3>
                <p className="text-gray-700">
                  Delivery time depends on the order quantity and destination. Typically, we
                  can deliver within 7-15 days for pan-India orders.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg text-amber-900 mb-2">
                  Do you export internationally?
                </h3>
                <p className="text-gray-700">
                  Yes, we export to various countries. We provide all necessary export
                  documentation and ensure products meet international quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
