import { ParentCategoryItem } from "@/types/categories";
import React, { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Card } from "react-native-paper";

type Props = {
  item: ParentCategoryItem;
  children?: ReactNode;
  containerStyles?: StyleProp<ViewStyle>;
};

const ProductDetails = () => {
  alert("hello world");

  return (
    <View>
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

export default ProductDetails;
