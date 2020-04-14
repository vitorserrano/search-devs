import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#fff",
      },
    
      header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    
      backTouchableOpacity: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
    
      logoContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    
      logoImg: {
        width: 45,
        height: 45,
      },
    
      logoText: {
        fontSize: 18,
        marginLeft: 4,
      },
    
      logoTextBold: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 4,
        color: "#F50057",
      },
    
      routeText: {
        color: "#F50057",
        marginLeft: 8,
        fontSize: 12,
      },

    main: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    user: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f0f0f5',
        backgroundColor: '#fdfdfd',
        padding: 20,
    },

    devsName: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    devsUser: {
        color: '#666',
    },

    devsBio: {
        alignSelf: 'stretch',
        marginTop: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#f0f0f5',
        backgroundColor: '#fdfdfd',
        padding: 20,
    },

    devsIconContent: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    devsIconText: {
        marginLeft: 6,
    },

    buttonsGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 20,
        paddingHorizontal: 30,
        borderWidth: 1,
        borderColor: '#f0f0f5',
        backgroundColor: '#fdfdfd',
    },

    buttonContent: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    buttonCirle: {
        borderWidth: 1,
        borderColor: "#F50057",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonInfo: {
        marginTop: 10,
        color: '#666',
    }

});

export default styles;