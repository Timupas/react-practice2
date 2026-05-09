import styled from 'styled-components';

export const Item = styled.li`
  padding: 20px;
  background-color: #ffecd2;
  border: 1px solid #f2994a;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 250ms ease;
`;

export const Name = styled.h2`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: #1f1f1f;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  margin-bottom: 8px;
  font-size: 14px;
  color: #434455;

  svg {
    color: #e67e22;
    font-size: 18px;
    flex-shrink: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;