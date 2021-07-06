import React           from "react";
import { Image, View } from "react-native";
import { images }      from "../../constants";

const ScanFocus = () => {
  return (
    <View
      style={ {
        flex          : 1,
        alignItems    : "center",
        justifyContent: "center",
      } }
    >

      <Image
        source={ images.focus }
        resizeMode="stretch"
        style={ {
          marginTop: "-55%",
          width    : 200,
          height   : 300,
        } }
      />

    </View>
  );
};

export default ScanFocus;
