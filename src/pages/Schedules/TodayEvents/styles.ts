import styled from 'styled-components';

import { Button } from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  padding: 0.5rem;

  background: ${({ theme: { pallete } }) => pallete.darker.light};

  border-radius: 5px;
`;

export const NewEventButton = styled(Button)`
  height: 40px;

  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    transform: scale(1.01);
  }
`;
