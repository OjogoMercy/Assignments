import {Text, View ,StatusBar, TextInput,SafeAreaView,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import general from '../Constants/General'
import Button from '../Components/Button'

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={general.container}>
      <Text style={general.down}>Register</Text>
      <View style={{width:'100%',alignItems:'center',marginVertical:30}}>
      <View style={general.inputcontainer}>
        <Text>Full Name</Text>
        <TextInput
        style={general.input}
        placeholder='Enter your Name'
        placeholderTextColor={'gray'}
        />
      </View>
      <View style={general.inputcontainer}>
        <Text>Email</Text>
        <TextInput
        style={general.input}
        placeholder='Enter your Email'
        placeholderTextColor={'gray'}
        />
      </View>
      <View style={general.inputcontainer}>
        <Text>Password</Text>
        <TextInput
        style={general.input}
        placeholder='Enter your Password'
        placeholderTextColor={'gray'}
        />
      </View>
      </View>
      <Button title="Sign Up" onPress={() => navigation.navigate("Verification")}/>
      <View style={{position:'absolute',bottom:20}}>
        <Text style={{textAlign:'center'}}>Already have an Account? <Text style={{color:'#803A32',fontWeight:'bold'}} onPress={() => navigation.navigate('Signin')}>Sign In</Text></Text>
        </View>
    </SafeAreaView>
  )
}

export default Signup
