import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { StyleSheet, Text, TextInput, View } from "react-native";

import { colors, spacing, typography } from "@/constants/theme";

//Field val - obj containing form data(eg.  title, desc, category)
//props for rsuable form input - component works w any React Hook Form
interface Props<T extends FieldValues> {
  control: Control<T>; //form controller
  name: Path<T>; //name of the field
  label: string; //label shown above the i/p
  placeholder: string;
  multiline?: boolean;
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  multiline = false,
}: Props<T>) {
  return (
    <Controller
      control={control} //connect this i/p to the form
      name={name}
      render={({
        field: { onChange, value },

        //validation state of this field
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <Text style={styles.label}>{label}</Text>
          <TextInput
            placeholder={placeholder}
            value={value}
            multiline={multiline}
            onChangeText={onChange}
            style={[
              styles.input,
              multiline && styles.multiline,
              error && styles.errorInput,
            ]}
          />

          {/* shows validation error only if it exists */}
          {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },

  label: {
    fontSize: typography.body,

    marginBottom: spacing.sm,

    color: colors.textPrimary,

    fontWeight: "600",
  },

  input: {
    borderWidth: 1,

    borderColor: colors.border,

    borderRadius: 12,

    padding: spacing.md,

    backgroundColor: colors.surface,

    color: colors.textPrimary,
  },

  multiline: {
    minHeight: 120,

    textAlignVertical: "top",
  },

  errorInput: {
    borderColor: colors.error,
  },

  error: {
    color: colors.error,

    marginTop: spacing.sm,
  },
});
