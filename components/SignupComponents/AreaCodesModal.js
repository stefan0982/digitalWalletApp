import React             from "react";
import {
  FlatList, Modal, TouchableOpacity, TouchableWithoutFeedback, View, Image, Text
}                               from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const AreaCodesModal = ({
  modalVisible = false,
  setModalVisible,
  setSelectedArea,
  areas
}) => {

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={ {
          padding      : SIZES.padding,
          flexDirection: "row",
        } }
        onPress={() => {
          setModalVisible(false)
          setSelectedArea(item)
        }}
      >
        <Image source={{ uri: item.flag } } style={{ width: 30, height: 30, marginRight: 10} } />
        <Text style={{ ...FONTS.body4 } }>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={ true }
      visible={ modalVisible }
    >
      <TouchableWithoutFeedback onPress={ () => setModalVisible( false ) }>
        <View
          style={ {
            flex          : 1,
            alignItems    : "center",
            justifyContent: "center",
          } }
        >
          <View
            style={ {
              height         : 400,
              width          : SIZES.width * 0.8,
              backgroundColor: COLORS.lightGreen,
              borderRadius   : SIZES.radius,
            } }
          >
            <FlatList
              data={ areas }
              renderItem={ renderItem }
              keyExtractor={ item => item.code }
              showsVerticalScrollIndicator={ false }
              style={ {
                padding     : SIZES.padding * 2,
                marginBottom: SIZES.padding * 2,
              } }
            />

          </View>
        </View>
      </TouchableWithoutFeedback>

    </Modal>
  );
};

export default AreaCodesModal;
