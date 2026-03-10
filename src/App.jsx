import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");


  useEffect(() => {

    const fetchCountries = async () => {

      try {

        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data = await res.json();

        setCountries(data);
        setFilteredCountries(data);
        setLoading(false);

      } catch (err) {

        setError(err.message);
        setLoading(false);

      }

    };

    fetchCountries();

  }, []);


  useEffect(() => {

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(filtered);

  }, [query, countries]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center mb-6">
        🌍 Country Explorer
      </h1>

      <SearchBar onSearch={setQuery} />

      {loading && (
        <p className="text-center mt-10 text-lg">Loading countries...</p>
      )}

      {error && (
        <p className="text-center text-red-500 mt-10">{error}</p>
      )}

      {!loading && !error && (
        <CountryList countries={filteredCountries} />
      )}

    </div>
  );
}

export default App;