import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "black"
    },
    chakTitle: {
        backgroundColor: "black",
        flex: 1,
        position: 'relative'
    },
    chakImg: { 
        height: 820,
        width: 430,
        marginHorizontal: 5,
    },
    chakTitleImg: {
        textAlign: "center",
        fontSize: 14,
        fontFamily: "monospace",
        padding: 10,
        color: '#ffff',
        backgroundColor: 'black',
        marginTop: 50
    },
    chakAxiosImg: {
        position: "absolute",
        zIndex: 9,
        color: 'black',
        top: 250, 
        left: 30,
        backgroundColor: 'lightcyan'
    },
    chakButton: {
        marginHorizontal: 50,
        marginVertical: 50
    },
    home: {
        color: '#ffff',
        fontFamily: "monospace",
        fontSize: 15,
        fontWeight: '700'
    },
    options: {
        position: 'absolute',
        zIndex: 5,
    },
    buttos: {
        position: 'absolute',
        zIndex: 9,
        top: 590,
        left: 170
    },
    textChak: {
        fontFamily: "monospace",
        fontSize: 18,
        fontWeight: '700',
        letterSpacing: 0,
        lineHeight: 23,
        width: 300,
        margin: 10
    },
    chakAPIkey: {
        position: "absolute",
        top: 70,
        left: 20,
        fontSize: 14,
        fontFamily: "monospace",
        color: 'lightblue',
        width: 400
    },
  });