import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Card = styled.article`
  background: var(--elements-bg-colors);
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.0294384);
  border-radius: var(--radius);
  overflow: hidden;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 16rem;
  object-fit: cover;
  object-position: center;
`;

const CardBody = styled.div`
  padding: 2.4rem 2.4rem 4.6rem 2.4rem;
`;

const CardTitle = styled.h3`
  margin-bottom: 1.6rem;
  font-weight: var(--fw-bold);
  font-size: 1.8rem;
  line-height: 2.6rem;
`;

const CardList = styled.ul``;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Country = ({ capital, name, population, region, flags: { png } }) => {
  return (
    <Link to={`${name}`}>
      <Card>
        <CardImg src={png} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardList>
            <CardListItem>
              <b>Population: </b>
              {population.toLocaleString()}
            </CardListItem>
            <CardListItem>
              <b>Region: </b>
              {region}
            </CardListItem>
            <CardListItem>
              <b>Capital: </b>
              {capital}
            </CardListItem>
          </CardList>
        </CardBody>
      </Card>
    </Link>
  );
};

export default Country;
