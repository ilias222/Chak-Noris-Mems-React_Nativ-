import { useState } from "react";
import { StyleSheet, Text } from "react-native";

export const Buttos = (props) => {
  const [toggle, setToggle] = useState(true)
   return(
     <Text
      type="button"
      onPress={ () => {
        props.press()
        setToggle(false)
        setTimeout(() => setToggle(true), 100)
      }}
     style= {toggle ? StylesUI.chakButton : StylesUI.chakButtonHover}  
     >
      {props.children}
     </Text>
   )
}

let StylesUI = StyleSheet.create({
    chakButton: {
        fontSize: 36,
        color: 'darkcyan',
        textAlign: 'center',
        width: 150,
        alignSelf: 'center',
        backgroundColor: 'black',
        opacity: 10
      },
    chakButtonHover: {
      fontSize: 36,
      color: 'steelblue',
      textAlign: 'center',
      width: 150,
      alignSelf: 'center'
    }
})