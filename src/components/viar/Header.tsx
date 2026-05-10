import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/data/viarData';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-[#E31E24] to-[#B71C1C] flex items-center justify-center shadow-lg group-hover:scale-105 transition">
              <span className="text-white font-black text-xl md:text-2xl font-heading">V</span>
            </div>
            <div className="hidden sm:block">
              <div className={`font-heading font-extrabold text-sm md:text-base leading-tight ${solid ? 'text-[#1A1A1A]' : 'text-white'}`}>
                Viar MDB
              </div>
              <div className={`text-[10px] md:text-xs leading-tight ${solid ? 'text-gray-500' : 'text-white/80'}`}>
                Dealer Exclusive Viar
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors ${
                    solid ? 'text-gray-700 hover:text-[#E31E24]' : 'text-white/90 hover:text-white'
                  } ${isActive ? '!text-[#E31E24] after:absolute after:left-4 after:right-4 after:-bottom-0.5 after:h-0.5 after:bg-[#E31E24] after:rounded' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY.phoneOffice}`}
              className={`hidden md:flex items-center gap-2 text-sm font-semibold transition ${
                solid ? 'text-[#E31E24]' : 'text-white'
              }`}
            >
              <Phone size={16} />
              <span>{COMPANY.phoneOffice}</span>
            </a>
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-viar text-white px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Hubungi Kami
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-md ${solid ? 'text-[#1A1A1A]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="lg:hidden border-t border-gray-200 py-3 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-md text-sm font-medium ${
                      isActive ? 'bg-[#E31E24]/10 text-[#E31E24]' : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mx-4 mt-2 btn-viar text-white text-center px-5 py-3 rounded-full text-sm font-semibold"
              >
                Hubungi Kami
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
