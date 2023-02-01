import * as React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, FlatList, Image, ScrollView, Button  } from 'react-native';
import { RootTabScreenProps } from '../../types';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import categoriesInfoData from '../../data/categoriesInfoData';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabTwo'>) {
  return (
    <ScrollView >
     <View style={styles.container}>
      <SafeAreaView >
        <TouchableOpacity>
          <Icon name='left' size={20} />
        </TouchableOpacity>
        <Text style={styles.title}>Vegetables</Text>
        <Text style={styles.description}>It may exclude foods derived from some plants that are fruits, flowers, nuts, and cereal grains, but include savoury fruits such as tomatoes and courgettes, flowers such as broccoli, and seeds such as pulses.</Text>
        <FlatList
           data={categoriesInfoData}
           keyExtractor={item => item.id}
           renderItem={({item: { title, image, price }})=>(
            <View style={{ flexDirection:'row', marginBottom: 32 }}>
              <Image
                source={image}
                style={styles.categoriesImage}
              />
              <View> 
                <Text style={styles.titleProduct}>{title}</Text>
                <View style={{ flexDirection:'row', alignItems: "center" }}>
                  <Text style={styles.price}>{price}</Text>
                  <Text style={styles.priceCurrency}>€ / kg</Text>
                </View>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.heartoButton}>
                    <Icon name="hearto" size={25} color="#9586A8"/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.shoppingCartButton}>
                    <Icon name="shoppingcart" size={25} color="#ffffff"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
         />
      </SafeAreaView>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    marginTop: 23,
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  searchInput:{
    backgroundColor: "#ffffff",
    paddingHorizontal: 22,
    width: "100%",
    flexDirection: 'row',
    alignItems: "center",
    height: 48,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#D9D0E3",
    marginBottom: 42,
  },
  inputText:{
    color: "#9586A8",
    fontSize: 17,
    marginLeft: 12,
  },
  description:{
    marginBottom: 30,
    color: "#9586A8",
    fontSize: 16,
    fontWeight: "500",
    shadowColor:"rgba(0, 0, 0, 0.75)",
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  categoriesImage:{
    marginRight: 14,
    borderRadius: 8,
    width: 177,
    height: 128,
  },
  titleProduct:{
    marginBottom: 12,
    color: "#2D0C57",
    fontSize: 18,
    fontWeight: "600",
  },
  price:{
    color: "#2D0C57",
    fontSize: 22,
    marginRight: 2,
  },
  priceCurrency:{
    color: "#9586A8",
    fontSize: 16,
    fontWeight: '500'
  },
  heartoButton:{
    marginRight: 10,
    backgroundColor: "#ffffff",
    paddingHorizontal: 29,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#D9D0E3",
    borderRadius: 12,
  },
  shoppingCartButton:{
    paddingHorizontal: 29,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: "#0BCE83"
  },
  buttonsContainer:{
    flexDirection: "row",
    marginTop: 20
  }
});
