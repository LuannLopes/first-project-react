import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  border-radius: 14px;
  background: ${(props) =>
    props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  line-height: 28px; /* 164.706% */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;
  border: ${(props) => (props.isBack ? "1px solid #fff" : "none")};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  ${(props) =>
    props.isBack &&
    `
  img {
    transform: scaleX(-1);
  }
  `}
`;
