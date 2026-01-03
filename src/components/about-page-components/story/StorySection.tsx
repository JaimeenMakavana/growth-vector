import StoryTimeline from "./StoryTimeline";

export default function StorySection() {
  return (
    <section
      className="mb-2xl md:mb-4xl py-2xl md:py-3xl"
      aria-labelledby="story-title"
    >
      <div className="text-center mb-2xl md:mb-3xl">
        <h2
          id="story-title"
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-md md:mb-lg font-instrument-serif text-gray-900"
        >
          Our Story
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-montserrat">
          From a vision to reality—how Growth Vector became a trusted partner
          for business growth
        </p>
      </div>

      <StoryTimeline />
    </section>
  );
}
