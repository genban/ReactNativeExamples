import {StyleSheet, Text, View} from "react-native";

const StarStyles = StyleSheet.create({
    navigator: {
        flex: 1,
    },
    listView: {
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#FFFFFF',
    },
    rightContainer: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: '#444444',
    },
    owner: {
        fontSize: 15,
        textAlign: 'left',
        color: '#888888',
    },
    stars: {
        fontSize: 20,
        textAlign: 'right',
        color: '#444444',
    },
    thumbnail: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    touchHighlight: {
        backgroundColor: '#87cefa',
    },
});

export default  StarStyles;