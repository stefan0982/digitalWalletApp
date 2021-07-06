import React                                   from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES }         from "../../constants";

const Header = () => {
  return (
    <View
      style={ {
        flexDirection : "row",
        marginVertical: SIZES.padding * 2,
      } }
    >
      <View style={ { flex: 1 } }>
        <Text style={ { ...FONTS.h1 } }>Hello !</Text>
        <Text
          style={ {
            ...FONTS.body3,
            color: COLORS.gray,
          } }
        >By Stefan</Text>
      </View>

      <View
        style={ {
          alignItems    : "center",
          justifyContent: "center",
        } }
      >
        <TouchableOpacity
          style={ {
            height         : 40,
            width          : 40,
            justifyContent : "center",
            alignItems     : "center",
            backgroundColor: COLORS.lightGray,
          } }
        >
          <Image
            source={ icons.bell }
            style={ {
              width    : 20,
              height   : 20,
              tintColor: COLORS.secondary,
            } }
          />
          <View
            style={ {
              position       : "absolute",
              top            : -1,
              right          : -1,
              height         : 10,
              width          : 10,
              backgroundColor: COLORS.red,
              borderRadius: 5
            } }
          ></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
