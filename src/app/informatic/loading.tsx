export default function Loading() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        {/* Hero Skeleton */}
        <div className="mb-2xl md:mb-4xl text-center">
          <div className="h-16 w-96 bg-gray-200 rounded-md mb-6 mx-auto animate-pulse"></div>
          <div className="h-8 w-full max-w-4xl bg-gray-200 rounded-md mx-auto animate-pulse"></div>
        </div>

        {/* Skills Section Skeleton */}
        <div className="mb-2xl md:mb-4xl">
          <div className="h-10 w-64 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded-md mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md md:gap-xl">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-2xl shadow-sm"
              >
                <div className="space-y-md">
                  <div className="flex justify-between items-start">
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                  </div>
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section Skeleton */}
        <div className="mb-2xl md:mb-4xl">
          <div className="h-10 w-64 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded-md mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md md:gap-xl">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-2xl shadow-sm"
              >
                <div className="space-y-md">
                  <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Section Skeleton */}
        <div className="mb-2xl md:mb-4xl">
          <div className="h-10 w-64 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded-md mb-8 animate-pulse"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md md:gap-xl">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl border-2 border-gray-200 p-2xl shadow-sm"
              >
                <div className="space-y-md">
                  <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="flex items-baseline gap-md">
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

