import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "918250080395"; // Replace with actual number
  const message = "Hello! I'm interested in your peanut products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}