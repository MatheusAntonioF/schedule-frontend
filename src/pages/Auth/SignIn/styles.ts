import styled from 'styled-components';

import backgroundMeteor from '../../../styles/assets/background-meteor.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: url(${backgroundMeteor});

  > h1 {
    color: ${({ theme: { pallete } }) => pallete.primary.main} !important;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.25rem 1.5rem;

  background: ${({ theme: { pallete } }) => pallete.darker.main};

  border-radius: 5px;
`;
