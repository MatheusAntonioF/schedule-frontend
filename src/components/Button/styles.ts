import styled, { css } from 'styled-components';

import { darken } from 'polished';

import { Button } from 'antd';

export const StyledButton = styled(Button)`
  background: ${({ theme: { pallete } }) => pallete.primary.main};
  border-color: ${({ theme: { pallete } }) => pallete.primary.main};

  color: ${({ theme: { pallete } }) => pallete.text.main};

  border-radius: 5px;

  &:hover {
    ${({ theme: { pallete } }) => css`
      background: ${darken(0.2, pallete.primary.main)};

      color: ${pallete.text.main};

      border-color: ${darken(0.2, pallete.primary.main)};
    `};
  }
`;
