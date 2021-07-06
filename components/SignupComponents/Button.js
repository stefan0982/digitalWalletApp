import React                            from "react";
import { COLORS, FONTS, SIZES }         from "../../constants";
import { TouchableOpacity, View, Text } from "react-native";

const Button = ({navigation}) => {

  return (
    <View style={ { margin: SIZES.padding * 3 } }>
      <TouchableOpacity
        style={ {
          height         : 60,
          backgroundColor: COLORS.black,
          borderRadius   : SIZES.radius / 1.5,
          alignItems     : "center",
          justifyContent : "center",
        } }
        onPress={ () =>  navigation.navigate('Home')}
      >
        <Text style={ { color: COLORS.white, ...FONTS.h3 } }>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
