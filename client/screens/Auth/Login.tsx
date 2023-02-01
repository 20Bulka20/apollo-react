import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { SIGNIN_USER } from './gql';
import { useMutation } from '@apollo/client';
import { fieldNames } from './enumerations';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import { useForm, Controller } from "react-hook-form";
import Logo from '../../assets/images/auth/Logo.png';
import bg from '../../assets/images/auth/bg_auth.png';

const AuthSignIn = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({});

    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
      onCompleted({ signIn }) {
        if (signIn) {
          navigation.navigate("Root")
        }
      },
    });
    if (loading) console.log('loading');
    if (error) return <Text>{error.message}</Text>;

    const onSubmit = handleSubmit(values => {
        signIn({
          variables: {
            email: values[fieldNames.email],
            userName: values[fieldNames.userName]
          },
        });
      });

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <SafeAreaView>
            <Image
              style={{
                width:120,
                height:50,
                resizeMode: 'contain',
              }}
              source={Logo}
            />
            <Text style={styles.title}>Login</Text>
            <Text style={styles.textGray}>Name</Text>
            <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
            <TextInput 
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="enter your name "
            />
            )}
            name="userName"
            />
             {errors.userName && <Text>This is required.</Text>}
            <Text style={styles.textGray}>E-mail</Text>
            <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder="name@exemple.com"
              />
            )}
            name="email"
          />
          {errors.userName && <Text>This is required.</Text>}
            <TouchableOpacity 
                style={styles.buttonSign}
                // onPress={()=>{
                //     navigation.navigate("Root")
                // }}
                onPress={onSubmit}
                >
              <Text style={styles.textColor}>GO!</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.alreadyHave}
            onPress={()=>{
                navigation.navigate("AuthSignUp")
            }}>
              <Text style={styles.alreadyHaveText}>Don’t have an account. Sign up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ImageBackground>
  )
}

export default AuthSignIn;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container:{
        flex:1,
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    title:{
        color: "#FFFFFF",
        marginTop:50,
        width:200,
        lineHeight:50,
        textAlign:'left',
        fontSize: 37,
        fontWeight: "600",
        marginBottom:36,
    },
    orange:{
        marginBottom:80,
        width:25,
        height:5,
        borderRadius:20,
        backgroundColor:"#ffa94e"
    },
    textGray:{
        marginTop:20,
        marginLeft: 14,
        marginBottom:5,
        color: "#9586A8",
        fontWeight: "400",
        fontSize: 16,
    },
    buttonSign:{
        marginTop:70,
        width:'100%',
        borderRadius:20,
        paddingVertical:23,
        alignItems:'center',
        backgroundColor:'#0BCE83',
    },
    textColor:{
        color:'white',
        fontWeight:'700',
        fontSize:16
    },
    grayLine:{
        marginBottom:40,
        backgroundColor: "gray", 
        opacity: 0.16,
        width:'100%',
        height:2,
    },
    input:{
        color: "#7203FF",
        backgroundColor:'#ffffff',
        paddingHorizontal:13,
        borderColor:"#D9D0E3",
        borderWidth: 1,
        borderRadius: 6,
        width:"100%",
        height: 47,
    },
    alreadyHave:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    alreadyHaveText:{
        color: "#D9D0E3",
        fontSize:17,
    }
})