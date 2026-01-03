import ApproachContent from "./ApproachContent";
import ApproachImages from "./ApproachImages";

export default function ApproachSection() {
  return (
    <div
      id="about"
      className="py-2xl md:py-3xl lg:py-4xl grid lg:grid-cols-2 gap-xl md:gap-2xl lg:gap-20 items-center"
    >
      <ApproachContent />
      <ApproachImages />
    </div>
  );
}
