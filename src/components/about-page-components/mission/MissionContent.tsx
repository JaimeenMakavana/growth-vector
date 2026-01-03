export default function MissionContent() {
  return (
    <div className="grid md:grid-cols-2 gap-xl md:gap-2xl lg:gap-3xl items-center mb-2xl md:mb-3xl">
      <div className="bg-background rounded-xl md:rounded-2xl p-xl md:p-2xl shadow-sm border border-gray-100">
        <h3 className="text-2xl md:text-3xl font-semibold mb-md md:mb-lg font-instrument-serif text-gray-900">
          Our Mission
        </h3>
        <p className="text-base md:text-lg text-gray-700 font-montserrat leading-relaxed mb-md">
          To empower businesses of all sizes to achieve exponential growth by
          leveraging cutting-edge technology, data-driven insights, and
          strategic marketing excellence.
        </p>
        <p className="text-base md:text-lg text-gray-700 font-montserrat leading-relaxed">
          We believe every business has untapped potential. Our mission is to
          unlock that potential and create sustainable, scalable growth that
          transforms organizations and their communities.
        </p>
      </div>

      <div className="bg-background rounded-xl md:rounded-2xl p-xl md:p-2xl shadow-sm border border-gray-100">
        <h3 className="text-2xl md:text-3xl font-semibold mb-md md:mb-lg font-instrument-serif text-gray-900">
          Our Vision
        </h3>
        <p className="text-base md:text-lg text-gray-700 font-montserrat leading-relaxed mb-md">
          To become the most trusted growth partner for ambitious businesses
          worldwide, recognized for our innovative approach, exceptional results,
          and unwavering commitment to client success.
        </p>
        <p className="text-base md:text-lg text-gray-700 font-montserrat leading-relaxed">
          We envision a future where businesses grow not just faster, but
          smarter—with purpose, sustainability, and measurable impact at their
          core.
        </p>
      </div>
    </div>
  );
}

