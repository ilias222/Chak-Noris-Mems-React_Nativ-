import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"

export const Cheked = (props) => {
    const [toggle, setToggle] = useState(true)
    return (
        <View
        style = {StyleUIcheked.cheked}
        >
            <Text
            style = {toggle ? StyleUIcheked.colorTextENGhover : StyleUIcheked.colorTextENG}
            >Eng</Text>
            <Text
            style = {toggle ? StyleUIcheked.traceRUS : StyleUIcheked.traceENG}
            />
            <Text
            style = {toggle ? StyleUIcheked.clickRUS : StyleUIcheked.clickENG}
            onPress = {
                () =>{ 
                    setToggle(!toggle)
                    props.chek()
                }
            }
            />
            <Text
            style = {toggle ? StyleUIcheked.colorTextRUS : StyleUIcheked.colorTextRUShover}
            >Rus</Text>
        </View>
    )
}

const StyleUIcheked = StyleSheet.create({
    cheked:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25,
        marginTop: 20
    },
    colorTextRUS: {
        color: 'lightblue',
        fontSize: 25,
        marginLeft: 20,
        marginRight: 20,
        position: 'absolute',
        left: 220
    },
    colorTextRUShover: {
        color: 'cadetblue',
        fontSize: 25,
        marginLeft: 20,
        marginRight: 20,
        position: 'absolute',
        left: 220
    },
    colorTextENG: {
        color: 'lightblue',
        fontSize: 25,
        marginLeft: 20,
        marginRight: 20,
        position: 'absolute',
        left: 60
    },
    colorTextENGhover: {
        color: 'cadetblue',
        fontSize: 25,
        marginLeft: 20,
        marginRight: 20,
        position: 'absolute',
        left: 60
    },
    traceRUS: {
        backgroundColor: 'lime',
        width: 50,
        height: 40,
        position: 'absolute',
        left: 150
    },
    traceENG: {
        backgroundColor: 'orange',
        width: 50,
        height: 40,
        position: 'absolute',
        left: 150

    },
    clickRUS: {
        backgroundColor: 'lightblue',
        width: 50,
        height: 50,
        borderRadius: 100,
        alignSelf: 'center',
        position: 'absolute',
        top: -5,
        left: 170,
        zIndex: 5,
    },
    clickENG: {
        backgroundColor: 'lightblue',
        width: 50,
        height: 50,
        borderRadius: 100,
        alignSelf: 'center',
        position: 'absolute',
        top: -5,
        left: 130,
        zIndex: 5,
    }
})