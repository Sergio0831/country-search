import styled from 'styled-components/macro';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  width: 100%;
  background-color: var(--elements-bg-colors);
  padding: 14px 32px;
  display: flex;
  gap: 24px;
  align-items: center;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: var(--radius);
  margin-bottom: 40px;

  @media (min-width: 30em) {
    padding: 1.8rem 3.2rem;
  }

  @media (min-width: 46.125em) {
    margin-bottom: 0;
    width: 48rem;
  }

  svg {
    color: var(--elements-colors);
    font-size: var(--fs-md);

    @media (min-width: 30em) {
      font-size: 1.8rem;
    }
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  color: var(--elements-colors);
  font-size: var(--fs-sm);
  line-height: 2rem;
  border: none;
  outline: none;
  background-color: var(--elements-bg-colors);
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};

export default Search;
