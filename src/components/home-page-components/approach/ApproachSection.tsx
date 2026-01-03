import ApproachContent from "./ApproachContent";
import ApproachImages from "./ApproachImages";

export default function ApproachSection() {
  return (
    <div
      id="about"
      className="py-24 grid lg:grid-cols-2 gap-20 items-center"
    >
      <ApproachContent />
      <ApproachImages />
    </div>
  );
}

