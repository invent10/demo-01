import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-red-500" />
                <span>IISER Campus, Knowledge City, Sector 81, Mohali</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-red-500" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-red-500" />
                <span>info@iiser.ac.in</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Academics</a></li>
              <li><a href="#" className="hover:text-red-500">Research</a></li>
              <li><a href="#" className="hover:text-red-500">Admissions</a></li>
              <li><a href="#" className="hover:text-red-500">Campus Life</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-red-500">Library</a></li>
              <li><a href="#" className="hover:text-red-500">E-Learning</a></li>
              <li><a href="#" className="hover:text-red-500">Publications</a></li>
              <li><a href="#" className="hover:text-red-500">Career Portal</a></li>
              <li><a href="#" className="hover:text-red-500">Student Services</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-500">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-red-500">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} IISER. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-500">Terms of Use</a></li>
                <li><a href="#" className="hover:text-red-500">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;