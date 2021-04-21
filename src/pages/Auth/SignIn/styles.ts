import styled, { keyframes } from 'styled-components';

import backgroundMeteor from '../../../styles/assets/background-animated.svg';

const showContainer = keyframes`
  from {
    width: 0%;
  } to {
    width: 100%;
  }
`;

const showSignInForm = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  background: url(${backgroundMeteor}) no-repeat center;
  background-size: cover;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 500px;

  animation-name: ${showContainer};
  animation-duration: 1.5s;
  animation-delay: 0s;
  animation-fill-mode: backwards;
  animation-timing-function: ease-out;

  height: 100%;

  padding: 1.25rem 1.5rem;

  background: ${({ theme: { pallete } }) => pallete.darker.main};

  border-radius: 5px;

  h1,
  form,
  button {
    animation-name: ${showSignInForm};
    animation-duration: 1.5s;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 1.5rem;

  color: ${({ theme: { pallete } }) => pallete.primary.main};
`;
