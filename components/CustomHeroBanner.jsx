import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const CustomHeroBanner = ({
  image,
  heading,
  subheading,
  height = 300,
  containerStyle,
  imageStyle,
  overlayStyle,
  headingStyle,
  subheadingStyle,
  textContainerStyle,
}) => {
  return (
    <View style={[styles.container, { height }, containerStyle]}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={[styles.imageStyle, imageStyle]}
      >
        <View style={[styles.overlay, overlayStyle]} />

        <View style={[styles.textContainer, textContainerStyle]}>
          <Text style={[styles.heading, headingStyle]}>
            {heading}
          </Text>
          <Text style={[styles.subheading, subheadingStyle]}>
            {subheading}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CustomHeroBanner;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  imageStyle: {
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  textContainer: {
    paddingHorizontal: 24,
  },
  heading: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginBottom: 8,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  subheading: {
    color: "#f5f5f7",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
  },
});