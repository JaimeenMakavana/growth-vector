import Link from "next/link";

export default function AboutCTA() {
  return (
    <section
      className="py-2xl md:py-3xl text-center"
      aria-labelledby="cta-title"
    >
      <div className="bg-background rounded-xl md:rounded-2xl p-xl md:p-2xl lg:p-3xl border border-gray-100 shadow-sm">
        <h2
          id="cta-title"
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-md md:mb-lg font-instrument-serif text-gray-900"
        >
          Ready to Grow?
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-xl md:mb-2xl font-montserrat">
          Let&apos;s discuss how Growth Vector can help accelerate your business
          growth and achieve your ambitious goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-md justify-center">
          <Link
            href="/book-strategy"
            className="bg-gray-900 text-white px-xl py-md md:px-2xl md:py-lg rounded-full hover:bg-rose-600 transition-colors font-montserrat font-medium text-base md:text-lg"
          >
            Book a Strategy Session
          </Link>
          <Link
            href="/"
            className="bg-white text-gray-900 px-xl py-md md:px-2xl md:py-lg rounded-full border-2 border-gray-900 hover:bg-gray-50 transition-colors font-montserrat font-medium text-base md:text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
