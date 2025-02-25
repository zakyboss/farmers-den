import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  isLoading: false,
  products: [],
  selectedProduct: {},
  totalNumber: "",
  purchasedProducts: [],
};

const BASE_URL = "http://localhost:8000/products";

function reducer(state, action) {
  switch (action.type) {
    case "products/addProducts":
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

const ProductContext = createContext();

export default function ProductsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    isLoading,
    products,
    totalNumber,
    purchasedProducts,
    selectedProduct,
  } = state;

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        dispatch({ type: "products/addProducts", payload: data });
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    getProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        isLoading,
        products,
        totalNumber,
        purchasedProducts,
        selectedProduct,
        dispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductsProvider");
  }
  return context;
}
