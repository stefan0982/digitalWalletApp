import React                                   from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { RNCamera }                            from "react-native-camera";
import { COLORS, FONTS, icons, SIZES }         from "../constants";
import Header
                                               from "../components/ScanComponents/Header";
import PaymentMethods
                                               from "../components/ScanComponents/PaymentMethods";
import ScanFocus
                                               from "../components/ScanComponents/ScanFocus";

class Scan
  extends React.Component {

  onBarCodeRead = result => {
    console.log(result.data);
  }

  render() {
    return (
      <View
        style={ {
          flex           : 1,
          backgroundColor: COLORS.transparent,
        } }
      >
        <RNCamera
          ref={ ref => {
            this.camera = ref;
          } }
          style={ { flex: 1 } }
          captureAudio={ false }
          type={ RNCamera.Constants.Type.back }
          flashMode={ RNCamera.Constants.Type.off }
          onBarCodeRead={this.onBarCodeRead}
          androidCameraPermissionOptions={ {
            title         : "Permission to use camera",
            message       : "Camera is required for barcode scanning",
            buttonPositive: "OK",
            buttonNegative: "Cancel",
          } }
        >
          <Header navigation={this.props.navigation}/>
          <PaymentMethods/>
          <ScanFocus/>
        </RNCamera>
      </View>
    );
  }
};

export default Scan;
