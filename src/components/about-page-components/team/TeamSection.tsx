import TeamGrid from "./TeamGrid";

export default function TeamSection() {
  return (
    <section
      className="mb-2xl md:mb-4xl py-2xl md:py-3xl"
      aria-labelledby="team-title"
    >
      <div className="text-center mb-2xl md:mb-3xl">
        <h2
          id="team-title"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-md md:mb-lg font-instrument-serif text-gray-900"
        >
          Meet Our Team
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-montserrat">
          The passionate experts behind Growth Vector&apos;s success
        </p>
      </div>

      <TeamGrid />
    </section>
  );
}
