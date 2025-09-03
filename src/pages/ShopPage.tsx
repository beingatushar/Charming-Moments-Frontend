import React, { memo } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import aboutImage from '../assets/shop.png';
import HeroSection from '../components/common/HeroSection';
import ProductList from '../components/ProductList';
const ShopPage: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection title="Shop Our Collection" backgroundImage={aboutImage} />

      {/* Product List */}
      <section className="container mx-auto px-6 py-8">
        <ProductList />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ShopPage;
