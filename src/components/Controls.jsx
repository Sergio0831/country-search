import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { CustomSelect } from './CustomSelect';
import Search from './Search';
import { Wrapper } from './Wrapper';

const StyledControls = styled.div`
  margin-top: 3rem;
`;

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Controls = () => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  return (
    <StyledControls>
      <Wrapper>
        <Search search={search} setSearch={setSearch} />
        <CustomSelect
          options={options}
          placeholder="Filter by Region"
          isClearable
          isSearchable={false}
          onChange={setRegion}
        />
      </Wrapper>
    </StyledControls>
  );
};

export default Controls;
