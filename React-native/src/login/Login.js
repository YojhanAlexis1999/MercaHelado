import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ClienteAxios from '../config/ClienteAxios'
import Inicio from '../Imagenes/beer24.jpg'

import FastImage from 'react-native-fast-image'


const Login = () => {

    return (
        <View>
            <FastImage 
                style={{ width: 200, height: 200 }}
                source={require('../Imagenes/inicio.jpg')}
                resizeMode={FastImage.resizeMode.contain}
            />
        </View>

        // valieste veg
    )
}

export default Login