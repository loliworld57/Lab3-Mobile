import { StyleSheet } from "react-native";

export default function Styles() {
  return StyleSheet.create({
    center: { flex: 1, justifyContent: "center", alignItems: "center" },
    card: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 10,
      marginBottom: 10,
      padding: 10,
      elevation: 3,
    },
    image: { width: 80, height: 80, borderRadius: 8, marginRight: 10 },
    info: { flex: 1, justifyContent: "center" },
    title: { fontSize: 16, fontWeight: "bold" },
    desc: { color: "#555", fontSize: 13 },
    price: { marginTop: 5, fontWeight: "bold", color: "#007bff" },
  });
}
