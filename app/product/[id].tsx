import { useGetProductDetails } from "@/hooks/api/products/Queries/useGetProductDetails";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { ReactNode } from "react";
import { View } from "react-native";

const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  //   const { data, isLoading } = useGetProductDetails(id);

  //   console.log("data", data);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            //width 700 with 'crop' => 'pad'
            uri: "https://res.cloudinary.com/dkmsfsa7c/image/upload/c_pad,h_700,w_700/v1730122453/msiejguluyejm9xnlbwj.jpg",
            // 700 width
            // uri: "http://res.cloudinary.com/dkmsfsa7c/image/upload/w_700/v1730034763/luszz0nouyp1hev6iczs.jpg",
          }}
          style={{
            width: "100%",
            maxWidth: 700, // width of the image, can be disorted if we set it greater than this value
            aspectRatio: "1/1", // or use paddingVertical 50%(in web we can use paddingTop 100%)
            resizeMode: "contain",
            backgroundColor: "white",
          }}
        />
      </View>
    </View>
  );
};

export default ProductDetails;
