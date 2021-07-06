import React                                   from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, icons, SIZES }         from "../../constants";

const Header = ({navigation}) => (
  <View
    style={ {
      flexDirection    : "row",
      marginTop        : SIZES.padding * 4,
      paddingHorizontal: SIZES.padding * 3,
    } }
  >
    <TouchableOpacity
      style={ {
        width         : 45,
        alignItems    : "center",
        justifyContent: "center",
      } }
      onPress={ () => navigation.navigate( "Home" ) }
    >
      <Image
        source={ icons.close }
        style={ {
          height   : 20,
          width    : 20,
          tintColor: COLORS.white,
        } }
      />
    </TouchableOpacity>

    <View
      style={ {
        flex          : 1,
        alignItems    : "center",
        justifyContent: "center",
      } }
    >
      <Text style={ { color: COLORS.white, ...FONTS.body3 } }>Scan for
                                                              Payment</Text>
    </View>

    <TouchableOpacity
      style={ {
        height         : 45,
        width          : 45,
        backgroundColor: COLORS.green,
        borderRadius   : 10,
        alignItems     : "center",
        justifyContent : "center",
      } }
      onPress={ () => console.log( "Info" ) }
    >
      <Image source={ icons.info }
             style={ {
               height   : 25,
               width    : 25,
               tintColor: COLORS.white,
             } }/>
    </TouchableOpacity>

  </View>
);

export default Header;
