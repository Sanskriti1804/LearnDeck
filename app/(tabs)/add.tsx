import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";

import {
  useForm,
} from "react-hook-form";

import {zodResolver} from "@hookform/resolvers/zod"

import { resourceSchema, ResourceFormData } from "@/schemas/resourceSchema";
import { FormInput } from "@/components/form/FormInput";
import ThemedScreenContainer  from "@/components/themedUi/ThemedScreenContainer";
import { spacing } from "@/constants/theme";

export default function AddResourceScreen(){
    //create and configure the form
    const{
        //control all form i/p
        control,
        //validates the form and sunmits it
         handleSubmit
         //useForm - manages and handles the form
    } = useForm<ResourceFormData>({
        //zod to validate the form
        resolver : zodResolver(resourceSchema),

        defaultValues : {
            title : "",
            description : "",
            category : "Mobile"
        }
    });

    function onSubmit(
        data : ResourceFormData
    ){
        //prints the submitted form data
        console.log(data);
    }return(
        <ThemedScreenContainer>
            {/* prevents the keyboard from hiding the i/p */}
            <KeyboardAvoidingView
            //on ios move the content upward and android handles it diff
            behavior={
                Platform.OS === "ios" ? "padding" : undefined
            }
            style = {{flex : 1}}
            >
                {/* allows the form to scroll */}
                <ScrollView
                contentContainerStyle = {styles.container}>

                    {/* Title Input */}
                    <FormInput
                    control={control}
                    name="title"
                    label="Title"
                    placeholder="React Native"
                    />

                    {/* Form input */}
                    <FormInput
                    control={control}
                    name="description"
                    label="Description"
                    placeholder="Add Description"
                    multiline
                    />
                </ScrollView>

            </KeyboardAvoidingView>
        </ThemedScreenContainer>
    )
}

const styles = StyleSheet.create({

  // Padding around the form.
  container: {
    padding: spacing.lg,
  },
});