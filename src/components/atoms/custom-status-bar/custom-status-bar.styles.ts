import styled from "styled-components/native";

export const CustomStatusBarStyles = {
  SafeAreaView: styled.SafeAreaView<{ background?: string }>`
    background-color: ${({ background }) =>
      background ? background : 'white'};
  `,
};