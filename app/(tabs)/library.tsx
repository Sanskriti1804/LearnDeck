import { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import {
  CategoryChips,
  EmptyLibrary,
  ResourceCard,
} from "@/components/resources";
import {  SectionHeader } from "@/components/ui";
import ThemedScreenContainer  from "@/components/themedUi/ThemedScreenContainer";
import { spacing } from "@/constants/theme";
import { resources, type Category, type Resource } from "@/data";

const categories: Category[] = ["All", "Mobile", "Web", "AI"];

export default function LibraryScreen() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredResources = useMemo(() => {
    if (selectedCategory === "All") {
      return resources;
    }

    return resources.filter(
      (resource) => resource.category === selectedCategory,
    );
  }, [selectedCategory]);

  const totalResources = filteredResources.length;

  function renderItem({ item }: { item: Resource }) {
    return (
      <ResourceCard
        id={item.id}
        title={item.title}
        category={item.category}
        description={item.description}
        initialStatus={item.status}
      />
    );
  }

  return (
    <ThemedScreenContainer>
      <View style={styles.container}>
        <SectionHeader
          title="Your Library"
          description= {`${totalResources} Resources Available`}
        />

        <CategoryChips
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <FlatList
          data={filteredResources}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={<EmptyLibrary category={selectedCategory} />}
        />
      </View>
    </ThemedScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: spacing.xxl, gap: spacing.xl },
  listContent: {
    flexGrow: 1,
    paddingBottom: spacing.xxl,
  },
  separator: {
    height: spacing.lg,
  },
});
