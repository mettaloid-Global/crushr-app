import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://ui-avatars.com/api/?name=User&background=ff1744&color=fff',
        }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Your Profile</Text>

      <Text style={styles.username}>@username</Text>

      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>

        <View style={styles.statBox}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 80,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 20,
  },
  username: {
    color: '#9CA3AF',
    marginTop: 6,
    fontSize: 15,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 30,
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#FF1744',
    fontSize: 22,
    fontWeight: '700',
  },
  statLabel: {
    color: '#9CA3AF',
    marginTop: 4,
  },
});
