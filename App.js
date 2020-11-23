import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrease = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  return (
    <View style={styles.container}>
      <Text onPress={() => increase()}>+</Text>
      <Text style={styles.text}>Caddy {count}</Text>
      <Text onPress={() => decrease()}>-</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
  },
});
