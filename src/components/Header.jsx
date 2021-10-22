import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Container } from './Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { Wrapper } from './Wrapper';

const StyledHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  background-color: var(--elements-bg-colors);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  transition: var(--transition);
`;

const Title = styled.h1`
  font-weight: var(--fw-bold);
  font-size: 24px;
  line-height: 33px;
`;

const ThemeSwicher = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: var(--fs-md);
  line-height: 22px;
`;

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const icon = theme === 'light' ? <IoMoonOutline /> : <IoMoon />;
  const text = theme === 'light' ? 'Dark Theme' : 'Light Theme';

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
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
