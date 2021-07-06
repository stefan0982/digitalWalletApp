import React             from "react";
import { Image, View }   from "react-native";
import { images, SIZES } from "../../constants";

const Logo = () => {
  return (
    <View
      style={ {
        marginTop     : SIZES.padding * 5,
        height        : 100,
        alignItems    : "center",
        justifyContent: "center",
      } }
    >
      <Image
        source={ images.wallieLogo }
        resizeMode="contain"
        style={ { width: "60%" } }
      />
    </View>
  );
};

export default Logo;
