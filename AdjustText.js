import {
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import React from 'react';

export default AdjustText = (props) => {
  const { children, style } = props;
  const fontSize = StyleSheet.flatten(style).fontSize?StyleSheet.flatten(style).fontSize:14;
  const lineHeightInherit = StyleSheet.flatten(style).lineHeight?StyleSheet.flatten(style).lineHeight:fontSize;
  const paddingTopInherit = StyleSheet.flatten(style).paddingTop?StyleSheet.flatten(style).paddingTop:0;
  const paddingVerticalInherit = StyleSheet.flatten(style).paddingVertical?StyleSheet.flatten(style).paddingVertical:0;
  const paddingTop =  paddingTopInherit+paddingVerticalInherit+7+(fontSize-16)*0.5;
  const lineHeight = lineHeightInherit-9-(fontSize-16)*0.63
  const androidLineHeight = lineHeightInherit?lineHeightInherit+1:0;
  const marginVetricalInherit = StyleSheet.flatten(style).marginVertical?StyleSheet.flatten(style).marginVertical:0;
  const marginBottomInherit = StyleSheet.flatten(style).marginBottom?StyleSheet.flatten(style).marginBottom:0;
  const marginBottom = marginBottomInherit+marginVetricalInherit-4-(fontSize-16)*0.5
  const transformInherit = StyleSheet.flatten(style).transform?StyleSheet.flatten(style).transform:[];
  const y = 1.5;
  const letterStyles = [
    style,
    { fontFamily: "HiraKakuPro-W3",transform:[...transformInherit,{translateY:y}],fontSize:fontSize*0.9,marginBottom:marginBottom,lineHeight:lineHeight,paddingTop:paddingTop}
  ];
  const androidStyles = androidLineHeight?[
    style,{lineHeight:androidLineHeight}
  ]:style;
  if(Platform.OS=="ios"){
    return <Text {...props} allowFontScaling={false} style={letterStyles}>{children}</Text>;
  }else{
    return <Text {...props} style={androidStyles}>{children}</Text>;
  }
};

