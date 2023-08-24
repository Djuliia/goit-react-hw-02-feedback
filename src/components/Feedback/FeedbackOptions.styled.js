import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: 12px;
  padding: 48px;
  background: linear-gradient(to bottom, #5f9ea0, #e0ffff);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  
`;

export const FeedbackBtn = styled.button`
  padding: 12px 32px;
  border-radius: 10px;
  border: 2px solid #fff;
  background-color: #008b8b;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;
  :hover {
    color: #000;
    background-color: #fff;
  }
`;
