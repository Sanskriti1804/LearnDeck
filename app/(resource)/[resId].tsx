import {
  StyleSheet,
  Text,
  View,
} from "react-native";

//used to read values from the current route(URL parameters)
import { useLocalSearchParams } from "expo-router";

import { resources } from "@/data";

import { colors, spacing, typography } from "@/constants/theme";

export default function ResourceDetailScreen(){
    //{id} in {} - bc useLocalSearchParams return object
    const {id} = useLocalSearchParams<{
        id : string
    }>();

    const resource = resources.find(
        (item) => item.id === id
    );

    if(!resource){
        return (
            <View style = {styles.container}>
                <Text>Resource not found!</Text>
            </View>
        );
    }

    return(
        <View style = {styles.container}>
                <Text style = {styles.title}>{resource.title}</Text>
                <Text style = {styles.category}> {resource.category}</Text>
                <Text style = {styles.description}> {resource.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: spacing.xl,
    backgroundColor:
      colors.background,
  },

  title: {
    fontSize:
      typography.heading,
    fontWeight: "700",
    color: colors.textPrimary,
  },

  category: {
    marginTop: spacing.md,
    color: colors.primary,
    fontWeight: "600",
  },

  description: {
    marginTop: spacing.lg,
    color:
      colors.textSecondary,
    lineHeight: 24,
  },
});