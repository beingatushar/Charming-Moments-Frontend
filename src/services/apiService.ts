import axios, { AxiosError } from 'axios';
import { Product, ProductSortOption } from '../types/product.types.ts';
import { ApiError } from '../types/apiError.types.ts';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    const err = error as AxiosError<ApiError>;
    return err.response?.data?.message || err.message;
  }
  return 'An unknown error occurred';
};

export const fetchAllProducts = async (options?: {
  categories?: string[];
  sortBy?: ProductSortOption;
}): Promise<Product[]> => {
  try {
    const params = new URLSearchParams();
    if (options?.categories) {
      params.append('category', JSON.stringify(options.categories));
    }
    if (options?.sortBy) {
      params.append('sortBy', options.sortBy);
    }

    const url = `/api/products?${params.toString()}`;
    const { data } = await api.get<Product[]>(url);
    return data;
  } catch (error: unknown) {
    throw new Error(handleApiError(error));
  }
};

export const getAllCategories = async (): Promise<string[]> => {
  try {
    const { data } = await api.get<string[]>('/api/products/category');
    return data;
  } catch (error: unknown) {
    throw new Error(handleApiError(error));
  }
};

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const { data } = await api.get<Product>(`/api/products/${id}`);
    return data;
  } catch (error: unknown) {
    throw new Error(handleApiError(error));
  }
};

export const createProduct = async (
  productData: Partial<Product>
): Promise<Product> => {
  try {
    const { data } = await api.post<Product>('/api/products', productData);
    return data;
  } catch (error: unknown) {
    throw new Error(handleApiError(error));
  }
};

export const updateProduct = async (
  id: string,
  updateData: Partial<Product>
): Promise<Product> => {
  try {
    const { data } = await api.put<Product>(`/api/products/${id}`, updateData);
    return data;
  } catch (error: unknown) {
    throw new Error(handleApiError(error));
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await api.delete(`/api/products/${id}`);
  } catch (error: unknown) {
    throw new Error(handleApiError(error));
  }
};

export const cleanProducts = async (): Promise<{
  updatedCount: number;
  totalProducts: number;
}> => {
  try {
    const { data } = await api.post<{
      updatedCount: number;
      totalProducts: number;
    }>('/api/products/clean');
    return data;
  } catch (error: unknown) {
    throw new Error(handleApiError(error));
  }
};
