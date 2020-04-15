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
  },

  backTouchableOpacity: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  descriptionHeader: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: "bold",
  },

  main: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#edf0f2", 
  },

  user: {
    flexDirection: "row",
    alignItems: "center",
  },

  devsName: {
    fontSize: 22,
    fontWeight: "bold",
  },

  devsUser: {
    color: "#666",
  },

  devsBio: {
    marginVertical: 10,
    borderColor: "#edf0f2",
    backgroundColor: "#edf0f2",
    padding: 10,
  },

  devsIconContent: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  devsIconText: {
    marginHorizontal: 10,
  },

  buttonGroup: {
    marginVertical: 20,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#edf0f2",
  },

  buttonText: {
    fontSize: 16,
    marginLeft: 10,
  }
});

export default styles;
