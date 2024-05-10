import React from "react";
import { Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from "@react-native-masked-view/masked-view";

const GradientText = (props) => {
  return (
    <MaskedView maskElement={<Text {...props} />} style={{width: '100%'}}>
      <LinearGradient
        colors={['#0FE687', '#1ABBD5']}
        start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 0.5 }}
      >
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
