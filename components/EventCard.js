import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const EventCard = ({
  imageUri,
  eventName,
  eventDate,      // e.g., "2 May"
  eventTime,      // e.g., "11 pm"
  eventFullDate,  // e.g., "mayo 2, 2025"
  venue,
  priceRange,     // e.g., "$12.000 - $15.000"
}) => (
  <View style={styles.card}>
    <ImageBackground
      source={{ uri: imageUri }}
      style={styles.image}
      imageStyle={styles.imageRadius}
    >
      {/* Festival logo overlay */}
      {/* Date Box */}
      <View style={styles.dateBox}>
        <Text style={styles.dateDay}>{eventDate.split(' ')[0]}</Text>
        <Text style={styles.dateMonth}>{eventDate.split(' ')[1]}</Text>
      </View>
      {/* Details Overlay */}
      <View style={styles.detailsOverlay}>
        <Text style={styles.eventName}>{eventName}</Text>
        <Text style={styles.eventInfo}>
          {eventTime} {eventFullDate}
        </Text>
        <Text style={styles.eventInfo}>{venue}</Text>
        <Text style={styles.price}>{priceRange}</Text>
      </View>
    </ImageBackground>
  </View>
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
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: 16,
  },
  logoContainer: {
    position: 'absolute',
    top: 14,
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 2,
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
    height:'40%',
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