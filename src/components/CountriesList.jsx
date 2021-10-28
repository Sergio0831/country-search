import styled from 'styled-components/macro';
import { useGlobalContext } from '../context';
import Country from './Country';
import Loader from './Loader';

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 4rem;
  margin-top: 3.6rem;

  @media (min-width: 30em) {
    gap: 7.5rem;
  }
`;

const CountriesList = () => {
  const { loading, filteredCountries } = useGlobalContext();

  return (
    <Section>
      {loading && <Loader />}
      {filteredCountries.map((country) => (
        <Country key={country.name} {...country} />
      ))}
    </Section>
  );
};

export default CountriesList;
