import Image from "next/image";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3A225D] text-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* TOP LAYOUT GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* BRAND COL WITH LARGE COMPACT LOGO BOX */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center bg-white border border-purple-200/20 rounded-xl py-1.5 px-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] max-w-full transition-transform duration-300 hover:scale-[1.02]">
                <Image 
                  src="/logo.png" 
                  alt="FixMaster Mobiles Logo" 
                  width={260} 
                  height={65} 
                  priority
                  className="h-14 w-auto object-contain max-w-full sm:h-16" 
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-purple-100/70 max-w-xs mt-3">
              Hyderabad's most trusted doorstep mobile repair service. Fast, affordable & warrantied.
            </p>
          </div>

          {/* QUICK LINKS COL */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-purple-200">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-purple-100/70">
              {["Book Repair", "Services", "Brands", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT COL */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-purple-200">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-purple-100/70">
              <li className="flex items-center gap-3">
                <FiPhone className="h-4 w-4 text-purple-300 shrink-0" />
                <a href="tel:+918686509563" className="hover:text-white transition-colors duration-200">
                  8686509563
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="h-4 w-4 text-purple-300 shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana</span>
              </li>
            </ul>
          </div>

          {/* FOLLOW/SOCIALS COL */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-purple-200">
              Follow
            </h3>
            <div className="flex items-center gap-3">
              {[
                { 
                  icon: FaFacebookF, 
                  href: "https://www.facebook.com/profile.php?id=61590140452178", 
                  label: "Facebook" 
                },
                { 
                  icon: FaInstagram, 
                  href: "https://www.instagram.com/fixmastermobiles/", 
                  label: "Instagram" 
                },
                { 
                  icon: FaYoutube, 
                  href: "https://www.youtube.com/channel/UCXPQ5ezC14E-6mwIZ0Xn04Q", 
                  label: "YouTube" 
                }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-purple-100/80 border border-white/5 transition-all duration-300 hover:bg-white/15 hover:text-white hover:scale-105"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT SECTION */}
        <div className="pt-8 text-center">
          <p className="text-xs tracking-wide text-purple-100/40">
            &copy; {currentYear} FixMaster Mobiles. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;