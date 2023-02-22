import styled from "styled-components/native";

export const CustomImageStyles = {
  Image: styled.Image<{width: number, height: number}>`
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
  `,
}