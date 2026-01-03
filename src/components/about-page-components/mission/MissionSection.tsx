import MissionContent from "./MissionContent";
import MissionValues from "./MissionValues";

export default function MissionSection() {
  return (
    <section
      className="mb-2xl md:mb-4xl py-2xl md:py-3xl"
      aria-labelledby="mission-title"
    >
      <div className="text-center mb-2xl md:mb-3xl">
        <h2
          id="mission-title"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-md md:mb-lg font-instrument-serif text-gray-900"
        >
          Our Mission & Values
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-montserrat">
          Driving business growth through innovation, integrity, and measurable
          results
        </p>
      </div>

      <MissionContent />
      <MissionValues />
    </section>
  );
}
