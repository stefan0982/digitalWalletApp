import React                                             from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, images, SIZES }                  from "../../constants";
import Header                                            from "./Header";
import Banner                                            from "./Banner";
import Features                                          from "./Features";
import PromoHeader                                       from "./PromoHeader";

const Promos = ({ specialPromos, features }) => {

  const HeaderComponent = () => (
    <View>
      <Header/>
      <Banner/>
      <Features features={features}/>
      <PromoHeader/>
    </View>
  )

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        marginVertical: SIZES.base,
        width: SIZES.width / 2.5
      }}
      onPress={() => console.log(item.title)}
    >
      <View
        style={{
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.primary
        }}
      >
        <Image
          source={images.promoBanner}
          resizeMode="contain"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
          }}
        />
      </View>

      <View
        style={{
          padding: SIZES.padding,
          backgroundColor: COLORS.lightGray,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      >
        <Text style={{ ...FONTS.h4 }}>{item.title}</Text>
        <Text style={{ ...FONTS.body4 }}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList
      ListHeaderComponent={HeaderComponent}
      contentContainerStyle={ { paddingHorizontal: SIZES.padding * 3 } }
      numColumns={ 2 }
      columnWrapperStyle={ { justifyContent: "space-between" } }
      data={ specialPromos }
      keyExtractor={ item => `${ item.id }` }
      renderItem={ renderItem }
      showsVerticalScrollIndicator={ false }
      ListFooterComponent={<View style={{ marginBottom: 80 }}/>}
    />
  );
};

export default Promos;
