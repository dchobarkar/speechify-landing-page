const LoadingPage = () => {
  return (
    <section>
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Loading country details...</h2>

        <div className="flex justify-center items-center">
          <div className="min-w-60 w-1/3 bg-gray-100 p-6 m-2 rounded-lg">
            <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mb-4 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadingPage;
