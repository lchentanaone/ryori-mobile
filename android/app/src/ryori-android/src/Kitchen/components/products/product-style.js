import { StyleSheet } from "react-native";

export const prodStyle = StyleSheet.create({
    products: {
        backgroundColor: '#fff',
        flex:1,
        position: 'relative',
        paddingHorizontal: 40,
    },
    productContent: {
        top: 50,
        alignItems: 'center'
    },
    ryoriIcon: {
        flexDirection: 'row',
        left:0,
        position: 'absolute'
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
        width: '100%',
        top: 70,
        // left: 30
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
        width: '100%',
       
    },
    productTable: {
       width: '100%',
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