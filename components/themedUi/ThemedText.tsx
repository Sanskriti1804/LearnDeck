import { Text, TextProps, StyleSheet } from "react-native";
import { colors, typography } from "@/constants/theme";

type ThemedTextProps = TextProps;

export default function ThemedText({
  style,
  children,
  ...props
}: ThemedTextProps) {
  return (
    <Text
      style={[styles.text, style]}
      {...props}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "green",
    fontSize: typography.heading,

  },
});