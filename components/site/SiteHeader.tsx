"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

interface SubLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: SubLink[];
  external?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Involved", href: "https://docs.google.com/forms/d/e/1FAIpQLSfV39BVLOhuJ2iFS3WWAcaZPGFVyWatiUU6HQ-Gp0CGMejv5g/viewform", external: true },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Donate", href: "/donate" },
];

const MainBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header
      ref={navRef}
      className="w-full bg-[#012358] backdrop-blur-md text-slate-800 sticky top-0 z-50 shadow-lg border-b border-[#005DCD]/30"
    >
      <div className="max-w-7xl mx-auto w-full h-20 flex items-center justify-between px-4 md:px-8 lg:px-12">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo/logo.PNG"
            alt="Logo"
            width={256}
            height={256}
            className="h-12 w-auto object-contain rounded-full transition-transform duration-200 group-hover:scale-105"
            priority
          />
        </Link>
      </div>

      {/* Desktop nav (lg and up) */}
      <div className="hidden lg:flex gap-4 xl:gap-6 items-center">
        <nav className="flex items-center flex-wrap gap-1.5 xl:gap-2 text-sm font-medium">
          {navLinks.map((link) => {
            const isDropdownOpen = openDropdown === link.label;
            const isActive = pathname === link.href;

            return (
              <div
                key={link.label}
                className="relative py-2"
                onMouseEnter={() =>
                  link.dropdown && handleMouseEnter(link.label)
                }
                onMouseLeave={() => link.dropdown && handleMouseLeave()}
              >
                <div
                  className={`group flex items-center rounded-lg border transition-all duration-200 shadow-2xs hover:shadow-xs ${
                    isActive
                      ? "border-[#FD6100] bg-orange-50/90 text-[#FD6100] font-semibold"
                      : "border-[#E2E8F0] bg-white/90 hover:bg-blue-50/40 hover:border-[#005DCD] text-[#012358] hover:text-[#005DCD]"
                  }`}
                >
                  <Link
                    href={link.href}
                    className="px-3 xl:px-3.5 py-1.5 text-xs xl:text-sm font-medium inline-flex items-center gap-1.5 rounded-lg whitespace-nowrap transition-colors"
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span>{link.label}</span>
                  </Link>

                  {link.dropdown && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDropdown(isDropdownOpen ? null : link.label);
                      }}
                      className="pr-2.5 pl-0.5 py-1.5 focus:outline-none text-[#64748B] group-hover:text-[#005DCD] transition-colors"
                      aria-label={`Toggle ${link.label} dropdown menu`}
                      aria-expanded={isDropdownOpen}
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Dropdown menu card if present */}
                {link.dropdown && isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 bg-white text-[#012358] rounded-xl shadow-xl border border-[#E2E8F0] p-2 min-w-48 flex flex-col gap-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="text-xs xl:text-sm font-medium text-[#012358] hover:text-[#005DCD] hover:bg-blue-50/60 rounded-lg px-3 py-2 border border-transparent hover:border-[#005DCD]/30 transition-all block whitespace-nowrap"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Hamburger toggle (below lg) */}
      <button
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="flex lg:hidden items-center justify-center p-2 rounded-xl border border-[#E2E8F0] bg-white/80 hover:bg-blue-50 text-white hover:text-[#005DCD] focus:outline-none transition-all shadow-2xs"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile / tablet dropdown (below lg) */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F8F9FB] backdrop-blur-md flex flex-col gap-3 px-6 py-6 lg:hidden border-t border-[#E2E8F0] shadow-xl max-h-[85vh] overflow-y-auto z-50">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isSubOpen = mobileSubmenu === link.label;
              const isActive = pathname === link.href;

              return (
                <div key={link.label} className="flex flex-col gap-1.5">
                  <div
                    className={`flex items-center justify-between rounded-xl border transition-all duration-200 shadow-2xs ${
                      isActive
                        ? "border-[#FD6100] bg-orange-50 text-[#FD6100] font-semibold"
                        : "border-[#E2E8F0] bg-white hover:bg-blue-50/50 hover:border-[#005DCD] text-[#012358] font-medium"
                    }`}
                  >
                    <Link
                      href={link.href}
                      className="w-full px-4 py-3 text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.label}
                    </Link>

                    {link.dropdown && (
                      <button
                        type="button"
                        onClick={() =>
                          setMobileSubmenu(isSubOpen ? null : link.label)
                        }
                        className="p-3 text-[#64748B] hover:text-[#012358]"
                        aria-label={`Toggle ${link.label} submenu`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isSubOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu for mobile */}
                  {link.dropdown && isSubOpen && (
                    <div className="flex flex-col gap-1.5 pl-4 pr-1 py-1">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="text-xs sm:text-sm font-normal text-[#012358] hover:text-[#005DCD] bg-white border border-[#E2E8F0] rounded-lg px-3.5 py-2 hover:border-[#005DCD]/40 hover:bg-blue-50/40 transition-all"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
      </div>
    </header>
  );
};

export default MainBar;
