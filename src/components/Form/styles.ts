import styled from 'styled-components';
import { IFormProps } from '.';

export const StyledForm = styled.form<IFormProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: ${({ width }) => width};

  > div {
    margin-bottom: 1.2rem;
  }

  div.button-group {
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 1.6rem 0rem 1.5rem;

    width: 100%;
  }
`;
