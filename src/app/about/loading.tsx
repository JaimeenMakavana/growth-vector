export default function Loading() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        {/* Hero Skeleton */}
        <div className="mb-2xl md:mb-4xl">
          <div className="h-12 md:h-16 w-3/4 md:w-1/2 bg-gray-200 rounded-md mb-md animate-pulse"></div>
          <div className="h-6 md:h-8 w-full md:w-2/3 bg-gray-200 rounded-md mb-md animate-pulse"></div>
          <div className="h-4 md:h-6 w-full md:w-3/4 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        {/* Mission Section Skeleton */}
        <div className="mb-2xl md:mb-4xl py-2xl">
          <div className="h-10 md:h-12 w-48 md:w-64 bg-gray-200 rounded-md mb-lg animate-pulse mx-auto"></div>
          <div className="grid md:grid-cols-2 gap-xl md:gap-2xl mt-xl">
            <div className="h-64 md:h-80 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="space-y-md">
              <div className="h-6 w-full bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-6 w-full bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Stats Skeleton */}
        <div className="mb-2xl md:mb-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md md:gap-xl">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-xl border border-gray-200"
              >
                <div className="h-8 md:h-10 w-16 md:w-24 bg-gray-200 rounded-md mb-md animate-pulse mx-auto"></div>
                <div className="h-4 w-full bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section Skeleton */}
        <div className="mb-2xl md:mb-4xl">
          <div className="h-10 md:h-12 w-48 md:w-64 bg-gray-200 rounded-md mb-xl animate-pulse mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl md:gap-2xl">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-xl"
              >
                <div className="h-48 md:h-64 w-full bg-gray-200 rounded-lg mb-md animate-pulse"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded-md mb-sm animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
