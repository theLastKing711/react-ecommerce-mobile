import { IHomeProductItem } from "@/types/home";
import React from "react";
import { Image, ImageBackground, View } from "react-native";
import { Card, IconButton, Text, Tooltip } from "react-native-paper";

const PlaceholderImage = require("../../assets/images/buffalo-image.jpeg");

export type ProductCardProps<T extends IHomeProductItem = IHomeProductItem> = {
  item: IHomeProductItem;
  onFavourite: (id: number) => void;
};

const ProductCardItem = ({
  item: { id, name, image_url, price, is_favourite },
  onFavourite,
}: ProductCardProps) => {
  const heartIcon = is_favourite ? "heart" : "heart-outline";

  //Card.Cover is relative container of type div with styles below applied to it
  //inside it is a div with background-image: url($source_uri) which is position absolute with inset:0(left, right, bottom)
  //with  background color rgba(238,238,238,1.00) -> is gray
  // inside it is a img with width 100% and height 100% which may not be used by web or mobile

  return (
    <View>
      <Card>
        <View style={{ flexDirection: "row" }}>
          {/* <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexBasis: 200,
            }}
          > */}
          <View
            style={{
              // backgroundColor: "rgba(238,238,238,1.00)",
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <Card.Cover
              source={{
                // uri: "https://res.cloudinary.com/dkmsfsa7c/image/upload/v1729835680/hgtnnjr2ro3htola5zpo.jpg",
                uri: "https://res.cloudinary.com/dkmsfsa7c/image/upload/v1729937275/m6jmum4vu9nqqqevdqck.jpg", //5.2kb
              }}
              // source={{
              //   uri: PlaceholderImage,
              // }}
              // resizeMode="center"
              style={{
                width: 90,
                height: 90,
                backgroundColor: "white",
                // height: "100%",
                // maxHeight: 400,
              }}
              resizeMode="contain"
            />
          </View>
          {/* </View> */}
          {/* <Image
            style={{ width: 150 }}
            source={{
              uri: "https://res.cloudinary.com/dkmsfsa7c/image/upload/v1729835680/hgtnnjr2ro3htola5zpo.jpg",
            }}
            resizeMode="center"
          /> */}
          <View>
            <Card.Title title={name} />
            <Card.Content>
              <Text>{price}$</Text>
            </Card.Content>
            <Card.Actions style={{ flexDirection: "row-reverse" }}>
              <Tooltip title="أضف إلى عربة التسوق">
                <IconButton
                  icon={{ source: "cart-outline", direction: "rtl" }}
                />
              </Tooltip>
              <Tooltip title="أضف إلى قائمة المفضلة">
                <IconButton
                  icon={{ source: heartIcon, direction: "rtl" }}
                  onPress={(e) => onFavourite(id)}
                />
              </Tooltip>
            </Card.Actions>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default ProductCardItem;
