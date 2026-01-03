export default function Loading() {
  return (
    <div className="bg-bg-primary text-text-primary antialiased min-h-screen">
      <main className="max-w-7xl mx-auto pt-24 md:pt-32 px-md md:px-xl pb-2xl md:pb-4xl">
        {/* Header Skeleton */}
        <div className="mb-2xl md:mb-4xl">
          <div className="h-10 w-64 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
          <div className="h-6 w-full bg-gray-200 rounded-md mb-2 animate-pulse"></div>
          <div className="h-6 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        {/* Form Skeleton */}
        <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-xl md:p-2xl shadow-lg">
          <div className="space-y-xl md:space-y-2xl">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i}>
                <div className="h-4 w-24 bg-gray-200 rounded-md mb-2 animate-pulse"></div>
                <div className="h-12 w-full bg-gray-100 rounded-lg animate-pulse"></div>
              </div>
            ))}
            <div className="h-12 w-40 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
