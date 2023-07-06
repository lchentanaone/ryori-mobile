import {StyleSheet} from 'react-native';


export const Styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        borderStyle: 'solid',
        padding: 10
    },
    btn: {
        borderRadius: 10,
        backgroundColor: 'blue',
        flex: 1,        
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        minWidth:50
    },
    btnPrimary: {
        backgroundColor: '#4285F4'
    },
    btnSecondary: {
        backgroundColor: '#B1B1B1'
    },
    btnTertiary: {
        backgroundColor: '#12BF38'
    },
    btnWarning: {
        backgroundColor: '#DB1B1B'
    },    
    btnInfo: {
        backgroundColor: '#EADB54'
    },
    btnText: {
        textAlign:'center',
        color: '#fff'
    },
    verContainer: {
        flexDirection:'column', justifyContent: 'space-between',
        gap: 10
    },
    horContainer: {
        flexDirection:'row', justifyContent: 'space-between',
        gap: 10
    },
})