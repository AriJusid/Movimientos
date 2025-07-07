import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';

const events = [
  {
    imageUri: 'https://media.istockphoto.com/id/1279483477/es/foto/vamos-a-festejar-como-si-no-hubiera-ma%C3%B1ana.jpg?s=612x612&w=0&k=20&c=w7IMZ3D7o1S3RUA-aYWUwVAsPs1v2X-q4rwrMhJ4S6g=',
    eventName: "Festival Hazemer",
    eventDate: "2 Mayo",
    eventTime: "11 PM",
    eventFullDate: "mayo 2, 2025",
    venue: "Centro Hebreo Ioná",
    priceRange: "$12.000 - $15.000"
  },
  {
    imageUri: 'https://www.argentina.gob.ar/sites/default/files/jbotanicocnm.jpg',
    eventName: "Festival Hazemer",
    eventDate: "13 Junio",
    eventTime: "11 PM",
    eventFullDate: "mayo 2, 2025",
    venue: "Centro Hebreo Ioná",
    priceRange: "$12.000 - $15.000"
  },
];

const EventCard = ({
  onSeeMore
}) => (
    <>
    <View style={styles.headerRow}>
      <Text style={styles.header}>Mis eventos</Text>
    </View>
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {events.map((event, idx) => (
      <View style={styles.card} key={idx}>
        <ImageBackground
          source={{ uri: event.imageUri }}
          style={styles.image}
          imageStyle={styles.imageRadius}
        >
          {/* Date Box */}
          <View style={styles.dateBox}>
            <Text style={styles.dateDay}>{event.eventDate.split(' ')[0]}</Text>
            <Text style={styles.dateMonth}>{event.eventDate.split(' ')[1]}</Text>
          </View>
          {/* Details Overlay */}
          <View style={styles.detailsOverlay}>
            <Text style={styles.eventName}>{event.eventName}</Text>
            <Text style={styles.eventInfo}>
              {event.eventTime} {event.eventFullDate}
            </Text>
            <Text style={styles.eventInfo}>{event.venue}</Text>
            <Text style={styles.price}>{event.priceRange}</Text>
          </View>
        </ImageBackground>
      </View>
    ))}
  </ScrollView>
  </>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    width: 300,
    height: 340,
    backgroundColor: '#222',
    elevation: 3,
    margin: 10,
  },

  header: {
    marginHorizontal: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },

  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: 16,
  },
  dateBox: {
    position: 'absolute',
    top: 18,
    right: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignItems: 'center',
    width: 62,
    zIndex: 2,
    shadowColor: '#000',
    shadowOpacity: 0.13,
    shadowRadius: 6,
    elevation: 2,
  },
  dateDay: {
    fontSize: 22,
    color: '#222',
    fontWeight: 'bold',
    lineHeight: 22,
  },
  dateMonth: {
    fontSize: 14,
    color: '#222',
    fontWeight: '600',
    marginTop: -2,
  },
  detailsOverlay: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.55)',
    height: '40%',
    padding: 18,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  eventName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  eventInfo: {
    color: '#f5f5f5',
    fontSize: 13,
    marginBottom: 2,
  },
  price: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default EventCard;