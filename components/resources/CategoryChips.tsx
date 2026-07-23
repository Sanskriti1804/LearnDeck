import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

import { colors, radius, spacing } from "@/constants/theme";
import type { Category } from "@/data";

type CategoryChipsProps = {
  categories: Category[];
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
};

export function CategoryChips({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryChipsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => {
        const isSelected = category === selectedCategory;

        return (
          <Pressable
            key={category}
            style={[styles.chip, isSelected && styles.selectedChip]}
            onPress={() => onSelectCategory(category)}
          >
            <Text style={[styles.label, isSelected && styles.selectedLabel]}>
              {category}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
  },
  chip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.round,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedChip: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  label: { color: colors.textSecondary, fontWeight: "600" },
  selectedLabel: { color: colors.textOnPrimary },
});
