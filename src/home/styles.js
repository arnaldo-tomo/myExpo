import { StyleSheet } from "react-native";
export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  Click: {
    backgroundColor: "#F9F9F9",
    width: "90%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    shadowColor: "black",
    shadowOpacity: 20,
    shadowRadius: 20,
    marginBottom: 12,
    marginTop: 4,
    elevation: 2,
  },
  Card: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  text: {
    marginRight: 6,
    padding: 12,
    fontSize: 16,
    fontWeight: "700",
    // color: "#0095f6",
  },
});
