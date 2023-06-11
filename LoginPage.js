import React, {useState, useEffect} from "react";
import{View, Text,Image, StatusBar, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextInputData from './src/image/components/TextInputData';
import LoginButton from "./src/image/components/LoginButton";
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const navigation = useNavigation();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    return (
    <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
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

<LoginButton text="Login" color="#2396F2" navigation={navigation}/>


    </View>
    );
};

export default LoginPage;