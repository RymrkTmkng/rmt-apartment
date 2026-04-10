import { Image } from "react-native";

function CustomImage({
  source,
  alt,
  style,
  resizeMode = "cover",
  onLoad,
  onError,
  ...props
}) {
  return (
    <Image
      source={source}
      style={[{ width: 100, height: 100 }, style]}
      resizeMode={resizeMode}
      accessibilityLabel={alt}
      accessible={true}
      onLoad={onLoad}
      onError={onError}
      {...props}
    />
  );
}

export default CustomImage;