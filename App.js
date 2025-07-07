import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EventCard from './components/EventCard';
import RecentEvents from './components/RecentEvents';
import { ScrollView } from 'react-native';

const imageUri = 'https://plus.unsplash.com/premium_photo-1710965560034-778eedc929ff?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';


export default function App() {
  return (
    <ScrollView>
    <View style={styles.listMov}>
      <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="mic" size={24} color="#7b4ef7" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ariana grande</Text>
        <Text style={styles.subtitle}>Concierto en obras</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.amount}>-53.95</Text>
        <Text style={styles.date}>Julio 14, 2022</Text>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="mic" size={24} color="#7b4ef7" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Garden Party</Text>
        <Text style={styles.subtitle}>Jardín Botánico</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.amount}>-53.95</Text>
        <Text style={styles.date}>Julio 14, 2022</Text>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="mic" size={24} color="#7b4ef7" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>EA Sport</Text>
        <Text style={styles.subtitle}>Oficinas KRU</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.amount}>-53.95</Text>
        <Text style={styles.date}>Julio 14, 2022</Text>
      </View>
    </View>
      <StatusBar style="auto" />
      <View style={{flex:2, display:'flex'}}>
      <EventCard
      imageUri={imageUri}
      eventName="Festival Hazemer"
      eventDate="2 Mayo"
      eventTime="11 PM"
      eventFullDate="mayo 2, 2025"
      venue="Centro Hebreo Ioná"
      priceRange="$12.000 - $15.000"
    />
      <RecentEvents onSeeMore={() => {/* navigate or handle more events */}} />

    </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listMov:{
    marginTop:200,
  },
  iconContainer: {
    backgroundColor: '#f3f4fd',
    padding: 25,
    width:20,
    height:20,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
  subtitle: {
    fontSize: 13,
    color: '#888',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    color: '#ec4d5f',
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
});
