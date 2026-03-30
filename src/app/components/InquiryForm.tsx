import { useState } from "react";
import { Send } from "lucide-react";

interface InquiryFormProps {
  title?: string;
  className?: string;
}

export function InquiryForm({ title = "Send Inquiry", className = "" }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    quantity: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `
*New Inquiry*
Name: ${formData.name}
Phone: ${formData.phone}
Quantity Required: ${formData.quantity}
Message: ${formData.message}
    `.trim();
    
    const phoneNumber = "918250080395"; // Replace with actual number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: "", phone: "", quantity: "", message: "" });
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-2xl font-bold text-amber-900 mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="+91 99999 99999"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
            Quantity Required
          </label>
          <input
            type="text"
            id="quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="e.g., 100 tons, 50 quintals"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            placeholder="Tell us about your requirements..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-amber-900 text-white py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Inquiry via WhatsApp
        </button>
      </form>
    </div>
  );
}
