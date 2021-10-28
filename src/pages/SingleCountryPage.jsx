import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import Loader from '../components/Loader';
import { searchByCountry } from '../config';
import { useGlobalContext } from '../context';
import { IoIosArrowRoundBack } from 'react-icons/io';
import CountryInfo from '../components/CountryInfo';

const StyledLink = styled(Link)`
  display: flex;
  column-gap: 8px;
  margin-top: 4rem;
  margin-bottom: 6.4rem;
  padding: 6px 2.3rem;
  background-color: var(--elements-bg-colors);
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.293139);
  border-radius: 2px;
  font-weight: 300;
  font-size: var(--fs-md);
  line-height: 2rem;
  width: min-content;

  @media (min-width: 56.25em) {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }

  svg {
    font-size: 2rem;
  }
`;

const Country = styled.section`
  display: grid;
  grid-template-columns: 100%;
  column-gap: 6rem;
  row-gap: 4.4rem;

  @media (min-width: 56.25em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 79.375em) {
    grid-template-columns: 2fr 2fr;
    column-gap: 12rem;
  }
`;

const Flag = styled.img`
  width: 100%;
`;

const SingleCountryPage = () => {
  const [country, setCountry] = useState([]);
  const { loading, setLoading } = useGlobalContext();
  const { name } = useParams();

  const getCountry = useCallback(async () => {
    setLoading(true);
    const { data } = await axios(searchByCountry(name), {
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    if (data) {
      const {
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
        flag,
      } = data[0];
      const newCountry = {
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
        flag,
      };
      setCountry(newCountry);
      setLoading(false);
    }
  }, [name, setLoading]);

  useEffect(() => {
    getCountry();
  }, [name, getCountry]);

  return (
    <>
      {loading && <Loader />}
      <StyledLink to="/">
        <IoIosArrowRoundBack /> Back
      </StyledLink>
      <Country>
        <Flag src={country.flag} alt={country.name} />
        <CountryInfo {...country} name={name} />
      </Country>
    </>
  );
};

export default SingleCountryPage;
