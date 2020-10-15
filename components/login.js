import React, { Component } from 'react';
import { TextInput, View, StyleSheet, Button, Image, Text, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Login extends Component {
    state = {  }
    render() { 
        return (
            <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
                <View style = {styles.imgContainer}>
                    <Image style = {styles.logo} source = {require('../imgs/ss.png')} />
                    
                </View>
                <View >
                    <TextInput style = {styles.input}
                        placeholder = "Username"
                        autoCorrect = {false}
                        textContentType  = "username"
                        returnKeyType = "next"
                        onSubmitEditing = {() => {this.nextInput.focus()}}
                        autoCapitalize = "none"
                    />
                    <TextInput style = { styles.input}
                        placeholder = "Password"
                        autoCorrect = {false}
                        secureTextEntry = {true}
                        textContentType = "password"
                        returnKeyType = "done"
                        ref = {(input) => this.nextInput = input}
                    />
                    <TouchableOpacity style = {styles.buttonContainer}>
                    <Button style = {styles.button} title = 'Login' color="white"/>
                    </TouchableOpacity>
                    <Text style = {styles.text}>
                        New here? <Text style = {styles.linkText} >Sign Up</Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
         );
    }
}
 
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 40
    },
    input: {
        width: 300,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        margin: 5,
        backgroundColor: '#fff'
    },
    buttonContainer: {
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        margin: 5,
        backgroundColor: 'black',
        borderRadius: 5,
        
   },

   text: {
       textAlign: 'center',
       margin: 10
   },
    
   linkText: {
       color: 'red',
       textDecorationLine: 'underline'
   }

   /* Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */
   
})