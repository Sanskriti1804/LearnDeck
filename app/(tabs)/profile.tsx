import { StyleSheet, Text, Image} from "react-native";

import { ScreenContainer, SectionHeader } from "@/components/ui";
import { colors, spacing, typography } from "@/constants/theme";

export default function ProfileScreen() {
  return (
    <ScreenContainer centered>
      <SectionHeader
        title="Profile"
        description="Your LearnDeck account details."
      />
      <Text style={styles.hint}>Profile settings coming soon.</Text>
      <Image source={require("@/assets/images/down.jpg")} style = {styles.image}/>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  hint: {
    marginTop: spacing.md,
    color: colors.textSecondary,
    fontSize: typography.body,
    textAlign: "center",
  },
  image : {
    width : 200,
    height : 200,
    borderRadius : 100,
    resizeMode : "contain"
  }
});
