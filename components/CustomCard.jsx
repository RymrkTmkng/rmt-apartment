import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CustomCard = ({
  image,
  heading,
  subheading,
  style,
  imageStyle,
  headingStyle,
  subheadingStyle,
}) => {
  return (
    <View style={[styles.card, style]}>
      {image && (
        <Image source={image} style={[styles.image, imageStyle]} />
      )}

      <View style={styles.textContainer}>
        {heading && (
          <Text style={[styles.heading, headingStyle]}>
            {heading}
          </Text>
        )}

        {subheading && (
          <Text style={[styles.subheading, subheadingStyle]}>
            {subheading}
          </Text>
        )}
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginVertical: 6,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subheading: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});