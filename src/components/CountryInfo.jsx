import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { filterByCode } from '../config';

const StyledCountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CountryName = styled.h2`
  margin-bottom: 2.3rem;
  font-weight: 800;
  font-size: 2.2rem;
  line-height: 3rem;

  @media (min-width: 56.25em) {
    font-size: 3.2rem;
    line-height: 4.4rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 3.2rem;

  @media (min-width: 68.75em) {
    flex-direction: row;
  }
`;

const InfoList = styled.ul``;

const ListItem = styled.li`
  font-weight: 600;
  font-size: var(--fs-sm);
  line-height: 3.2rem;

  @media (min-width: 56.25em) {
    font-size: var(--fs-md);
    line-height: 3.3rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3.4rem;
  gap: 1.6rem;

  @media (min-width: 56.25em) {
    margin-top: 2rem;
  }

  @media (min-width: 68.75em) {
    margin-top: 7rem;
  }

  @media (min-width: 79.375em) {
    flex-direction: row;
  }
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
`;

const Border = styled.h3`
  font-size: var(--fs-md);
  line-height: 2.4rem;
  flex: none;
`;

const StyledLink = styled(Link)`
  background: #ffffff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  padding: 4px 1.6rem;
  width: max-content;

  text-align: center;
  font-weight: 300;
  font-size: 12;
  line-height: 1.6rem;
  color: var(--colors-text);
  background-color: var(--elements-bg-colors);

  &:not(:last-child) {
    margin-right: 1rem;
  }

  @media (min-width: 56.25em) {
    font-size: var(--fs-sm);
    line-height: 1.9rem;
  }
`;

const CountryInfo = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain = [],
  currencies = [],
  languages = [],
  borders = [],
}) => {
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders), {
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(({ data }) => setBorderCountries(data.map((item) => item.name)));
  }, [borders]);

  return (
    <StyledCountryInfo>
      <CountryName>{name}</CountryName>
      <Info>
        <InfoList>
          <ListItem>
            <b>Native Name:</b> {nativeName}
          </ListItem>
          <ListItem>
            <b>Population:</b> {population}
          </ListItem>
          <ListItem>
            <b>Region:</b> {region}
          </ListItem>
          <ListItem>
            <b>Subregion:</b> {subregion}
          </ListItem>
          <ListItem>
            <b>Capital:</b> {capital}
          </ListItem>
        </InfoList>
        <InfoList>
          <ListItem>
            <b>Top Level Domain:</b>{' '}
            {topLevelDomain.map((d, index) => (
              <span key={d}>{(index ? ', ' : '') + d}</span>
            ))}
          </ListItem>
          <ListItem>
            <b>Currencies:</b>{' '}
            {currencies.map((c, index) => (
              <span key={c.code}>{(index ? ', ' : '') + c.name}</span>
            ))}
          </ListItem>
          <ListItem>
            <b>Languages:</b>{' '}
            {languages.map((l, index) => (
              <span key={l.name}>{(index ? ', ' : '') + l.name}</span>
            ))}
          </ListItem>
        </InfoList>
      </Info>
      <Tags>
        <Border>Border Countries: </Border>
        <TagsList>
          {!borderCountries.length ? (
            <span>There is no border countries</span>
          ) : (
            borderCountries.map((b) => (
              <StyledLink to={`${b}`} key={b}>
                {b}
              </StyledLink>
            ))
          )}
        </TagsList>
      </Tags>
    </StyledCountryInfo>
  );
};

export default CountryInfo;
