
// export const BASE_URI = 'http://localhost:8000';
export const BASE_URI = 'http://192.168.1.107:8080';


export const RESOURSES = {
    user: "user",
    category: "categories",
    home: "home",
    product: "products",
    favourite: "favourite"
}

export const USER_URI = BASE_URI + "/" + RESOURSES.user;

export const CATEGORY_URI = USER_URI + "/" + RESOURSES.category;

export const PRODUCT_URI = USER_URI + "/" + RESOURSES.product;


export const FAVOURITE_PRODUCTS_URL = PRODUCT_URI + "/" + RESOURSES.favourite;


export const HOME_URI = USER_URI + "/" + RESOURSES.home;

