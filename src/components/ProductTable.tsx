// src/components/ProductTable.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/product.types';

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-gray-800 p-6 border-b border-gray-200">
        Manage Products
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b hover:bg-gray-50 transition duration-300"
              >
                <td className="px-6 py-4">
                  <img
                    loading="lazy"
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {product.name}
                </td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">₹{product.price}</td>
                <td className="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                  <Link
                    to={`/product/${product.id}`}
                    className="font-medium text-pink-600 hover:underline"
                  >
                    View
                  </Link>
                  <button
                    onClick={() => onEdit(product)}
                    className="font-medium text-blue-600 hover:underline"
                    aria-label={`Edit ${product.name}`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(product.id)}
                    className="font-medium text-red-600 hover:underline"
                    aria-label={`Delete ${product.name}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {products.length === 0 && (
        <p className="text-center text-gray-500 py-8">No products found.</p>
      )}
    </div>
  );
};

export default ProductTable;
