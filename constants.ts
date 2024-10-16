
// export const BASE_URI = 'https://localhost:8000';
export const BASE_URI = 'http://192.168.1.107:8080';


export const RESOURSES = {
    user: "user",
    category: "categories",
    product: "products"
}

export const USER_URI = BASE_URI + "/" + RESOURSES.user;

export const CATEGORY_URI = USER_URI + "/" + RESOURSES.category;
