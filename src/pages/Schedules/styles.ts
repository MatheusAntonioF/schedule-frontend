import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background: ${({ theme: { pallete } }) => pallete.darker.main};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-template-rows: 100%;

  column-gap: 0.8rem;

  padding: 2rem 0rem;

  max-width: 1200px;
  width: 100%;
  height: 100%;

  background: inherit;
`;

export const Calendar = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ theme: { pallete } }) => pallete.darker.light};
`;
