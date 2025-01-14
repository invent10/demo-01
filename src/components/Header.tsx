import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    {
      title: t('header.about'),
      href: '#about',
      submenu: [
        { title: 'Overview', href: '#overview' },
        { title: 'Mission & Vision', href: '#mission' },
        { title: 'Leadership', href: '#leadership' },
        { title: 'History', href: '#history' },
        { title: 'Campus', href: '#campus' },
      ]
    },
    {
      title: t('header.academics'),
      href: '#academics',
      submenu: [
        { title: 'Departments', href: '#departments' },
        { title: 'Programs', href: '#programs' },
        { title: 'Academic Calendar', href: '#calendar' },
        { title: 'Library', href: '#library' },
        { title: 'Research Centers', href: '#centers' },
      ]
    },
    {
      title: t('header.research'),
      href: '#research',
      submenu: [
        { title: 'Research Areas', href: '#areas' },
        { title: 'Publications', href: '#publications' },
        { title: 'Facilities', href: '#facilities' },
        { title: 'Collaborations', href: '#collaborations' },
        { title: 'Patents', href: '#patents' },
      ]
    },
    {
      title: t('header.admissions'),
      href: '#admissions',
      submenu: [
        { title: 'BS-MS Program', href: '#bsms' },
        { title: 'PhD Program', href: '#phd' },
        { title: 'International', href: '#international' },
        { title: 'Financial Aid', href: '#aid' },
        { title: 'Apply Now', href: '#apply' },
      ]
    },
    {
      title: t('header.campusLife'),
      href: '#campus-life',
      submenu: [
        { title: 'Housing', href: '#housing' },
        { title: 'Student Activities', href: '#activities' },
        { title: 'Sports & Recreation', href: '#sports' },
        { title: 'Health Services', href: '#health' },
        { title: 'Campus Safety', href: '#safety' },
      ]
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="https://www.iiserbpr.ac.in/assets/images/logo.png" 
                alt="IISER Logo" 
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="inline-flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {activeDropdown === item.title && (
                  <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md py-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.title}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-gray-700"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Utilities */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
                  >
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === item.title && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;