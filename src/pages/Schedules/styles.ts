import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

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

  padding: 0.5rem 0.7rem 0.5rem;

  border-radius: 5px;

  ${({ theme: { pallete } }) => css`
    .fc-toolbar-title {
      color: ${pallete.primary.main};
    }

    .fc-today-button,
    .fc-button,
    .fc-button-primary {
      background: ${pallete.primary.main};

      transition: all 250ms ease-in-out;

      border: none;
    }

    .fc-today-button {
      &:disabled {
        background: ${transparentize(0.8, pallete.primary.main)};
        transform: scale(1.05);
      }

      &:hover {
        background: ${transparentize(0.4, pallete.primary.main)};
        transform: scale(1.05);
      }
    }

    .fc-prev-button {
      margin-right: 0.1rem;

      &:hover {
        background: ${transparentize(0.4, pallete.primary.main)};
        transform: translateX(-5px);
      }
    }

    .fc-next-button {
      margin-left: 0.1rem;

      &:hover {
        background: ${transparentize(0.4, pallete.primary.main)};
        transform: translateX(5px);
      }
    }

    .fc-day-today {
      background: ${transparentize(0.8, pallete.primary.main)} !important;
    }

    color: ${pallete.text.main};

    background: ${pallete.darker.light};
  `}
`;
