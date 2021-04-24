import { transparentize } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import { darkTheme } from '../../styles/themes/dark';

const { pallete: palleteProps } = darkTheme;

const showModalAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
  }
  50% {
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

export const Wrapper = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  z-index: 2;
`;

export const Modal = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: ${({ theme: { pallete } }) => pallete.darker.main};

  width: ${({ width }) => width};
  height: auto;

  padding: 1rem;

  border-radius: 5px;

  z-index: 3;

  animation-name: ${showModalAnimation};
  animation-duration: 200ms;
  animation-delay: 0s;
  animation-fill-mode: backwards;
  animation-timing-function: ease-in;
`;

export const ModalHead = styled.div<{ color: keyof typeof palleteProps }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 50px;

  ${({ theme: { pallete }, color }) => css`
    div.info {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      height: 100%;

      div.wrapper-icon {
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${transparentize(0.8, pallete[color].main)};

        border-radius: 5px;

        width: 50px;
        height: 100%;

        margin-right: 0.5rem;

        > svg {
          color: ${pallete[color].main};
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      background: none;
      outline: 0;
      border: 0;

      cursor: pointer;

      padding: 0.5rem;

      border-radius: 5px;

      background: ${transparentize(0.8, pallete.danger.main)};

      transition: all 250ms ease-in-out;

      &:hover {
        transform: scale(1.1);

        > svg {
          transform: scale(1.1.5);
        }
      }

      > svg {
        color: ${pallete.danger.main};
      }
    }
  `}
`;

export const Title = styled.h2`
  color: ${({ theme: { pallete } }) => pallete.text.main};
`;

export const ModalBody = styled.div`
  flex: 1;

  margin: 2rem 0px 0.5rem;

  width: 100%;
`;

export const BackgroundModal = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  filter: blur(50px);

  background: ${({ theme: { pallete } }) =>
    transparentize(0.5, pallete.darker.light)};
`;
