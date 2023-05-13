import { StyleSheet } from "react-native";

export const prodStyle = StyleSheet.create({
    products: {
        backgroundColor: '#fff',
        flex:1,
        position: 'relative',
        // alignItems: 'center'
    },
    ryoriIcon: {
        flexDirection: 'row',
        left:30
    },
    ryori: {
        width: 40,
        height:50
    },
    ryoriIconText: {
        fontFamily: 'Quicksand-Bold',
        color: '#000',
        fontSize: 27,
        top: 6,
        left: 10
    },
    // SearchBar
    searchbar: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f6f6f8',
        height: 45,
        borderRadius: 5,
        width: 330,
        top: 70,
        left: 30
    },
    searchInput: {
        backgroundColor: '#f6f6f8',
        color: '#000',
        left: 10,
        height: 43,
        borderRadius: 10,
        fontSize: 16,
        width: 280,
        paddingLeft: 8,
        padding: 0,
        fontFamily: 'Quicksand-Medium',
    },
    SearchIcon: {
        left: 10,
        color: '#000'
    },
    //Tables
    Table: {
        position: 'absolute',
        top: 120,
    },
    productTable: {
       margin: 20,
       width: 350,
    },
    porkHeader: {
        color: '#000',
        fontSize: 22,
        fontFamily: 'Quicksand-Bold'
    },
    porklist: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Quicksand-Bold'
    },
    porklistQty: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Quicksand-Bold'
    }

})