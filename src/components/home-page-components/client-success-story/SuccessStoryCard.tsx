import { TrendingUp } from "lucide-react";

interface SuccessStory {
  id: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  metrics: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
  };
  stickyOffset: string;
}

interface SuccessStoryCardProps {
  story: SuccessStory;
}

export default function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  return (
    <div
      className={`group w-full ${story.stickyOffset} bg-background hover:bg-gradient-to-br hover:from-background hover:to-rose-50 rounded-2xl border border-gray-100 hover:border-rose-200 shadow-sm hover:shadow-2xl transition-all duration-slow cursor-pointer transform hover:-translate-y-2 p-2xl md:p-3xl lg:p-4xl`}
    >
      <div className="flex justify-between items-start text-sm md:text-base text-gray-500 mb-16">
        <span className="font-montserrat font-medium bg-gray-100 group-hover:bg-rose-100 group-hover:text-rose-600 px-lg py-xs rounded-full transition-colors duration-base">
          {story.category}
        </span>
        <span className="font-montserrat font-medium flex items-center gap-xs group-hover:text-rose-600 transition-colors duration-base">
          {story.tag}
        </span>
      </div>
      <div className="flex justify-between items-end">
        <div className="">
          <h3 className="text-3xl md:text-4xl text-gray-900 leading-tight mb-xl font-montserrat font-semibold group-hover:text-rose-600 transition-colors duration-base">
            {story.title}
          </h3>
          <p className="text-gray-600 mb-2xl font-montserrat font-medium leading-relaxed">
            {story.description}
          </p>
          <div className="flex gap-3xl text-gray-700">
            <div className="group-hover:translate-x-2 transition-transform duration-base">
              <div className="text-lg font-montserrat font-semibold text-rose-500">
                {story.metrics.primary.value}
              </div>
              <div className="text-sm text-gray-500 mt-xs font-montserrat font-medium">
                {story.metrics.primary.label}
              </div>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-base delay-100">
              <div className="text-lg font-montserrat font-semibold text-rose-500">
                {story.metrics.secondary.value}
              </div>
              <div className="text-sm text-gray-500 mt-xs font-montserrat font-medium">
                {story.metrics.secondary.label}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-md rounded-full group-hover:bg-rose-600 group-hover:text-background group-hover:scale-110 group-hover:rotate-12 transition-all duration-base shadow-sm">
          <TrendingUp className="w-6 h-6" strokeWidth={2} />
        </div>
      </div>
    </div>
  );
}
