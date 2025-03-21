import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    input: {
        backgroundColor: 'yellow',
        borderRadius: 5,
        paddingHorizontal: 40,
        marginLeft: 75,
        marginVertical: 7,
        borderColor: 'black',
        borderWidth: 2,
        width: 150,
        height: 40
    },

    containerInput: {
        marginVertical: 10,
    },

    containerButton: {
        backgroundColor: 'green',
        paddingVertical: 15,
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 5,
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textBotton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },

    textBienvenido: {
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20
    },

    img: {
        width: 300,
        height: 300,
        marginTop: 20,
        alignSelf: 'center'
    },
    containerScreen1: {
        position: 'absolute',
        top: '200%',
        left: '20%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: 200,
        height: 100
    }
})