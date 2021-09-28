import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Button({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a370f7",
    borderRadius: 7,
    width: 350,
    alignSelf: "center",
    padding: 15,
    alignItems: `center`,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
