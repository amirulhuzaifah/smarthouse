import React, {useState} from "react";
import{View, Text,Image, StatusBar, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextInputData from './src/image/components/TextInputData';
import LoginButton from "./src/image/components/LoginButton";
import { signInWithEmailAndPassword  } from "@firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { auth } from "./src/image/components/firebase";


const LoginPage = () => {
    const navigation = useNavigation();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            console.log("Logged in user:", user);
            navigation.navigate("Home"); // Navigate to the home page
          })
          .catch((error) => {
            // Handle login error
            const errorMessage = error.message;
            Alert.alert("Login Error", errorMessage);
          });
      };
    return (
    <ScrollView style={{flex:1, backgroundColor:'#FFFFFF'}}>
        <StatusBar backgroundColor={'#FFFFFF'}/>
        <View
        style={{
            justifyContent:"center",
            alignItems:'center',
            marginTop: 70,
        }}>
            <Image
            style={{width:200, height: 200}}
            source={require('./src/image/house.png')}/>

            <Text style={{
                fontSize:25,
                fontWeight:'bold',
            }}>
                Smart
            <Text style={{
                color:'#43C6DB',
            }}>Home
            </Text>
            <Icon name="home"size={30} color="#15317E" />
            </Text>
            <Text style={{
                marginTop:50,
                fontWeight:"bold",
                fontSize:20
            }}>
                Login
            </Text>

        </View>
        <TextInputData
            state={email} 
            set={setEmail} 
            placeholder="Insert Email"
            isPassword={false}
            icon="envelope"
            />

         <TextInputData
            state={password} 
            set={setPassword} 
            placeholder="Insert Password"
            isPassword={true}
            icon="lock"
            />

<LoginButton text="Login" color="#2396F2" onPress={handleLogin}/>


    </ScrollView>
    );

};

export default LoginPage;