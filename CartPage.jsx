import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'فستان أحمر', price: 150 },
    { id: 2, name: 'إسوارة جلد', price: 80 }
  ]);

  const [formData, setFormData] = useState({ name: '', phone: '', address: '' });
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id) => setCartItems(cartItems.filter(item => item.id !== id));
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const products = cartItems.map(i => `- ${i.name} (${i.price} جنيه)`).join('\n');
    const message = `طلب جديد:\n\nالاسم: ${formData.name}\nرقم الهاتف: ${formData.phone}\nالعنوان: ${formData.address}\n\nالمنتجات:\n${products}\n\nالإجمالي: ${total} جنيه`;
    const whatsappURL = `https://wa.me/201557673642?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <h1 className="text-2xl font-bold text-pink-700 mb-6">سلة الشراء</h1>
      {cartItems.length === 0 ? <p className="text-center text-gray-500">لا توجد منتجات في السلة حالياً.</p> : <>
        <ul className="mb-6 space-y-4">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
              <span>{item.name} - {item.price} جنيه</span>
              <Button variant="ghost" className="text-red-600" onClick={() => handleRemove(item.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </li>
          ))}
        </ul>
        <div className="mb-4 text-lg font-medium text-pink-800">الإجمالي: {total} جنيه</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="الاسم الكامل" onChange={handleChange} className="w-full p-2 rounded border" required />
          <input name="phone" placeholder="رقم الهاتف" onChange={handleChange} className="w-full p-2 rounded border" required />
          <input name="address" placeholder="العنوان الكامل" onChange={handleChange} className="w-full p-2 rounded border" required />
          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white w-full">تأكيد الطلب عبر واتساب</Button>
        </form>
      </>}
    </div>
  );
};

export default CartPage;