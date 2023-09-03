import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

const Header = ({ props }) => {
  const [category, setCategory] = useState("");
  function validation() {
    if (!category) {
      alert("Please enter category.");
      setCategory("");
      return;
    } else if (category === " " || category === "") {
      alert("Please enter category.");
      setCategory("");
      return;
    } else {
      props.navigate("NewsByCategory", {
        news: category,
        navigation: props,
      });
    }
  }
  return (
    <View style={styles.layout}>
      <TextInput
        onChangeText={setCategory}
        style={styles.input}
        placeholder="Search by category..."
      />
      <Button onPress={validation} title="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    padding: 10,
    gap: 10,
    flexDirection: "row",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    flex: 2,
  },
});

export default Header;
