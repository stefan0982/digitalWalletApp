import React from "react";
import {
  KeyboardAvoidingView,
  Platform, ScrollView,
  Text,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { COLORS, SIZES, FONTS, icons, images } from "../constants";
import Header                                  from "../components/SignupComponents/Header";
import Logo                                    from "../components/SignupComponents/Logo";
import Form                                    from "../components/SignupComponents/Form";
import Button                                  from "../components/SignupComponents/Button";

const Signup = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={ Platform.OS === "ios" ? "padding" : null }
      style={ { flex: 1 } }
    >
      <LinearGradient
        colors={ [COLORS.lime, COLORS.emerald] }
        style={ { flex: 1 } }
      >
        <ScrollView>
          <Header/>
          <Logo/>
          <Form/>
          <Button navigation={navigation}/>
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default Signup;
