import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import '@formatjs/intl-getcanonicallocales/polyfill'
import '@formatjs/intl-pluralrules/polyfill'
import '@formatjs/intl-pluralrules/dist/locale-data/ja'
import '@formatjs/intl-numberformat/polyfill'
import '@formatjs/intl-numberformat/dist/locale-data/ja'
import '@formatjs/intl-datetimeformat/polyfill'
import '@formatjs/intl-datetimeformat/dist/locale-data/ja'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{new Intl.DateTimeFormat('ja', {
      weekday: 'long',
      era: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZone: 'UTC',
      timeZoneName: 'long',
    }).format(Date.now())}</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
