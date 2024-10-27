import ProductCardItem from "@/components/shared/ProductCardItem";
import { useFavouriteProduct } from "@/hooks/api/products/Mutations/useFavouriteProduct";
import { useGetFavouriteProducts } from "@/hooks/api/products/Queries/useGetFavouriteProducts";
import { FavouriteProductItem } from "@/types/products";
import { Link } from "expo-router";
import React from "react";
import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import { ActivityIndicator, useTheme } from "react-native-paper";

const FavouriteProducts = () => {
  const theme = useTheme();

  const { data, isLoading, fetchNextPage } = useGetFavouriteProducts();

  const { mutation: favouriteProduct } = useFavouriteProduct();

  //   console.log("data in component", data);

  const renderProduct:
    | ListRenderItem<FavouriteProductItem>
    | null
    | undefined = ({ item }) => (
    <Link href={`/product/${item.id}`}>
      <ProductCardItem
        key={item.id}
        item={item}
        onFavourite={favouriteProduct}
      />
    </Link>
  );

  console.log("data", data);

  const favouriteProducts = data?.pages?.flatMap((item) => item.data) || [];

  const loadingComponent = isLoading ? ActivityIndicator : undefined;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={favouriteProducts}
        renderItem={renderProduct}
        onEndReached={() => fetchNextPage()}
        ListFooterComponent={loadingComponent}
      ></FlatList>
    </View>
  );
};

export default FavouriteProducts;
