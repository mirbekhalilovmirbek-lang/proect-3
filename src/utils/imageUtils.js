// Utility functions for handling product images
export const getProductImage = (productId) => {
  try {
    // In a real app, you would map product IDs to actual images
    // For now, we'll return a placeholder
    return `/src/assets/products/laptop-${productId}.jpg`;
  } catch (error) {
    // Return default placeholder if specific image not found
    return '/src/assets/products/default-laptop.jpg';
  }
};

// For demo purposes, we'll create a mapping of product IDs to images
export const productImages = {
  1: '/src/assets/products/laptop-1.jpg',
  2: '/src/assets/products/laptop-2.jpg',
  3: '/src/assets/products/laptop-3.jpg',
  4: '/src/assets/products/laptop-4.jpg',
  5: '/src/assets/products/laptop-5.jpg',
  6: '/src/assets/products/laptop-6.jpg',
  default: '/src/assets/products/default-laptop.jpg'
};

// Function to get image by product ID
export const getImageByProductId = (id) => {
  return productImages[id] || productImages.default;
};