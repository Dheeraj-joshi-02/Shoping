import { useState, useEffect } from "react";

const mockProducts = [
  {
    id: "1",
    name: "Premium Backpack",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    price: 89.99,
  },
  {
    id: "2",
    name: "Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and premium sound quality.",
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    price: 199.99,
  },
  {
    id: "3",
    name: "Cotton T-Shirt",
    description:
      "Comfortable 100% cotton t-shirt available in multiple colors and sizes.",
    image:
      "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Clothing",
    price: 29.99,
  },
  {
    id: "4",
    name: "Smart Watch",
    description:
      "Advanced smartwatch with health monitoring, GPS, and long battery life.",
    image:
      "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Electronics",
    price: 299.99,
  },
  {
    id: "5",
    name: "Indoor Plant",
    description:
      "Beautiful low-maintenance indoor plant perfect for home or office decoration.",
    image:
      "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Home & Garden",
    price: 24.99,
  },
  {
    id: "6",
    name: "Programming Book",
    description:
      "Comprehensive guide to modern web development with practical examples.",
    image:
      "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Books",
    price: 49.99,
  },
];

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => {
          const categoryMap = {
            cat1: "Electronics",
            cat2: "Clothing",
            cat3: "Home & Garden",
            cat4: "Books",
            cat5: "Sports",
          };
          return product.category === categoryMap[selectedCategory];
        });

  return {
    products: filteredProducts,
    loading,
    selectedCategory,
    setSelectedCategory,
  };
}
