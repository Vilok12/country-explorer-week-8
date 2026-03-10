function CountryCard({ country }) {

    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 p-4 border border-indigo-100">
  
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-36 object-cover rounded-lg"
        />
  
        <h2 className="text-xl font-bold text-indigo-700 mt-3">
          {country.name.common}
        </h2>
  
        <p className="text-sm text-gray-700 mt-1">
          <span className="font-semibold text-indigo-600">Capital:</span>{" "}
          {country.capital?.[0] || "N/A"}
        </p>
  
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-indigo-600">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>
  
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-indigo-600">Region:</span>{" "}
          {country.region}
        </p>
  
      </div>
    );
  }
  
  export default CountryCard;