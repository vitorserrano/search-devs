import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#fff',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  

    logoContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },  

    logoImg: {
        width: 60,
        height: 60,
    },

    logoText: {
        fontSize: 20,
        marginLeft: 4,
    },

    logoTextBold: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 4,
        color: '#F50057',
    },

    route: {
        color: '#F50057',
    },

    main: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchImg: {
        width: 350,
        height: 250,
        marginBottom: 30,
    },

    input: {
        width: 250,
        height: 45,
        backgroundColor: '#f0f0f5',
        textAlign: 'center',
        fontSize: 16,
        borderRadius: 6,
    },

    touchableOpacity: {
        marginTop: 12,
        width: 250,
        height: 45,
        backgroundColor: '#F50057',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },

    touchableOpacityText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }

});

export default styles;