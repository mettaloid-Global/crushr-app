import { View, Text, StyleSheet } from 'react-native';

export default function DMsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Direct Messages</Text>
      <Text style={styles.subtitle}>
        Your private conversations will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#9CA3AF',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
