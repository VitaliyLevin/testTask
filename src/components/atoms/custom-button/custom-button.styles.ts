import styled from "styled-components/native";

type TProps = {
  width: number,
  height: number,
  color?: string,
}

export const CustomButtomStyles = {
  Wrapper: styled.TouchableOpacity<TProps>`
    justify-content: center;
    align-items: center;
    background-color: green;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background-color: ${({ color }) => color};
  `,
  Text: styled.Text<{textColor: string}>`
    color: ${({ textColor }) => textColor};
  `,
}