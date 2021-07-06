import React                            from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES }         from "../../constants";

const PromoHeader = () => {
  return (
    <View style={{ flexDirection: "row", marginBottom: SIZES.padding }}>
      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.h3 }}>Special Promos</Text>
      </View>
      <TouchableOpacity onPress={() => console.log('view all')}>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PromoHeader;
