// import * as React from "react";
// import * as SecureStore from 'expo-secure-store'

// export default function useLocalStorage(
//   key: string,
//   initialValue: string  
// ): [string, (value: Function | string) => void] {

//   //executes the function on first render and assign its result to storedValue
//   const [storedValue, setStoredValue] = React.useState(() => {
//     try {
//       const item =
//         SecureStore.getItem(key);

//       return item ? item : initialValue;
//     } catch (error) {
//       return initialValue;
//     }
//   });

//   const setValue = async (value: Function | string) => {
//     try {
//       const valueToStore =
//         value instanceof Function ? value(storedValue) : value;

//       setStoredValue(valueToStore);

//       await SecureStore.setItemAsync(key, valueToStore);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return [storedValue, setValue];
// }