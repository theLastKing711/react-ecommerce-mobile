
export type IHomeResponse = {
    categories: IHomeCategoryList; 
    user_purchased_products: IHomeProductList;
    most_selling_products: IHomeProductList;
}

export type IHomeCategoryList = IHomeCategoryItem[];

export type IHomeCategoryItem = {
    id: number;
    parent_id?: number;
    name: string
}

export type IHomeProductList = IHomeProductItem[];

export type IHomeProductItem = {
    id: number;
    name: string
    image_url?: string;
    price: number;
    is_favourite: boolean;
}


