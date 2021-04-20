import styled from 'styled-components';

import backgroundMeteor from '../../../styles/assets/background-animated.svg';

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  background: url(${backgroundMeteor}) no-repeat center;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 1.5rem;

  color: ${({ theme: { pallete } }) => pallete.primary.main};
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 500px;
  width: 100%;
  height: 100%;

  padding: 1.25rem 1.5rem;

  background: ${({ theme: { pallete } }) => pallete.darker.main};

  border-radius: 5px;
`;
