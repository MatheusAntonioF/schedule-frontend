import styled, { css } from 'styled-components';

interface IWrapperProps {
  inputWithError: boolean;
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: column;

  width: 100%;

  > label {
    color: ${({ theme: { pallete } }) => pallete.text.main};
    margin-bottom: 0.5rem;
  }

  label,
  svg {
    transition: all 200ms ease-in-out;
  }

  &:focus-within {
    ${({ theme: { pallete } }) => css`
      > label {
        color: ${pallete.primary.main};
      }
      svg.icon-input {
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

      > div {
        border-color: ${pallete.danger.main};

        > svg.icon-input {
          color: ${pallete.danger.main};
        }
      }
    `}
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 10px;

  border-radius: 5px;

  border: 2px solid transparent;

  ${({ theme: { pallete } }) => css`
    background: ${pallete.darker.light};
    color: ${pallete.text.main};
    border-color: ${pallete.darker.main};
  `};
`;

export const StyledInput = styled.input`
  padding-left: 5px;

  -webkit-appearance: none;

  ${({ theme: { pallete } }) => css`
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: none;
      -webkit-text-fill-color: ${pallete.text.main} !important;
      -webkit-box-shadow: 0 0 0px 1000px ${pallete.darker.light} inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  `};

  width: 100%;

  color: ${({ theme: { pallete } }) => pallete.text.main};

  background: ${({ theme: { pallete } }) => pallete.darker.light} !important;

  outline: 0;
  border: 0;
`;

export const ContainerError = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  margin-top: 0.4rem;

  > svg {
    margin: 0px 0.2rem 0.1rem 0px;

    border: none;

    fill: ${({ theme: { pallete } }) => pallete.danger.main};
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme: { pallete } }) => pallete.danger.main};
`;
