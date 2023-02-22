import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { isAndroid } from '../../../../src/constants/platform';
import { CustomStatusBarStyles as Styled } from './custom-status-bar.styles';
import { ICustomStatusBar } from './custom-status-bar.types';

export const CustomStatusBar: FC<ICustomStatusBar> = ({
  background,
  ...props
}) => {
  return isAndroid ? (
    <StatusBar backgroundColor={background} {...props} />
  ) : (
    <Styled.SafeAreaView background={background}>
      <StatusBar backgroundColor={background} {...props} />
    </Styled.SafeAreaView>
  );
};