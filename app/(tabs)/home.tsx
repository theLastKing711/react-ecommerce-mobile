import CategoryFilterSection from "@/components/home/CategoryFilterSection";
import ProductSection from "@/components/home/ProductSection";
import ProductCard from "@/components/shared/ProductCard";
import { useGetHomeData } from "@/hooks/api/home/useGetHomeData";
import { useFavouriteProduct } from "@/hooks/api/products/Mutations/useFavouriteProduct";
import { useChipFilter } from "@/hooks/components/useChipFilter";
import { IHomeCategoryItem, IHomeProductItem } from "@/types/home";
import { ListRenderItem, ScrollView, StyleSheet, View } from "react-native";
import { Chip, ThemeProvider, useTheme } from "react-native-paper";
import { Searchbar } from "react-native-paper";

const Home = () => {
  const { data, isLoading } = useGetHomeData();

  const { mutation: favouriteProduct } = useFavouriteProduct();

  const theme = useTheme();

  const { getBackgroundColor, getColor, isItemSelected, toggleItem } =
    useChipFilter([]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
    categoryListConatiner: {
      alignItems: "flex-start",
      paddingStart: 15,
      gap: 10,
    },
  });

  const categoriesList = data?.data.categories || [];

  const mostSellingProducts = data?.data.most_selling_products || [];

  const userPurchasedProducts = data?.data.user_purchased_products || [];

  const renderCategoryItem:
    | ListRenderItem<IHomeCategoryItem>
    | null
    | undefined = ({ item }) => (
    <Chip
      style={{
        backgroundColor: getBackgroundColor(item.id),
      }}
      onPress={(e) => toggleItem(item.id)}
      selectedColor={getColor(item.id)}
      selected={isItemSelected(item.id)}
      key={item.id}
    >
      {item.name}
    </Chip>
  );

  const renderProductItem:
    | ListRenderItem<IHomeProductItem>
    | null
    | undefined = ({ item }) => (
    <ProductCard item={item} onFavourite={favouriteProduct}></ProductCard>
  );

  if (isLoading) {
    return;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Searchbar
          placeholder="ابحث عن منتج أو تصنيف"
          value=""
          style={{ marginTop: 15 }}
        />
        <CategoryFilterSection
          headerProps={{ text: "التصنيفات" }}
          data={categoriesList}
          renderItem={renderCategoryItem}
        />
        <ProductSection
          headerProps={{
            text: "اﻷكثر مبيعا",
          }}
          data={mostSellingProducts}
          renderItem={renderProductItem}
        />
        <ProductSection
          headerProps={{
            text: "من طلباتي",
          }}
          data={userPurchasedProducts}
          renderItem={renderProductItem}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
