import styled from 'styled-components/macro';
import { Container } from './Container';
import Header from './Header';

const Wrapper = styled.main``;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  );
};

export default Layout;
