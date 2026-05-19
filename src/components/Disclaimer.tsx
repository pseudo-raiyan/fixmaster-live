import React from "react";

export default function Disclaimer() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-xs leading-relaxed text-gray-500 max-w-4xl mx-auto space-y-2">
          <span className="font-semibold text-gray-700 block mb-2">
            Legal Disclaimer & Brand Ownership Notice
          </span>
          FixMaster Mobiles is an independent, third-party mobile repair service provider operating within India. 
          All corporate names, product designations, trademarks, and brand logos displayed throughout this platform 
          remain the exclusive property of their respective legal owners. 
          
          <span className="block mt-1">
            Any utilization of manufacturer names, device models, or brand iconography on this website serves solely for the 
            accurate identification and description of repair service compatibilities. Reference to these proprietary assets 
            does not constitute, represent, or imply any official affiliation with, sponsorship by, or endorsement from the 
            respective device manufacturers.
          </span>
        </p>
      </div>
    </section>
  );
}