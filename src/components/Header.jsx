import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Container } from './Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Wrapper } from './Wrapper';

const StyledHeader = styled.header`
  height: 8rem;
  display: flex;
  align-items: center;
  background-color: var(--elements-bg-colors);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0562443);
`;

const Title = styled.h1`
  font-weight: var(--fw-bold);
  font-size: 1%.8rem;
  line-height: 3.3rem;

  @media (min-width: 30em) {
    font-size: 2.4rem;
  }
`;

const ThemeSwicher = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.2rem;
  line-height: 2.2rem;

  @media (min-width: 30em) {
    font-size: var(--fs-md);
  }
`;

const Header = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme'));

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const icon = theme === 'light' ? <IoMoonOutline /> : <IoMoon />;
  const text = theme === 'light' ? 'Dark Theme' : 'Light Theme';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Title>Where is the World?</Title>
          <ThemeSwicher onClick={toggleTheme}>
            {icon} {text}
          </ThemeSwicher>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
