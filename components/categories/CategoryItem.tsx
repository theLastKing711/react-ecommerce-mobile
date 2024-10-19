import { ParentCategoryItem } from "@/types/categories";
import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { Card, Text } from "react-native-paper";

type Props = {
  item: ParentCategoryItem;
  children?: ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
};

const CategoryItem = ({
  children,
  item: { id, image_url, name, parent_id },
  containerStyles,
}: Props) => {
  return (
    <View style={containerStyles}>
      <Card>
        <Card.Cover
          // source={{ uri: "https://picsum.photos/400" }}
          source={{
            uri: "https://m.media-amazon.com/images/I/715lTiOeXgL._AC_UL320_.jpg",
          }}
          resizeMode="contain"
        ></Card.Cover>
      </Card>
    </View>
  );
};

export default CategoryItem;
