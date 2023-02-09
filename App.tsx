/**
 *  Landing page - iOS Todo List App
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
    padding: 10,
  },
  heading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});

export default App;
