import CategoryFilterSection from "@/components/home/CategoryFilterSection";
import ProductSection from "@/components/home/ProductSection";
import SearchSuggestionList from "@/components/home/SearchSuggestionList";
import ProductCard from "@/components/shared/ProductCard";
import { useGetHomeData } from "@/hooks/api/home/Queries/useGetHomeData";
import { useFavouriteProduct } from "@/hooks/api/products/Mutations/useFavouriteProduct";
import { useGetSearchSuggestions } from "@/hooks/api/home/Queries/useGetSearchSuggestions";
import { useChipFilter } from "@/hooks/components/useChipFilter";
import { IHomeCategoryItem, IHomeProductItem } from "@/types/home";
import { ListRenderItem, ScrollView, StyleSheet, View } from "react-native";
import { Chip, useTheme } from "react-native-paper";
import { Searchbar } from "react-native-paper";

const Home = () => {
  const {
    searchQueryParam,
    nextCursorParam,
    data: searchSuggestionData,
    isSearchFocused,
    hasNextPage,
    isLoading: isSearchSuggestionListLoading,
    onSearchFocus,
    onSearchBlur,
    onSearchValueUpdate,
    fetchNextPage,
  } = useGetSearchSuggestions();

  const { data, isLoading } = useGetHomeData();

  const { mutation: favouriteProduct } = useFavouriteProduct();

  const theme = useTheme();

  const { getBackgroundColor, getColor, isItemSelected, toggleItem } =
    useChipFilter();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //   height: 600,
      backgroundColor: theme.colors.surface,
      position: "relative",
    },
    categoryListConatiner: {
      alignItems: "flex-start",
      paddingStart: 15,
      gap: 10,
    },
  });

  const searchSuggestions =
    searchSuggestionData?.pages?.flatMap((item) => item.data) || [];

  const categoriesList = data?.data.categories || [];

  const mostSellingProducts = data?.data.most_selling_products || [];

  const userPurchasedProducts = data?.data.user_purchased_products || [];

  console.log("search suggestions", searchSuggestions);

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

  const shouldShowSuggestionList = isSearchFocused || !!searchQueryParam;

  return (
    // <ScrollView style={{ position: "relative" }}>
    <View style={styles.container}>
      <View style={{ zIndex: 4 }}>
        <Searchbar
          style={{ marginTop: 15 }}
          placeholder="ابحث عن منتج"
          onFocus={() => onSearchFocus()}
          onBlur={() => onSearchBlur()}
          value={searchQueryParam}
          onChangeText={onSearchValueUpdate}
        />
      </View>

      {shouldShowSuggestionList && (
        <SearchSuggestionList
          isVisible={shouldShowSuggestionList}
          items={searchSuggestions}
          hasNextPage={hasNextPage}
          isLoading={isSearchSuggestionListLoading}
          fetchNextPage={() => fetchNextPage()}
        />
      )}

      <ScrollView scrollEnabled={!shouldShowSuggestionList}>
        <View style={{ opacity: shouldShowSuggestionList ? 0 : 1 }}>
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
        </View>
      </ScrollView>
    </View>
    // </ScrollView>
  );
};

export default Home;
