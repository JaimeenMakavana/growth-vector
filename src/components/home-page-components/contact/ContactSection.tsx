import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <div
      id="contact"
      className="py-2xl md:py-3xl lg:py-4xl text-center mx-auto"
    >
      <h2 className="text-2xl md:text-3xl mb-md md:mb-xl tracking-tight text-gray-900 font-montserrat font-semibold">
        Ready to Accelerate Your Growth?
      </h2>
      <p className="text-gray-500 text-base md:text-lg mb-xl md:mb-2xl font-montserrat font-medium">
        Whether you need a growth strategy or an automated growth system,
        let&apos;s discuss your path to exponential growth.
      </p>
      <a
        href="mailto:hello@growthvector.com"
        className="group inline-flex items-center gap-sm text-gray-900 hover:text-rose-600 font-semibold text-xl transition-colors duration-base relative"
      >
        <span className="relative z-10">hello@growthvector.com</span>
        <span className="absolute bottom-0 left-0 w-full h-1 bg-rose-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-base"></span>
        <Mail
          className="w-5 h-5 group-hover:animate-bounce text-rose-600"
          strokeWidth={2}
        />
      </a>
    </div>
  );
}
