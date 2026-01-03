import Image from "next/image";

export default function ApproachImages() {
  return (
    <div className="relative h-[600px] flex items-center justify-center group/polaroid">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/50 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

      {/* Photo 1 */}
      <div className="absolute top-10 left-10 w-72 bg-white p-4 pb-12 shadow-xl rotate-[-6deg] z-10 rounded-sm transform transition-all duration-500 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-2xl hover:shadow-rose-500/20">
        <div className="w-full h-80 bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Strategy Session"
            fill
            className="object-cover mix-blend-multiply hover:mix-blend-normal transition-all"
            sizes="288px"
          />
        </div>
        {/* Pin */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-800 shadow-md border-2 border-white"></div>
      </div>

      {/* Photo 2 */}
      <div className="absolute top-24 right-4 w-72 bg-white p-4 pb-12 shadow-xl rotate-[6deg] z-20 rounded-sm transform transition-all duration-500 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-2xl hover:shadow-rose-500/20">
        <div className="w-full h-80 bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Team"
            fill
            className="object-cover mix-blend-multiply hover:mix-blend-normal transition-all"
            sizes="288px"
          />
        </div>
        {/* Pin */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-800 shadow-md border-2 border-white"></div>
      </div>
    </div>
  );
}

