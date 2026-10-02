import { Text, View, StyleSheet } from "react-native";

{/*
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello  World!</Text>
    </View>
  );
}
*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff'
  },
  titlebar: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10
  }
});

function Titlebar() {
  return (
    <View style={styles.titlebar}>
      <Text>Welcome back, Amy!</Text>
    </View>
  );
}

export default function Index() {
  return (
    <View style={styles.container2}>
      <Titlebar />
    </View>
    );
}