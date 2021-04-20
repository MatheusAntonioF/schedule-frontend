import styled, { css } from 'styled-components';

import { Input } from 'antd';

export const Container = styled.div`
  width: 100%;
  height: auto;

  label {
    color: ${({ theme: { pallete } }) => pallete.text.main};
  }

  &:focus-within {
    svg {
      color: ${({ theme: { pallete } }) => pallete.primary.main};
    }

    label {
      color: ${({ theme: { pallete } }) => pallete.primary.main};
    }
  }
`;

const sharedStyles = css`
  background: ${({ theme: { pallete } }) => pallete.darker.light};
  color: ${({ theme: { pallete } }) => pallete.text.main};
  border-color: ${({ theme: { pallete } }) => pallete.darker.main};
`;

export const StyledInput = styled(Input)`
  ${sharedStyles}

  input {
    ${sharedStyles}
  }

  border-radius: 5px;

  &:focus,
  &:hover {
    border-color: ${({ theme: { pallete } }) => pallete.primary.main};
  }

  &::placeholder {
    color: ${({ theme: { pallete } }) => pallete.text.main};
  }
`;
