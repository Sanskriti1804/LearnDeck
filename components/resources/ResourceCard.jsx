import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, radius, spacing, typography } from "@/constants/theme";

export function ResourceCard({
  title,
  category,
  description,
  initialStatus = "saved",
}) {
    //isSaved - currVal , setIsSaved - fnn to update the val
    //initial val - true
  const [isSaved, setIsSaved] = useState(true);
  const [status, setStatus] = useState(initialStatus);
  const [showDescription, setShowDescription] = useState(false);

  function handleSaveToggle(){
    setIsSaved((currentValue) => !currentValue);
  }
  
  function handleStatusChange() {
    setStatus((currentStatus) => {
      if (currentStatus === "saved") {
        return "in-progress";
      }
      if (currentStatus === "in-progress") {
        return "completed";
      }
      //if status is completed change it back to saved
      return "saved";
    });
  }

  function handleDescriptionToggle() {
    setShowDescription((currentValue) => !currentValue);
  }


  return (
    <View style={styles.card}>
      <View style={styles.header}> 
        <View style={styles.content}>
          
          <Text style={styles.category}> {category} </Text>
          <Text style={styles.title}> {title} </Text>

        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={
            isSaved ? "Remove saved resource" : "Save resource"
          }
          hitSlop={8}
          onPress={handleSaveToggle}
          style={({ pressed }) => [
            styles.saveButton,
            pressed && styles.pressed,
          ]}
        >
          
          <Text style={styles.saveLabel}>
            
            {isSaved ? "Saved" : "Save"}
          </Text>
        </Pressable>
      </View>

      <Pressable
        accessibilityRole="button"
        onPress={handleStatusChange}
        style={({ pressed }) => [
          styles.statusButton,
          pressed && styles.pressed,
        ]}
      > <Text style={styles.statusLabel}>
          Status: {formatStatus(status)}
        </Text>
      </Pressable>

      {showDescription ? (
        <Text style={styles.description}> {description} </Text>
      ) : null}

      <Pressable
        accessibilityRole="button"
        onPress={handleDescriptionToggle}
        style={({ pressed }) => [
          styles.descriptionButton,
          pressed && styles.pressed,
        ]}
      >
        
        <Text style={styles.descriptionButtonText}>
          
          {showDescription ? "Hide notes" : "View notes"}
        </Text>
      </Pressable>
    </View>
  );
}

function formatStatus(status) {
  if (status === "in-progress") {
    return "In Progress";
  }
  if (status === "completed") {
    return "Completed";
  }
  return "Saved";
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: spacing.lg,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: spacing.md,
  },
  content: { flex: 1 },
  category: {
    color: colors.primary,
    fontSize: typography.caption,
    fontWeight: "600",
    marginBottom: spacing.xs,
  },
  title: { color: colors.textPrimary, fontSize: 18, fontWeight: "700" },
  saveButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.round,
    backgroundColor: colors.background,
  },
  saveLabel: { color: colors.primary, fontWeight: "600" },
  statusButton: {
    alignSelf: "flex-start",
    marginTop: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.round,
    backgroundColor: colors.background,
  },
  statusLabel: {
    color: colors.textPrimary,
    fontSize: typography.caption,
    fontWeight: "600",
  },
  description: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 24,
    marginTop: spacing.lg,
  },
  descriptionButton: { alignSelf: "flex-start", marginTop: spacing.md },
  descriptionButtonText: { color: colors.primary, fontWeight: "600" },
  pressed: { opacity: 0.65 },
});
