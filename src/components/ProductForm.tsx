import React, { useState } from 'react';
import { Product } from '../types/product.types';
import {
  CancelButton,
  ImageUploadField,
  InputField,
  SubmitButton,
} from './FormElements';

interface ProductFormProps {
  product: Partial<Product>;
  isEditing: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  isEditing,
  onInputChange,
  onImageUpload,
  onSubmit,
  onCancel,
}) => {
  const [loading] = useState<boolean>(false);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {isEditing ? 'Edit Product' : 'Add New Product'}
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <InputField
            label="Category"
            id="category"
            name="category"
            value={product.category}
            onChange={onInputChange}
          />
          <InputField
            label="Product Name"
            id="name"
            name="name"
            value={product.name}
            onChange={onInputChange}
          />
          <InputField
            label="Price"
            id="price"
            name="price"
            type="number"
            value={product.price}
            onChange={onInputChange}
          />
          <InputField
            label="Description"
            id="description"
            name="description"
            value={product.description}
            onChange={onInputChange}
          />
          <InputField
            label="Image URL"
            id="image"
            name="image"
            value={product.image}
            onChange={onInputChange}
          />
          <ImageUploadField
            onImageUpload={onImageUpload}
            newProduct={product}
          />
          <div className="col-span-full flex flex-col sm:flex-row gap-4">
            <SubmitButton isEditing={isEditing} loading={loading} />
            {isEditing && <CancelButton onCancel={onCancel} />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
