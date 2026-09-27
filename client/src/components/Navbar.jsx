import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'About',    href: '#about' },
    { label: 'Reviews',  href: '#reviews' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-lg shadow-xs'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent
                          flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-cyan-200">
            S
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-ink">New Life Dental</div>
            <div className="text-[10px] uppercase tracking-widest text-primary/70">Clinic</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="bg-ink text-white text-sm px-6 py-3 rounded-full hover:bg-primary transition-colors duration-300"
          >
            Book Appointment
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink text-2xl"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-gray-600 py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="block bg-ink text-white text-center px-6 py-3 rounded-full"
          >
            Book Appointment
          </a>
        </div>
      )}
    </nav>
  );
}