import React                                   from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES }         from "../../constants";

const PaymentMethods = () => {
  return (
    <View
      style={ {
        position            : "absolute",
        bottom              : 0,
        left                : 0,
        right               : 0,
        height              : 220,
        padding             : SIZES.padding * 3,
        borderTopLeftRadius : SIZES.radius,
        borderTopRightRadius: SIZES.radius,
        backgroundColor     : COLORS.white,
      } }
    >
      <Text style={ { ...FONTS.h4 } }>Another payment methods</Text>

      <View
        style={ {
          flex         : 1,
          flexDirection: "row",
          alignItems   : "flex-start",
          marginTop    : SIZES.padding * 2,
        } }
      >
        <TouchableOpacity
          style={ {
            flexDirection: "row",
            alignItems   : "center",
          } }
          onPress={ () => console.log( "phone number" ) }
        >
          <View
            style={ {
              width          : 40,
              height         : 40,
              backgroundColor: COLORS.lightpurple,
              alignItems     : "center",
              justifyContent : "center",
              borderRadius   : 10,
            } }
          >
            <Image
              source={ icons.phone }
              resizeMode="cover"
              style={ {
                height   : 25,
                width    : 25,
                tintColor: COLORS.purple,
              } }
            />
          </View>
          <Text style={ { marginLeft: SIZES.padding, ...FONTS.body4 } }>Phone Number</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ {
            flexDirection: "row",
            alignItems   : "center",
            marginLeft: SIZES.padding * 2
          } }
          onPress={ () => console.log( "Barcode" ) }
        >
          <View
            style={ {
              width          : 40,
              height         : 40,
              backgroundColor: COLORS.lightGreen,
              alignItems     : "center",
              justifyContent : "center",
              borderRadius   : 10,
            } }
          >
            <Image
              source={ icons.barcode }
              resizeMode="cover"
              style={ {
                height   : 25,
                width    : 25,
                tintColor: COLORS.primary,
              } }
            />
          </View>
          <Text style={ { marginLeft: SIZES.padding, ...FONTS.body4 } }>Barcode</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default PaymentMethods;
