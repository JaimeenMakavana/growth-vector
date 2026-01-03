export default function ContactSection() {
  return (
    <div id="contact" className="py-16 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl mb-6 tracking-tight text-gray-900 font-montserrat font-semibold">
        Ready to Accelerate Your Growth?
      </h2>
      <p className="text-gray-500 text-lg mb-8 font-montserrat font-medium">
        Whether you need a growth strategy or an automated growth system,
        let&apos;s discuss your path to exponential growth.
      </p>
      <a
        href="mailto:hello@growthvector.com"
        className="group inline-flex items-center gap-2 text-gray-900 hover:text-rose-600 font-semibold text-xl transition-colors relative"
      >
        <span className="relative z-10">hello@growthvector.com</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 group-hover:animate-bounce text-rose-600"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        </svg>
      </a>
    </div>
  );
}

