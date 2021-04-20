import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
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
      svg {
        color: ${pallete.primary.main};
      }
    `};
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 10px;

  border-radius: 5px;

  ${({ theme: { pallete } }) => css`
    background: ${pallete.darker.light};
    color: ${pallete.text.main};
    border-color: ${pallete.darker.main};
  `};
`;

export const StyledInput = styled.input`
  padding-left: 5px;

  -webkit-appearance: none;

  width: 100%;

  color: ${({ theme: { pallete } }) => pallete.text.main};

  background: ${({ theme: { pallete } }) => pallete.darker.light} !important;

  outline: 0;
  border: 0;
`;
