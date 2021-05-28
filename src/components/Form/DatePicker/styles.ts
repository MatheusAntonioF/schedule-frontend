import styled, { css } from 'styled-components';

import ReactDakePicker from 'react-datepicker';
import { darken } from 'polished';

const disabledStyles = css`
  ${({ theme: { pallete } }) => css`
    > label {
      color: ${pallete.darker.light};
    }
  `}
`;

interface IWrapperProps {
  inputWithError: boolean;
  isDisabled?: boolean;
}

export const Container = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  > label {
    color: ${({ theme: { pallete } }) => pallete.text.main};
    margin-bottom: 0.5rem;
  }

  label,
  svg {
    transition: all 200ms ease-in-out;
  }

  ${({ theme: { pallete }, isDisabled }) => css`
    &:focus-within {
      > label {
        color: ${pallete.primary.main};
      }
      svg.icon-input {
        color: ${pallete.primary.main};
      }
    }

    .react-datepicker__navigation--previous {
      border-right-color: ${pallete.primary.main};
    }

    .react-datepicker__navigation--next {
      border-left-color: ${pallete.primary.main};
    }

    .react-datepicker {
      border: 2px solid ${darken(0.5, pallete.darker.main)};
    }

    .react-datepicker,
    .react-datepicker__header,
    .react-datepicker__current-month,
    .react-datepicker__day-name,
    .react-datepicker__day {
      background: ${pallete.darker.main};

      color: ${pallete.text.main};
    }

    .react-datepicker__day:hover {
      background: ${pallete.primary.main};
    }

    .react-datepicker__current-month {
      color: ${pallete.primary.main} !important;
    }

    ${isDisabled && disabledStyles}
  `};
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 10px;

  border-radius: 5px;

  width: 100%;

  border: 2px solid transparent;

  ${({ theme: { pallete } }) => css`
    background: ${pallete.darker.light};
    color: ${pallete.text.main};
    border-color: ${pallete.darker.main};
  `};
`;

export const StyledDatePicker = styled(ReactDakePicker)`
  width: 100%;

  padding-left: 5px;

  outline: 0;
  border: 0;

  ${({ theme: { pallete } }) => css`
    color: ${pallete.text.main};

    background: ${pallete.darker.light};
  `}
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

export const MessageError = styled.span`
  color: ${({ theme: { pallete } }) => pallete.danger.main};
`;
