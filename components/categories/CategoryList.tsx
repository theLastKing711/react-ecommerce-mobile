import React, { ReactNode } from "react";
import CategoryItem from "./CategoryItem";
import { ParentCategoryItem } from "@/types/categories";
import { View } from "react-native";

interface Props {
  categories: ParentCategoryItem[];
  renderItem: (item: ParentCategoryItem) => ReactNode;
}

const CategoryList = ({ categories, renderItem }: Props) => {
  return <View>{categories.map((category) => renderItem(category))}</View>;
};

export default CategoryList;
