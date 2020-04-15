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

  total: {
    marginTop: 15,
    marginBottom: 15,
    textAlign: "right",
    color: "#666",
  },

  list: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#f0f0f5",
    padding: 15,
    backgroundColor: "#fdfdfd",
    borderRadius: 4,
    marginBottom: 20,
  },

  author: {
    flexDirection: "row",
    alignItems: "center",
  },

  authorText: {
    color: "#666",
    marginLeft: 6,
  },

  name: {
    marginTop: 6,
    fontSize: 16,
    color: "#666666",
    fontWeight: "bold",
  },

  description: {
    marginTop: 6,
    lineHeight: 22,
    color: "#666",
  },

  items: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
  },

  itemsContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  itemsText: {
    marginRight: 20,
    color: "#666",
    marginLeft: 4,
  },
});

export default styles;
