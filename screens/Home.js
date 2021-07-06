import React, { useState }          from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { specialPromoData }         from "../components/HomeComponents/specialPromoData";
import Promos                       from "../components/HomeComponents/Promos";
import { featuresData }             from "../components/HomeComponents/featuresData";
import { COLORS }                   from "../constants";

const Home = () => {


  const [features, setFeatures] = useState( featuresData );
  const [specialPromos, setSpecialPromos] = useState( specialPromoData );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Promos specialPromos={specialPromos} features={features}/>
    </SafeAreaView>
  )
};

export default Home;
