import React from "react";
import SectionHeader, { SectionHeaderProps } from "./SectionHeader";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import { IHomeCategoryItem } from "@/types/home";

export type CategoryFilterSectionProps = {
  headerProps: SectionHeaderProps;
  data: IHomeCategoryItem[];
  renderItem: ListRenderItem<IHomeCategoryItem> | null | undefined;
};

const CategoryFilterSection = ({
  headerProps,
  data,
  renderItem,
}: CategoryFilterSectionProps) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
    },
    categoryListConatiner: {
      alignItems: "flex-start",
      paddingStart: 15,
      gap: 10,
    },
  });

  return (
    <View style={styles.container}>
      <SectionHeader {...headerProps} />
      <FlatList
        horizontal={true}
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.categoryListConatiner}
        style={{
          flexGrow: 0,
        }}
      />
    </View>
  );
};

export default CategoryFilterSection;
