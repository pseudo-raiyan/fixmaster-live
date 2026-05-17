"use client";

import { FaWhatsapp } from "react-icons/fa6";

const WhatsappButton = () => {
  const whatsappNumber = "918686509563"; 
  const defaultMessage = encodeURIComponent(
    "Hi FixMaster, I would like to book a mobile repair service."
  );
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact FixMaster on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 active:scale-95 sm:h-16 sm:w-16 animate-bounce [animation-duration:3s]"
        style={{
          animationName: "whatsapp-float",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite"
        }}
      >
        {/* RADIATION RING 1 (Inner pulse) */}
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/60 [animation-duration:2s]" />

        {/* RADIATION RING 2 (Outer custom expanding wave) */}
        <span 
          className="absolute inset-0 rounded-full bg-[#25D366]/40 opacity-0"
          style={{
            animation: "whatsapp-radiate 2s infinite linear"
          }}
        />

        {/* OFFICIAL BRAND WHATSAPP ICON */}
        <FaWhatsapp className="relative z-10 h-7 w-7 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8" />
      </a>

      {/* INLINE STYLES FOR THE FLOATING & RADIATION CUSTOM ANIMATIONS */}
      <style jsx global>{`
        @keyframes whatsapp-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes whatsapp-radiate {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsappButton;