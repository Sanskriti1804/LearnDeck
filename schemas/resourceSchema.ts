import {z} from "zod";

//validate schema - defines the expected struct of the form data
export const resourceSchema = z.object({
    title : z
    .string()
    .min(3, "Title is too short"),

    description : z
    .string()
    .min(10, "Description is too short"),

    category : z
    .enum([
        "Mobile", "Web", "AI"
    ]),
});

//create a  ts type of resourceSchema
export type ResourceFormData = z.infer<typeof resourceSchema>