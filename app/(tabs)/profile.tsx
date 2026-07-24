import { StyleSheet, Text, Image} from "react-native";

import ThemedScreenContainer  from "@/components/themedUi/ThemedScreenContainer";

import { SectionHeader } from "@/components/ui";
import { colors, spacing, typography } from "@/constants/theme";
import ProfileCard from "@/components/resources/ProfileCard";

export default function ProfileScreen() {
  return (
    <ThemedScreenContainer centered>
      <SectionHeader
        title="Profile"
        description="Your LearnDeck account details."
      />
      <Text style={styles.hint}>Profile settings coming soon.</Text>
      <ProfileCard></ProfileCard>
      <Image source={require("@/assets/images/down.jpg")} style = {styles.image}/>
    </ThemedScreenContainer>
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
