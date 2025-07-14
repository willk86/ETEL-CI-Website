import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Références', path: '/references' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                {/* Clickable logo */}
                <a href="/">
                  <img
                    src="logos/LOGO ETEL-CI.png"
                    alt="ETEL-CI Logo"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium"
                    whileHover={{ x: 10 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="pt-20">{children}</div>

      <motion.footer
        className="bg-gray-900 text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="flex items-center mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              {/* Clickable logo in footer */}
              <a href="/">
                <img
                  src="logos/icone-etel-ci1.png"
                  alt="ETEL-CI Logo"
                  className="h-12 w-auto"
                />
              </a>
              <span className="ml-3 text-xl font-bold">ETEL-CI</span>
            </motion.div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} ETEL-CI. Tous droits réservés.
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}