import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'فستان أحمر', price: 150, image: 'https://via.placeholder.com/300x300?text=فستان' },
    { id: 2, name: 'إسوارة جلد', price: 80, image: 'https://via.placeholder.com/300x300?text=إسوارة' },
    { id: 3, name: 'شنطة يد', price: 200, image: 'https://via.placeholder.com/300x300?text=شنطة' }
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-pink-700">TantOon Store</h1>
        <p className="text-sm text-gray-600">تسوقي أحدث صيحات الموضة والإكسسوارات</p>
      </header>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-2xl shadow hover:shadow-lg">
            <img src={product.image} alt={product.name} className="rounded mb-3" />
            <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
            <p className="text-pink-600 font-medium mb-2">{product.price} جنيه</p>
            <Button onClick={() => navigate(`/product/${product.id}`)} className="bg-pink-600 hover:bg-pink-700 text-white w-full">عرض التفاصيل</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;