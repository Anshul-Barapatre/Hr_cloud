import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info + Socials */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl shadow space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-600" />
              <span>123 HR Cloud St, New Delhi, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-600" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-600" />
              <span>contact@hrcloud.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-gray-500 text-xl">
            <a href="#"><Facebook className="hover:text-blue-600" /></a>
            <a href="#"><Twitter className="hover:text-blue-500" /></a>
            <a href="#"><Linkedin className="hover:text-blue-700" /></a>
          </div>

          {/* Optional Map */}
          <div className="mt-6">
            <iframe
              title="Map"
              className="w-full h-56 rounded-lg border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83925096213!2d77.06889985808724!3d28.5272525794705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3bbd3c98d1f%3A0x8bbdcc8c78f99455!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1683801720249!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


