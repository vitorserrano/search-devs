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

    routeContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    routeTouchableOpacity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    routeText: {
        color: '#F50057',
        marginLeft: 8,
    },

    main: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    devImg: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#f0f0f5',
        marginBottom: 20,
    },

    devsName: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    devsUser: {
        color: '#666',
    },

    devsBio: {
        marginTop: 18,
        marginHorizontal: 10,
        textAlign: 'center',
    },

    devsLocationContent: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    devsLocationText: {
        marginLeft: 6,
    }    

});

export default styles;