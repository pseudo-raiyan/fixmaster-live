"use client";

const ContactButton = () => {
  const handleScroll = () => {
    const section =
      document.getElementById("contact-us");

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <button
      onClick={handleScroll}
      className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-700"
    >
      Contact Us
    </button>
  );
};

export default ContactButton;