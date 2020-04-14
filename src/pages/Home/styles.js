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
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchImg: {
        width: 250,
        height: 200,
        marginBottom: 20,
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
        marginLeft: 6,
    }

});

export default styles;