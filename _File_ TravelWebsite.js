// File: TravelWebsite.jsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function TravelWebsite() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?travel)' }}>
        <div className="text-center bg-black/50 p-8 rounded-xl">
          <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
          <p className="text-xl mb-6">Discover amazing places with us</p>
          <Button className="text-lg px-6 py-2">Get Started</Button>
        </div>
      </section>

      {/* Destinations */}
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Paris", "Tokyo", "Bali"].map((place, i) => (
            <Card key={i} className="hover:scale-105 transition-transform">
              <CardContent className="p-0">
                <img src={`https://source.unsplash.com/400x300/?${place}`} alt={place} className="rounded-t-xl" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{place}</h3>
                  <p className="text-gray-600">Explore the beauty of {place} with guided tours, culture, and cuisine.</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="bg-gray-100 p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Travel Tips</h2>
        <ul className="max-w-3xl mx-auto text-lg list-disc list-inside text-gray-700">
          <li>Always carry a power bank and universal adapter.</li>
          <li>Learn basic phrases of the local language.</li>
          <li>Keep digital and physical copies of your documents.</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <div className="max-w-xl mx-auto space-y-4">
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button className="w-full">Send Message</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        &copy; 2025 ExploreWorld. All rights reserved.
      </footer>
    </div>
  )
}
