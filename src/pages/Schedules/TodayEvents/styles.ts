import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

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

export const ListEvents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  margin-top: 1rem;

  overflow-y: visible;
  overflow-x: hidden;

  padding: 0px 0.5rem;

  & > div {
    margin-top: 1rem;
  }
`;

export const Event = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  padding: 0.5rem 0.8rem;

  border-radius: 5px;

  transition: all 250ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  span.name {
    font-size: 1rem;
  }

  span.description {
    font-size: 0.8rem;

    max-width: 239px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${({ backgroundColor, theme: { pallete } }) => css`
    background-color: ${transparentize(0.7, backgroundColor)};

    color: ${pallete.text.main};
  `}
`;

export const ListTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 100%;

  margin-top: 1.5rem;

  & > div {
    margin: 0.5rem 0px 0px 0.2rem;
  }
`;

export const Tag = styled.div<{ backgroundColor: string }>`
  font-size: 0.8rem;
  font-weight: bold;

  padding: 0.1rem 0.6rem;

  border-radius: 50px;

  transition: all 250ms ease-in-out;

  &:hover {
    transform: translateX(10px);
  }

  ${({ backgroundColor }) => css`
    background-color: ${transparentize(0.3, backgroundColor)};
  `}
`;
