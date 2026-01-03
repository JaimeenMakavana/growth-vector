export default function Loading() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        {/* Back Button Skeleton */}
        <div className="h-6 w-32 bg-gray-200 rounded mb-2xl animate-pulse"></div>

        {/* Header Skeleton */}
        <div className="mb-2xl">
          <div className="flex gap-md mb-md">
            <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="h-10 w-3/4 bg-gray-200 rounded-md mb-md animate-pulse"></div>
          <div className="h-6 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-2xl">
          <div>
            <div className="h-6 w-32 bg-gray-200 rounded-md mb-md animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          <div>
            <div className="h-6 w-32 bg-gray-200 rounded-md mb-md animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Metrics Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 p-md rounded-lg">
                <div className="h-8 w-16 bg-gray-200 rounded mb-sm animate-pulse"></div>
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
