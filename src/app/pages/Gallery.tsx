import { useState } from "react";
import { X } from "lucide-react";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1721937127582-ed331de95a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29ydGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzc0NDMzOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Machinery",
      title: "Color Sorting Machine",
    },
    {
      url: "https://images.unsplash.com/photo-1524594345772-c953a3ae53e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBwZWFudXRzJTIwcXVhbGl0eXxlbnwxfHx8fDE3NzQ0MzM5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Products",
      title: "Premium Raw Peanuts",
    },
    {
      url: "https://images.unsplash.com/photo-1705845580041-f04ad853617f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3J0ZWQlMjBwZWFudXRzJTIwYm93bHxlbnwxfHx8fDE3NzQ0MzM5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Products",
      title: "Sorted Peanuts",
    },
    {
      url: "https://images.unsplash.com/photo-1764842344473-02930cc67bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcHJvY2Vzc2luZyUyMGZhY3RvcnklMjBjbGVhbnxlbnwxfHx8fDE3NzQ0MzM5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Factory",
      title: "Clean Processing Area",
    },
    {
      url: "https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwcGFja2FnaW5nfGVufDF8fHx8MTc3NDQzMzkyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Packaging",
      title: "Packaging & Storage",
    },
    {
      url: "https://images.unsplash.com/photo-1524594345772-c953a3ae53e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBwZWFudXRzJTIwcXVhbGl0eXxlbnwxfHx8fDE3NzQ0MzM5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Products",
      title: "Quality Peanuts",
    },
    {
      url: "https://images.unsplash.com/photo-1705845580041-f04ad853617f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3J0ZWQlMjBwZWFudXRzJTIwYm93bHxlbnwxfHx8fDE3NzQ0MzM5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Products",
      title: "Graded Peanuts",
    },
    {
      url: "https://images.unsplash.com/photo-1721937127582-ed331de95a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc29ydGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzc0NDMzOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Machinery",
      title: "Gravity Separator",
    },
  ];

  const categories = ["All", "Factory", "Machinery", "Products", "Packaging"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            Take a look at our state-of-the-art facility, advanced machinery, and premium quality products
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-amber-900 text-white"
                    : "bg-amber-50 text-amber-900 hover:bg-amber-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white w-full">
                    <div className="text-xs text-amber-300 mb-1">{image.category}</div>
                    <div className="font-bold text-lg">{image.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
            Want to See Our Facility in Person?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We welcome visits from potential clients. Schedule a facility tour to see our
            advanced machinery and quality processes firsthand.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-800 transition-colors"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}
