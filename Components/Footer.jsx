import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg pt-5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-primary">FitPartner</h2>
          <p className="text-gray-400 mt-2 text-sm">
            Your AI-powered fitness companion. <br />
            Train smart. Eat right. Stay consistent.
          </p>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a href="#" className="hover:text-primary transition">
            <Instagram size={22} />
          </a>
          <a href="#" className="hover:text-primary transition">
            <Facebook size={22} />
          </a>
          <a href="#" className="hover:text-primary transition">
            <Twitter size={22} />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} FitPartner. All rights reserved.
      </p>
    </footer>
  );
}
