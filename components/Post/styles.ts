import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Post = styled.div`
  background: white;
  transition: box-shadow 0.1s ease-in;
  &:hover {
    box-shadow: 1px 1px 3px #aaa;
  }
`;
