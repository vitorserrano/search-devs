import { StyleSheet } from "react-native";
import Constants from "expo-constants";

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
    width: 50,
    height: 50,
  },

  logoText: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },

  main: {
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
  },

  searchImg: {
    width: 250,
    height: 200,
    marginBottom: 20,
  },

  input: {
    width: 250,
    height: 50,
    backgroundColor: "#e7efff",
    borderWidth: 1,
    borderColor: '#f0f0f5',
    textAlign: "center",
    fontSize: 16,
    borderRadius: 6,
  },

  touchableOpacity: {
    marginTop: 12,
    width: 250,
    height: 50,
    backgroundColor: "#0061ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },

  touchableOpacityText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default styles;
