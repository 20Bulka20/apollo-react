import * as React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, FlatList, Image, ScrollView } from 'react-native';
import { RootTabScreenProps } from '../../types';
import Icon from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import categoriesData from '../../data/categoriesData';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView >
     <View style={styles.container}>
      <SafeAreaView >
        <TouchableOpacity>
          <Icon name='left' size={20} />
        </TouchableOpacity>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.searchInput}>
          <TouchableOpacity onPress={()=>{

          }}>
            <Icon name='search1' size={20}/>
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            style={styles.inputText}
          />
        </View>
        <FlatList
           data={categoriesData}
           keyExtractor={item => item.id}
           numColumns={2}
           renderItem={({item: { title, image }})=>(
            <View style={styles.categoriesBlock}>
             <TouchableOpacity>
              <Image
                source={image}
                style={styles.categoriesImage}
              />
              <Text style={styles.categoriesTitle}>{title}</Text>
            </TouchableOpacity>
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
  categoriesBlock:{
    backgroundColor:"#ffffff",
    width: '47%',
    height: 211,
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 12,
  },
  categoriesImage:{
    width: 177,
    height: 140,
  },
  categoriesTitle:{
    marginTop:10,
    fontSize: 18,
    marginLeft: 16,
  }
});
