import axios from 'axios';
import { ALL_COUNTRIES } from './config';

const {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} = require('react');

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(
    (search, region) => {
      let data = [...countries];

      if (region) {
        data = data.filter((country) => country.region.includes(region));
      }

      if (search) {
        data = data.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase())
        );
      }
      setFilteredCountries(data);
    },
    [countries]
  );

  useEffect(() => {
    setLoading(true);
    if (!countries.length) {
      axios.get(ALL_COUNTRIES).then(({ data }) => {
        setCountries(data);
      });
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries, handleSearch]);

  const value = {
    countries,
    filteredCountries,
    onSearch: handleSearch,
    loading,
    setLoading,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
