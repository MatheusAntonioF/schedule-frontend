import styled, { css } from 'styled-components';

import { darken, transparentize } from 'polished';
import { IButtonProps } from '.';

const ghostButtonStyle = css`
  ${({ theme: { pallete } }) => css`
    background: inherit;

    border: 1.1px solid ${transparentize(0.5, pallete.primary.main)};

    &:hover {
      background: inherit;
      transform: scale(1.1);
    }
  `}
`;

export const StyledButton = styled.button<IButtonProps>`
  border-radius: 5px;
  height: 1.8rem;
  border: none;

  width: ${({ width }) => width};
  cursor: pointer;

  transition: all 200ms ease-in-out;

  ${({ theme: { pallete } }) => css`
    background: ${pallete.primary.main};
    color: ${pallete.text.main};
  `};

  &:hover {
    ${({ theme: { pallete } }) => css`
      background: ${darken(0.2, pallete.primary.main)};

      transform: scale(1.1);
    `};
  }

  ${({ ghost }) => ghost && ghostButtonStyle}
`;
