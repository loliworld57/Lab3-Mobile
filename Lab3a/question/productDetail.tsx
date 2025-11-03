import { StyleSheet } from "react-native";

export default function Styles() {
  return StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 10,
      marginBottom: 10,
      padding: 10,
      elevation: 3,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 8,
      marginRight: 10,
    },
    info: {
      flex: 1,
      justifyContent: "center",
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
    desc: {
      color: "#555",
      fontSize: 13,
      marginBottom: 5,
    },
    price: {
      marginTop: 5,
      fontWeight: "bold",
      color: "#007bff",
    },
    buttonRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    btn: {
      flex: 1,
      paddingVertical: 6,
      marginHorizontal: 3,
      borderRadius: 6,
      alignItems: "center",
    },
    btnDetail: { backgroundColor: "#007bff" },
    btnAdd: { backgroundColor: "#28a745" },
    btnDelete: { backgroundColor: "#dc3545" },
    btnText: {
      color: "#ffffffff",
      fontWeight: "bold",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.4)",
      padding: 20,
    },
    input: {
      width: "100%",
      backgroundColor: "#f9f9f9",
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginVertical: 5,
      fontSize: 14,
    },
    placeholderText: {
      color: "#aaa",
    },
  });
}
