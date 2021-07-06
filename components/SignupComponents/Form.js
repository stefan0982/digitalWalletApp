import React, { useEffect, useState }                     from "react";
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";
import { COLORS, FONTS, icons, images, SIZES }            from "../../constants";
import axios                                              from "axios";
import AreaCodesModal
                                                          from "./AreaCodesModal";

const Form = () => {
  const [showPassword, setShowPassword] = useState( false );

  const [areas, setAreas] = useState( [] );
  const [selectedArea, setSelectedArea] = useState( null );
  const [modalVisible, setModalVisible] = useState( false );

  const [data, setData] = useState( null );

  const getCountries = async () => {
    await axios.get( "https://restcountries.eu/rest/v2/all" ).then(
      response => {
        const areaData = response.data.map( item => (
          {
            code       : item.alpha2Code,
            name       : item.name,
            callingCode: `+${ item.callingCodes[0] }`,
            flag       : `https://www.countryflags.io/${ item.alpha2Code }/flat/64.png`,
          }
        ) );
        setAreas( areaData );

        if (areaData.length > 0) {
          const defaultData = areaData.filter(
            country => country.code === "MD" );

          if (defaultData.length > 0) {
            setSelectedArea( defaultData[0] );
          }
        }

      } );
  };

  useEffect( () => {
    getCountries();
  }, [] );

  return (
    <View
      style={ {
        marginTop       : SIZES.padding * 3,
        marginHorizontal: SIZES.padding * 3,
      } }
    >
      {/*Full Name*/ }
      <View style={ { marginTop: SIZES.padding * 3 } }>
        <Text style={ { color: COLORS.lightGreen, ...FONTS.body3 } }>
          Full Name
        </Text>
        <TextInput
          style={ {
            marginVertical   : SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height           : 40,
            color            : COLORS.white, ...FONTS.body3,
          } }
          placeholder="Enter full name"
          placeholderTextColor={ COLORS.white }
          selectionColor={ COLORS.white }
        />
      </View>

      {/*Phone number*/ }

      <View style={ { marginTop: SIZES.padding * 2 } }>
        <Text style={ { color: COLORS.lightGreen, ...FONTS.body3 } }>
          Phone number
        </Text>

        <View style={ { flexDirection: "row" } }>
          {/*Country Code*/ }
          <TouchableOpacity
            style={ {
              width            : 100,
              height           : 50,
              marginHorizontal : 5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              flexDirection    : "row", ...FONTS.body2,
            } }
            onPress={ () => setModalVisible( true ) }
          >
            <View style={ { justifyContent: "center" } }>
              <Image
                source={ icons.down }
                style={ {
                  width    : 10,
                  height   : 10,
                  tintColor: COLORS.white,
                } }
              />
            </View>
            <View
              style={ {
                justifyContent: "center",
                marginLeft    : 5,
              } }
            >
              <Image
                source={ { uri: selectedArea?.flag } }
                style={ {
                  width : 30,
                  height: 20,
                } }
              />
            </View>

            <View
              style={ {
                justifyContent: "center",
                marginLeft    : 5,
              } }
            >
              <Text style={ { color: COLORS.white, ...FONTS.body3 } }>{ selectedArea?.callingCode }</Text>
            </View>

          </TouchableOpacity>

          {/*Phone Number*/ }

          <TextInput
            style={ {
              flex             : 1,
              marginVertical   : SIZES.padding,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 1,
              height           : 40,
              color            : COLORS.white, ...FONTS.body3,
            } }
            placeholder="Enter phone number"
            placeholderTextColor={ COLORS.white }
            selectionColor={ COLORS.white }
          />
        </View>
      </View>

      {/*Password*/ }

      <View style={ { marginTop: SIZES.padding * 2 } }>
        <Text style={ { color: COLORS.lightGreen, ...FONTS.body3 } }>Password</Text>
        <TextInput
          style={ {
            marginVertical   : SIZES.padding,
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            height           : 40,
            color            : COLORS.white, ...FONTS.body3,
          } }
          placeholder="Enter Password"
          placeholderTextColor={ COLORS.white }
          selectionColor={ COLORS.white }
          secureTextEntry={ showPassword }
        />

        <TouchableOpacity
          style={ {
            position: "absolute",
            right   : 0,
            bottom  : 10,
            height  : 30,
            width   : 30,
          } }
          onPress={ () => setShowPassword( prevState => !prevState ) }
        >
          <Image
            source={ showPassword ? icons.disable_eye : icons.eye }
            style={ {
              height   : 20,
              width    : 20,
              tintColor: COLORS.white,
            } }
          />
        </TouchableOpacity>

      </View>

      <AreaCodesModal
        modalVisible={ modalVisible }
        setModalVisible={ setModalVisible }
        areas={ areas }
        setSelectedArea={ setSelectedArea }
      />
    </View>

  );
};

export default Form;
