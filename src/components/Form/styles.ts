import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > div {
    margin-bottom: 1.2rem;
  }

  div.button-group {
    display: flex;
    align-items: center;
    justify-content: space-around;

    margin-top: 1.6rem;

    width: 100%;
  }
`;
