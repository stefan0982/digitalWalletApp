import React                       from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { COLORS, FONTS, icons, SIZES }   from "../../constants";

const Header = () => {
  return (
    <TouchableOpacity
      style={ {
        flexDirection    : "row",
        alignItems       : "center",
        marginTop        : SIZES.padding * 4,
        paddingHorizontal: SIZES.padding * 2,
      } }
      onPress={ () => console.log( "signup" ) }
    >
      <Image
        source={ icons.back }
        resizeMode="contain"
        style={ {
          width    : 20,
          height   : 20,
          tintColor: COLORS.white,
        } }
      />
      <Text style={{
        marginLeft: SIZES.padding * 1.5,
        color: COLORS.white,
        ...FONTS.h4
      } }>
        Sign up
      </Text>
    </TouchableOpacity>
  );
};

export default Header;
