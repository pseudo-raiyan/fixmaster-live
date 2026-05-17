"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

/* =========================
   NAVIGATION ROUTES
========================= */
const navItems = [
  { name: "Home", href: "/" }, 
  { name: "Brands", href: "/brands" }, 
  { name: "Services", href: "/services" }, 
  { name: "Contact", href: "/contact" }, 
];

/* =========================
   CTA REDIRECTS
========================= */
// Updated to redirect book buttons directly to /contact
const BOOK_REPAIR_LINK = "/contact"; 
const WHATSAPP_LINK = "https://wa.me/918686509563"; 

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll, { passive: true });

    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const navLinks = (mobile = false) =>
    navItems.map(({ name, href }) => (
      <Link
        key={name}
        href={href}
        onClick={() => setOpen(false)}
        className={`group flex items-center justify-between font-medium text-gray-800 transition hover:text-purple-600 ${
          mobile
            ? "border-b border-gray-100 py-5 text-[17px]"
            : "relative text-[15px]"
        }`}
      >
        {name}

        {mobile ? (
          <ChevronRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-1 group-hover:text-purple-600" />
        ) : (
          <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full" />
        )}
      </Link>
    ));

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            : ""
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
          
          {/* LOGO REDIRECT */}
          <Link href="/" aria-label="Homepage" className="shrink-0">
            <Image
              src="/logo.png"
              alt="FixMaster"
              width={220}
              height={80}
              priority
              className="h-auto w-[145px] sm:w-[170px] md:w-[190px] lg:w-[220px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navLinks()}
          </nav>

          {/* BOOK REPAIR BUTTON */}
          <div className="hidden lg:block">
            <Link
              href={BOOK_REPAIR_LINK}
              className="rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Book Repair
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Mobile Sidebar */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
            
            {/* Logo Redirect */}
            <Link href="/" onClick={() => setOpen(false)}>
              <Image
                src="/logo.png"
                alt="FixMaster"
                width={150}
                height={50}
                className="h-auto w-[130px]"
              />
            </Link>

            <button
              aria-label="Close Menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            {navLinks(true)}

            {/* Info Card */}
            <div className="mt-8 rounded-2xl bg-purple-50 p-5">
              <p className="text-sm font-semibold text-gray-900">
                Fast & reliable mobile repairs.
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Screen, battery, charging port & more.
              </p>
            </div>
          </nav>

          {/* MOBILE CTA BUTTON */}
          <div className="border-t border-gray-100 p-5">
            <Link
              href={BOOK_REPAIR_LINK}
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
            >
              Book Your Repair
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}