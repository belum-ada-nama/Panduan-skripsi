import React, { useEffect, useState } from 'react';

interface Data {
  category: string;
  title: string;
  description: string;
  url: string;
  url_svg: string;
}

const Tools: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('Publikasi dan Riset');

  useEffect(() => {
    const fetchJsonData = async () => {
      try {
        const response = await fetch('../../tools.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData: { tools: Data[] } = await response.json();
        if (Array.isArray(jsonData.tools)) {
          setData(jsonData.tools);
        } else {
          throw new Error('Fetched data is not in the expected format');
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(`Failed to fetch data: ${error.message}`);
        } else {
          setError('Failed to fetch data: Unknown error');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchJsonData();
  }, []);

  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as { [key: string]: Data[] });

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="text-lg font-medium text-gray-300">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <div className="text-lg font-medium text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-16 bg-black text-white rounded-lg shadow-xl">
      <h1 className="text-4xl font-semibold text-center mb-12">Tools Directory</h1>

      {/* Category filter buttons */}
      <div className="mb-8 flex flex-col sm:flex-row sm:space-x-4 sm:justify-center">
        {groupedData['Publikasi dan Riset'] && (
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-lg mb-2 sm:mb-0"
            onClick={() => setSelectedCategory('Publikasi dan Riset')}
          >
            Publikasi dan Riset
          </button>
        )}
        {Object.keys(groupedData).map((category) => {
          if (category !== 'Publikasi dan Riset') {
            return (
              <button
                key={category}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg mb-2 sm:mb-0"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            );
          }
          return null;
        })}
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-lg mb-2 sm:mb-0"
          onClick={() => setSelectedCategory(null)}
        >
          All Categories
        </button>
      </div>

      {/* Render tools for the selected category */}
      {Object.keys(groupedData).map((category) => {
        // Only render the section if it's the selected category or if no category is selected
        if (selectedCategory && selectedCategory !== category) return null;

        return (
          <section key={category} className="mb-14">
            <h2 className="text-3xl font-semibold text-gray-200 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedData[category].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow duration-200 border-2 border-gray-600 hover:shadow-xl hover:border-gray-500"
                >
                  <div className="flex items-center space-x-6">
                    <img
                      src={item.url_svg}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                    />
                    <div className='pr-8'>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-2 overflow-hidden text-ellipsis line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Tools;
