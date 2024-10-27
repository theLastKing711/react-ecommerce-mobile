import { IHomeProductItem } from "@/types/home";
import React from "react";
import { Card, IconButton, Text, Tooltip } from "react-native-paper";

export type ProductCardProps<T extends IHomeProductItem = IHomeProductItem> = {
  item: IHomeProductItem;
  onFavourite: (id: number) => void;
};

const ProductCard = ({
  item: { id, name, image_url, price, is_favourite },
  onFavourite,
}: ProductCardProps) => {
  const heartIcon = is_favourite ? "heart" : "heart-outline";

  return (
    <Card style={{ width: 180 }}>
      <Card.Cover source={{ uri: "https://picsum.photos/200/300" }} />
      <Card.Title title={name} />
      <Card.Content>
        <Text>{price}$</Text>
      </Card.Content>
      <Card.Actions style={{ flexDirection: "row-reverse" }}>
        <Tooltip title="أضف إلى عربة التسوق">
          <IconButton icon={{ source: "cart-outline", direction: "rtl" }} />
        </Tooltip>
        <Tooltip title="أضف إلى قائمة المفضلة">
          <IconButton
            icon={{ source: heartIcon, direction: "rtl" }}
            onPress={(e) => onFavourite(id)}
          />
        </Tooltip>
      </Card.Actions>
    </Card>
  );
};

export default ProductCard;
