import Image from "next/image";

export default function ApproachImages() {
  return (
    <div className="relative h-[600px] flex items-center justify-center group/polaroid">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/50 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

      {/* Photo 1 */}
      <div className="absolute top-2xl left-2xl w-72 bg-background p-md pb-12 shadow-xl rotate-[-6deg] z-10 rounded-sm transform transition-all duration-slow hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-2xl">
        <div className="w-full h-80 bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-slow">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Strategy Session"
            fill
            className="object-cover mix-blend-multiply hover:mix-blend-normal transition-all duration-base"
            sizes="288px"
          />
        </div>
        {/* Pin */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-800 shadow-md border-2 border-background"></div>
      </div>

      {/* Photo 2 */}
      <div className="absolute top-24 right-md w-72 bg-background p-md pb-12 shadow-xl rotate-[6deg] z-20 rounded-sm transform transition-all duration-slow hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-2xl">
        <div className="w-full h-80 bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-slow">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Team"
            fill
            className="object-cover mix-blend-multiply hover:mix-blend-normal transition-all duration-base"
            sizes="288px"
          />
        </div>
        {/* Pin */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-800 shadow-md border-2 border-background"></div>
      </div>
    </div>
  );
}
