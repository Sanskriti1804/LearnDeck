// Initial Screen
import { Alert, Pressable, StyleSheet, Text, View, FlatList } from "react-native";

import {
  AppButton,
  LogoBadge,
  ScreenContainer,
  SectionHeader,
} from "@/components/ui";

import { useState } from "react";
import { ResourceCard } from "@/components/resources/ResourceCard";
import { EmptyLibrary } from "@/components/resources/EmptyLibrary";
import { colors, spacing, typography } from "@/constants/theme";
import { resources } from "@/data/resources";

const categories = [
  "All",
  "Mobile Development",
  "Web Development",
  "Design",
  "Testing"
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredResources = selectedCategory === "All" ? resources : resources.filter(
    (resource) => resource.category === selectedCategory
  );

  function renderResources({item}){
    return (
      <ResourceCard
            key={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
            initialStatus={item.status}
      />
    );
  }

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <SectionHeader
          title="Continue Learning"
          description="All your saved learning resources"
        />

        {/* container for category tabs*/}
        <View style={styles.categories}>
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <Pressable
                key={category}
                onPress={() => {
                  setSelectedCategory(category);
                }}
                style={[
                  styles.categoryChip,
                  isSelected && styles.selectedCategoryChip,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    isSelected && styles.selectedCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <FlatList
        data={filteredResources}  //array to ui
        renderItem={renderResources}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator = {false}
        // apply style to the container inside the flatlist
        contentContainerStyle = {styles.listContent}
        //spacingb/w cards component
        ItemSeparatorComponent={() => (
          <View style = {styles.separator} />
        )}
        ListHeaderComponent={<SectionHeader
        title="Your Library"
        description= "All saved Learning resources"
        />
      }
      // ListEmptyComponent={<EmptyLibrary />}
        />
      </View>
    </ScreenContainer>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: spacing.xxl, gap: spacing.xl },
  categories: { flexDirection: "row", flexWrap: "wrap", gap: spacing.sm },
  categoryChip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  selectedCategoryChip: { backgroundColor: "#4F46E5", borderColor: "#4F46E5" },
  categoryText: { color: "#64748B", fontWeight: "600" },
  selectedCategoryText: { color: "#FFFFFF" },
  list : {
    gap : spacing.lg
  },
  listContent: {
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
  },

  separator: {
    height: spacing.lg,
  },
});

// export default function WelcomeScreen() {
//   function handleStartLearning() {
//     Alert.alert("Welcome to LearnDeck");
//   }

//   return (
//     <ScreenContainer centered>
//       <LogoBadge label="LD" />
//       <Text style={styles.title}>Learn Deck</Text>
//       <Text style={styles.subtitle}>
//         Your personal space to collect, organize, learn and remember.
//       </Text>
//       <AppButton
//         title="Start Learning"
//         accessibilityLabel="Start using LearnDeck"
//         onPress={handleStartLearning}
//         fullWidth
//       />
//     </ScreenContainer>
//   );
// }

// const styles = StyleSheet.create({
//   title: {
//     color: colors.textPrimary,
//     fontSize: typography.title,
//     fontWeight: "700",
//     marginBottom: spacing.md,
//     textAlign: "center",
//   },
//   subtitle: {
//     maxWidth: 320,
//     color: colors.textSecondary,
//     fontSize: typography.body,
//     lineHeight: 24,
//     textAlign: "center",
//     marginBottom: spacing.xxl,
//   },
// });
