export default function Loading() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        {/* Hero Skeleton */}
        <div className="mb-2xl md:mb-4xl text-center">
          <div className="h-12 w-64 bg-gray-200 rounded-md mb-4 mx-auto animate-pulse"></div>
          <div className="h-6 w-full max-w-2xl bg-gray-200 rounded-md mb-2 mx-auto animate-pulse"></div>
          <div className="h-6 w-3/4 max-w-xl bg-gray-200 rounded-md mx-auto animate-pulse"></div>
        </div>

        {/* Filter Skeleton */}
        <div className="flex justify-center gap-md mb-2xl md:mb-3xl">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
            ></div>
          ))}
        </div>

        {/* Services Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl md:gap-2xl">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-2xl border border-gray-100 shadow-sm"
            >
              <div className="h-12 w-12 bg-gray-200 rounded-xl mb-xl animate-pulse"></div>
              <div className="h-8 w-3/4 bg-gray-200 rounded-md mb-md animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded-md mb-2xl animate-pulse"></div>
              <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
