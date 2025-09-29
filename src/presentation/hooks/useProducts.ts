import { useState, useEffect } from 'react';
import type { Product, ApiResponse } from '../../shared';

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const response = await fetch('https://ophim1.com/v1/api/danh-sach/phim-moi-cap-nhat')
                const data: ApiResponse = await response.json();
                setProducts(data.data.items);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);
    
    return products;
}