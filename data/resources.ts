export type Category = "All" | "Mobile" | "Web" | "AI";

export type ResourceStatus = "saved" | "in-progress" | "completed";

export type Resource = {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  status: ResourceStatus;
};

export interface CreateResourceForm{
  title : string,
  description : string,
  category : Exclude<Category, "All">
}

export const categories: Category[] = ["All", "Mobile", "Web", "AI"];

export const resources: Resource[] = [
  {
    id: "1",
    title: "React Native Fundamentals",
    category: "Mobile",
    description:
      "Learn components, props, state, styling and events in React Native.",
    status: "in-progress",
  },
  {
    id: "2",
    title: "JavaScript ES6 Basics",
    category: "Web",
    description:
      "Understand arrow functions, arrays, objects and modern JavaScript.",
    status: "completed",
  },
  {
    id: "3",
    title: "Introduction to Artificial Intelligence",
    category: "AI",
    description:
      "Learn the basic ideas behind artificial intelligence and machine learning.",
    status: "saved",
  },
];
