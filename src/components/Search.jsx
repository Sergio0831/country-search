import styled from 'styled-components/macro';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  width: 100%;
  background-color: var(--elements-bg-colors);
  padding: 18px 32px;
  display: flex;
  gap: 24px;
  align-items: center;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: var(--radius);
  margin-bottom: 40px;
  transition: all 100ms;

  @media (min-width: 712px) {
    margin-bottom: 0;
    width: 480px;
  }

  svg {
    color: var(--elements-colors);
    font-size: 18px;
    transition: var(--transition);
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  color: var(--elements-colors);
  font-size: var(--fs-sm);
  line-height: 20px;
  border: none;
  outline: none;
  background-color: var(--elements-bg-colors);
  transition: all 100ms;
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
