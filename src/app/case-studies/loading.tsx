export default function Loading() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        {/* Header Skeleton */}
        <div className="mb-2xl md:mb-4xl text-center">
          <div className="h-12 w-64 bg-gray-200 rounded-md mb-md mx-auto animate-pulse"></div>
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded-md mx-auto animate-pulse"></div>
        </div>

        {/* Filters Skeleton */}
        <div className="mb-2xl md:mb-3xl space-y-md">
          <div className="h-12 w-full max-w-md bg-gray-200 rounded-lg mx-auto animate-pulse"></div>
          <div className="flex gap-md justify-center flex-wrap">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Case Studies Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 p-2xl shadow-sm"
            >
              <div className="space-y-md">
                <div className="flex justify-between items-start">
                  <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
                <div className="h-8 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex gap-2xl pt-md">
                  <div className="h-12 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-12 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

