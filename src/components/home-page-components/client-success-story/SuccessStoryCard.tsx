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
      className={`group sticky ${story.stickyOffset} bg-white hover:bg-gradient-to-br hover:from-white hover:to-rose-50 rounded-3xl p-8 md:p-12 border border-gray-100 hover:border-rose-200 shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-2`}
    >
      <div className="flex justify-between items-start text-sm md:text-base text-gray-500 mb-16">
        <span className="font-montserrat font-medium bg-gray-100 group-hover:bg-rose-100 group-hover:text-rose-600 px-3 py-1 rounded-full transition-colors">
          {story.category}
        </span>
        <span className="font-montserrat font-medium flex items-center gap-1 group-hover:text-rose-600 transition-colors">
          {story.tag}
        </span>
      </div>
      <div className="flex justify-between items-end">
        <div className="max-w-xl">
          <h3 className="text-3xl md:text-4xl text-gray-900 leading-tight mb-6 font-montserrat font-semibold group-hover:text-rose-600 transition-colors">
            {story.title}
          </h3>
          <p className="text-gray-600 mb-8 font-montserrat font-medium leading-relaxed">
            {story.description}
          </p>
          <div className="flex gap-12 text-gray-700">
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <div className="text-lg font-montserrat font-semibold text-rose-500">
                {story.metrics.primary.value}
              </div>
              <div className="text-sm text-gray-500 mt-1 font-montserrat font-medium">
                {story.metrics.primary.label}
              </div>
            </div>
            <div className="group-hover:translate-x-2 transition-transform duration-300 delay-100">
              <div className="text-lg font-montserrat font-semibold text-rose-500">
                {story.metrics.secondary.value}
              </div>
              <div className="text-sm text-gray-500 mt-1 font-montserrat font-medium">
                {story.metrics.secondary.label}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-full group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-sm">
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
            className="w-6 h-6"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
}

