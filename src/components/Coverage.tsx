"use client";

const Coverage = () => {
  // Safe Google Maps Embed Link focused specifically on Hyderabad, Telangana
  const mapEmbedUrl = 
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.34203387814!2d78.24323133887265!3d17.412260971032895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b780e90778c1!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1715848900000!5m2!1sen!2sin";

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-purple-600 sm:text-sm">
            Coverage
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 min-[400px]:text-4xl lg:text-5xl">
            Serving all of Hyderabad
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500 sm:text-base">
            Doorstep mobile repair across the city. Don&apos;t see your area?{" "}
            <a 
              href="tel:+918686509563" 
              className="text-purple-600 font-medium hover:underline transition-all"
            >
              Call us
            </a>{" "}
            — we probably cover it.
          </p>
        </div>

        {/* GOOGLE MAPS EMBED CONTAINER */}
        <div className="w-full overflow-hidden rounded-[24px] border border-gray-100 bg-gray-50 p-2 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FixMaster Mobile Repair Coverage Area - Hyderabad"
            className="rounded-[18px] grayscale-[15%] contrast-[105%] transition-all duration-500 hover:grayscale-0"
          />
        </div>

      </div>
    </section>
  );
};

export default Coverage;