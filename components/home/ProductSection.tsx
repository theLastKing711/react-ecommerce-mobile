import React from "react";
import SectionHeader, { SectionHeaderProps } from "./SectionHeader";
import { IHomeProductItem } from "@/types/home";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";

export type ProductSectionProps = {
  headerProps: SectionHeaderProps;
  data: IHomeProductItem[];
  renderItem: ListRenderItem<IHomeProductItem> | null | undefined;
};

const ProductSection = ({
  headerProps,
  data,
  renderItem,
}: ProductSectionProps) => {
  const theme = useTheme();

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

export default ProductSection;
