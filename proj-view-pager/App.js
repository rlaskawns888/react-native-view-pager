import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PagerView from 'react-native-pager-view';

const SampleView = () => {
  return (
    <PagerView style={styles.pagerView}>
        <View style={styles.container} key="1">
          <Text>1-Page</Text>
        </View>
        <View style={styles.container} key="2">
          <Text>2-Page</Text>
        </View>
        <View style={styles.container} key="3">
          <Text>3-Page</Text>
        </View>
    </PagerView>
  )
};

export default function App() {
  return (
    <SampleView />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <SampleView />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagerView: {
    flex: 1,
  },
});
