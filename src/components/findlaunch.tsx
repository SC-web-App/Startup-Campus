import Image from "next/image";

interface Region {
  id: number;
  name: string;
}

const regions: Region[] = [
  { id: 1, name: "North Central" },
  { id: 2, name: "North Central" },
  { id: 3, name: "North Central" },
  { id: 4, name: "North Central" },
  { id: 5, name: "North Central" },
  { id: 6, name: "North Central" },
];

const FindLaunch: React.FC = () => {
  return (
    <div className="p-8 font-sans">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Find a Launchpad Near You</h1>
        <p className="text-lg text-gray-600">
          Discover launchpads near you, connect with like-minded innovators, and
          kickstart your entrepreneurial journey.
        </p>
        {/* Search Bar */}
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search by university or location..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none">
            🔍
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-3xl h-64 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500">
        <img src="/map.svg" alt="Map" className="w-full max-w-3xl h-auto"/>
          Map goes here
        </div>
      </div>

      {/* Regions Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {regions.map((region) => (
          <div
            key={region.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg"
          >
            <span className="text-lg font-medium">{region.name}</span>
            <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindLaunch;
