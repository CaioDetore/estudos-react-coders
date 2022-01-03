import React from 'react'
import { View, StyleSheet } from 'react-native'

import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import X, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
    <View style={style.App}>
        <Aleatorio min={1} max={60}/>
        {/* <MinMax min={3} max={20}/>
        <Primeiro />
        <X />
        <Comp1 />
        <Comp2 /> */}
    </View>
)    

const style = StyleSheet.create({
    App: {
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1, 
        padding: 20
    }
})