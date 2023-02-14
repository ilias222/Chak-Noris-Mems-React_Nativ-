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
        flex: 1
    },
    chakImg: { 
        width: 350,
        height: 350,
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
        zIndex: 1,
        color: 'black',
        top: 240, 
        left: 30,
        fontFamily: "monospace",
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: -1,
        width: 300
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
    }
  });