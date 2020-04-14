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

  total: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "right",
    color: "#666",
  },

  list: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#f0f0f5",
    padding: 15,
    backgroundColor: "#fdfdfd",
    borderRadius: 4,
    marginBottom: 20,
  },

  listUser: {
    fontSize: 16,
    color: "#666",
    marginLeft: 10,
  },
});

export default styles;
