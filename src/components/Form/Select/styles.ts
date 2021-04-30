import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

interface IContainerProps {
  inputWithError: boolean;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;

  width: 100%;

  > label {
    color: ${({ theme: { pallete } }) => pallete.text.main};
    margin-bottom: 0.5rem;
    transition: all 200ms ease-in-out;
  }

  &:focus-within {
    ${({ theme: { pallete } }) => css`
      > label {
        color: ${pallete.primary.main};
      }
    `};
  }

  ${({ inputWithError, theme: { pallete } }) =>
    inputWithError &&
    css`
      > label {
        transition: all 0ms;

        color: ${pallete.danger.main};
      }
    `}

  ${({ theme: { pallete } }) => css`
    div.react-select__control {
      background: ${pallete.darker.light};

      display: flex;
      align-items: center;

      border: none
      border-color: none;

      height: 32px !important;

      color: ${pallete.text.main};

      min-height: 32px;

      border-radius: 5px;
      border-style: none;
      border-width: 0px;

      &:hover {
        border: none !important;
        box-shadow: none;
        cursor: pointer;

        transform: unset !important;
      }

      &:focus-within {
        border: 1px solid ${pallete.primary.main}
      }
    }

    div.react-select__value-container {
      height: 100% !important;

      margin-top: -2px;
    }

    div.react-select__single-value {
      color: ${pallete.text.main};

    }

    span.react-select__indicator-separator {
      display: none;

    }

    div.react-select__indicator {
      margin-top: -2px;

      svg {
        fill: ${pallete.primary.main}
      }
    }

    div.react-select__menu {
      background-color: ${pallete.darker.light};

      div.react-select__option {
        color: ${pallete.text.main};

        &:hover,
        &:active,
        &:focus {
          background: ${transparentize(0.5, pallete.primary.main)} !important;
          cursor: pointer;
        }
      }
    }
  `}
`;

export const ContainerError = styled.div``;

export const MessageError = styled.div``;
