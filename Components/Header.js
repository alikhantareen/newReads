import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button } from '@rneui/themed';

const Header = () => {
  return (
    <View style={styles.layout}>
      <TextInput style={styles.input} />
      <Button color="primary">Search</Button>
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
