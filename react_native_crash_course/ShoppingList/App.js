import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "./components/ListItem";
import Header from "./components/Header";
import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    { id: 0, text: "Milk" },
    { id: 1, text: "Eggs" },
    { id: 2, text: "Bread" },
    { id: 3, text: "Juice" },
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
