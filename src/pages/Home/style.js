import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background-image: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: auto;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const LabelInput = styled.p`
  color: #eee;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px; /* 122.222% */
  letter-spacing: -0.408px;
  padding-left: 24px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 34px;
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  border: none;
  outline: none;
`;
