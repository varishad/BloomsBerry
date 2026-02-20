'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMugHot,
  faGlassWater,
  faUtensils,
  faCakeCandles,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  ingredients?: string;
  popular?: boolean;
}

interface MenuCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: 'coffee',
    title: 'Coffee & Hot Beverages',
    description: 'Artisanal espresso drinks, lattes, and specialty coffees crafted with passion',
    icon: faMugHot,
    color: 'from-[#7FA88A] to-[#5F8F72]',
    items: [
      {
        id: 'espresso',
        name: 'Classic Espresso',
        description: 'Rich, bold single shot of our signature house blend',
        price: '$3.50',
        ingredients: '100% Arabica beans, freshly ground'
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Double shot espresso with hot water',
        price: '$4.00',
        ingredients: 'Espresso, hot water'
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Perfect balance of espresso, steamed milk, and foam',
        price: '$5.00',
        ingredients: 'Espresso, steamed milk, milk foam',
        popular: true
      },
      {
        id: 'latte',
        name: 'Café Latte',
        description: 'Creamy espresso with steamed milk and light foam',
        price: '$5.50',
        ingredients: 'Espresso, steamed milk',
        popular: true
      },
      {
        id: 'mocha',
        name: 'Café Mocha',
        description: 'Rich chocolate meets espresso in perfect harmony',
        price: '$6.00',
        ingredients: 'Espresso, chocolate syrup, steamed milk, whipped cream'
      },
      {
        id: 'flatwhite',
        name: 'Flat White',
        description: 'Australian-style with velvety microfoam',
        price: '$5.50',
        ingredients: 'Double espresso, microfoam'
      },
      {
        id: 'macchiato',
        name: 'Caramel Macchiato',
        description: 'Vanilla-infused milk marked with espresso and caramel',
        price: '$6.00',
        ingredients: 'Vanilla syrup, steamed milk, espresso, caramel drizzle'
      },
      {
        id: 'hotchocolate',
        name: 'Signature Hot Chocolate',
        description: 'Belgian chocolate topped with marshmallows',
        price: '$5.50',
        ingredients: 'Belgian chocolate, steamed milk, marshmallows'
      }
    ]
  },
  {
    id: 'cold',
    title: 'Cold Beverages',
    description: 'Refreshing freddos, smoothies, milkshakes, and iced specialty drinks',
    icon: faGlassWater,
    color: 'from-[#AFC8B2] to-[#7FA88A]',
    items: [
      {
        id: 'icedcoffee',
        name: 'Iced Coffee',
        description: 'Chilled coffee served over ice with your choice of milk',
        price: '$5.00',
        ingredients: 'Cold brew, ice, milk of choice'
      },
      {
        id: 'freddo',
        name: 'Greek Freddo Espresso',
        description: 'Shaken iced espresso with signature crema',
        price: '$5.50',
        ingredients: 'Double espresso, ice, shaken',
        popular: true
      },
      {
        id: 'freddocapp',
        name: 'Freddo Cappuccino',
        description: 'Iced espresso topped with cold milk foam',
        price: '$6.00',
        ingredients: 'Double espresso, cold milk foam, ice',
        popular: true
      },
      {
        id: 'frappe',
        name: 'Classic Frappé',
        description: 'Greek-style whipped iced coffee',
        price: '$5.50',
        ingredients: 'Instant coffee, ice, milk, whipped'
      },
      {
        id: 'smoothie-mango',
        name: 'Tropical Mango Smoothie',
        description: 'Fresh mango blended with yogurt and honey',
        price: '$6.50',
        ingredients: 'Fresh mango, Greek yogurt, honey, ice'
      },
      {
        id: 'smoothie-berry',
        name: 'Mixed Berry Smoothie',
        description: 'Antioxidant-rich blend of seasonal berries',
        price: '$6.50',
        ingredients: 'Strawberries, blueberries, raspberries, yogurt'
      },
      {
        id: 'milkshake-choc',
        name: 'Chocolate Milkshake',
        description: 'Thick and creamy Belgian chocolate shake',
        price: '$6.00',
        ingredients: 'Belgian chocolate, ice cream, milk'
      },
      {
        id: 'milkshake-vanilla',
        name: 'Vanilla Bean Milkshake',
        description: 'Classic vanilla with real vanilla bean',
        price: '$6.00',
        ingredients: 'Real vanilla bean, ice cream, milk'
      }
    ]
  },
  {
    id: 'food',
    title: 'Food & Mains',
    description: 'Delicious wraps, burgers, pasta, pizza, and gourmet platters',
    icon: faUtensils,
    color: 'from-[#5F8F72] to-[#2D3A2F]',
    items: [
      {
        id: 'club',
        name: 'Classic Club Sandwich',
        description: 'Triple-decker with turkey, bacon, lettuce, tomato',
        price: '$12.00',
        ingredients: 'Turkey breast, bacon, lettuce, tomato, mayo, toasted bread',
        popular: true
      },
      {
        id: 'wrap-chicken',
        name: 'Grilled Chicken Wrap',
        description: 'Marinated chicken with fresh vegetables and tzatziki',
        price: '$11.00',
        ingredients: 'Grilled chicken, lettuce, tomato, onion, tzatziki, tortilla'
      },
      {
        id: 'burger-beef',
        name: 'Signature Beef Burger',
        description: 'Juicy beef patty with caramelized onions and special sauce',
        price: '$14.00',
        ingredients: 'Beef patty, cheddar, caramelized onions, lettuce, tomato, brioche bun',
        popular: true
      },
      {
        id: 'pasta-alfredo',
        name: 'Fettuccine Alfredo',
        description: 'Creamy parmesan sauce with grilled chicken',
        price: '$15.00',
        ingredients: 'Fresh pasta, parmesan cream sauce, grilled chicken, herbs'
      },
      {
        id: 'pasta-bolognese',
        name: 'Spaghetti Bolognese',
        description: 'Traditional Italian meat sauce with fresh basil',
        price: '$14.00',
        ingredients: 'Spaghetti, slow-cooked meat sauce, parmesan, fresh basil'
      },
      {
        id: 'pizza-margherita',
        name: 'Margherita Pizza',
        description: 'Classic tomato, mozzarella, and fresh basil',
        price: '$13.00',
        ingredients: 'San Marzano tomatoes, fresh mozzarella, basil, olive oil'
      },
      {
        id: 'pizza-pepperoni',
        name: 'Pepperoni Pizza',
        description: 'Generous pepperoni with mozzarella and herbs',
        price: '$15.00',
        ingredients: 'Pepperoni, mozzarella, tomato sauce, oregano'
      },
      {
        id: 'salad-caesar',
        name: 'Caesar Salad',
        description: 'Crisp romaine with parmesan and house-made croutons',
        price: '$10.00',
        ingredients: 'Romaine lettuce, parmesan, croutons, Caesar dressing'
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Sweet Endings',
    description: 'Indulgent brownies, cakes, and signature desserts',
    icon: faCakeCandles,
    color: 'from-[#7FA88A] to-[#AFC8B2]',
    items: [
      {
        id: 'brownie',
        name: 'Chocolate Fudge Brownie',
        description: 'Warm chocolate brownie with vanilla ice cream',
        price: '$7.50',
        ingredients: 'Dark chocolate, walnuts, vanilla ice cream',
        popular: true
      },
      {
        id: 'cheesecake',
        name: 'New York Cheesecake',
        description: 'Creamy cheesecake with berry compote',
        price: '$8.00',
        ingredients: 'Cream cheese, graham crust, mixed berry compote'
      },
      {
        id: 'tiramisu',
        name: 'Classic Tiramisu',
        description: 'Italian coffee-soaked ladyfingers with mascarpone',
        price: '$8.50',
        ingredients: 'Espresso, ladyfingers, mascarpone, cocoa powder',
        popular: true
      },
      {
        id: 'carrot-cake',
        name: 'Carrot Cake',
        description: 'Spiced carrot cake with cream cheese frosting',
        price: '$7.50',
        ingredients: 'Carrots, walnuts, spices, cream cheese frosting'
      },
      {
        id: 'waffle',
        name: 'Belgian Waffle',
        description: 'Crispy waffle with fresh berries and maple syrup',
        price: '$9.00',
        ingredients: 'Belgian waffle, fresh berries, maple syrup, whipped cream'
      },
      {
        id: 'croissant',
        name: 'Almond Croissant',
        description: 'Buttery croissant filled with almond cream',
        price: '$5.50',
        ingredients: 'Butter pastry, almond cream, sliced almonds'
      }
    ]
  }
];

interface MenuProps {
  compact?: boolean;
}

const Menu = ({ compact = false }: MenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('coffee');
  
  const currentCategory = menuData.find(cat => cat.id === activeCategory);

  // Compact view for homepage - only shows category cards
  if (compact) {
    return (
      <section id="menu" className="bg-gradient-to-b from-white to-[#F8FAF8] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#5F8F72] text-sm font-semibold tracking-widest uppercase mb-4 block font-body">
              Culinary Excellence
            </span>
            <h2 className="text-5xl md:text-6xl font-display text-[#2D3A2F] mb-4 tracking-tight">
              Our Menu
            </h2>
            <div className="w-24 h-1 bg-[#5F8F72] mx-auto rounded-full mb-6" />
            <p className="text-[#5F6B61] text-lg max-w-2xl mx-auto leading-relaxed font-body">
              Curated flavors crafted with passion, featuring the finest ingredients
              for the perfect conversation over great food and coffee
            </p>
          </motion.div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {menuData.map((category, index) => (
              <Link key={`compact-${category.id}`} href="/menu" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#AFC8B2]/20 cursor-pointer"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                        <FontAwesomeIcon icon={category.icon} className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-[#5F8F72] font-body tracking-wide">
                        {category.items.length} items
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-display font-bold text-[#2D3A2F] mb-3 group-hover:text-[#5F8F72] transition-colors duration-300">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#5F6B61] text-base leading-relaxed mb-6 font-body">
                      {category.description}
                    </p>

                    {/* Arrow Icon */}
                    <div className="flex items-center text-[#5F8F72] font-semibold text-sm font-body group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>View Items</span>
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#5F8F72] hover:bg-[#7FA88A] text-white font-body font-semibold px-12 py-7 text-lg rounded-full shadow-lg shadow-[#5F8F72]/25 hover:shadow-xl hover:shadow-[#5F8F72]/30 transition-all duration-300 group"
            >
              <Link href="/menu" className="flex items-center gap-3">
                View Full Menu
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                />
              </Link>
            </Button>
            <p className="text-[#5F6B61] text-sm mt-4 font-body">
              Discover our complete selection of beverages and cuisine
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Full view for menu page - shows tabs and detailed items
  return (
    <section id="menu" className="bg-gradient-to-b from-white to-[#F8FAF8] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#5F8F72] text-sm font-semibold tracking-widest uppercase mb-4 block font-body">
            Culinary Excellence
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-[#2D3A2F] mb-4 tracking-tight">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-[#5F8F72] mx-auto rounded-full mb-6" />
          <p className="text-[#5F6B61] text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Curated flavors crafted with passion, featuring the finest ingredients
            for the perfect conversation over great food and coffee
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {menuData.map((category) => (
            <button
              key={`tab-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#5F8F72] text-white shadow-lg shadow-[#5F8F72]/25'
                  : 'bg-white text-[#2D3A2F] shadow-md hover:shadow-lg border border-[#AFC8B2]/20'
              }`}
            >
              <FontAwesomeIcon 
                icon={category.icon} 
                className={`w-5 h-5 ${activeCategory === category.id ? 'text-white' : 'text-[#5F8F72]'}`}
              />
              <span className="font-body font-semibold">{category.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Category Description */}
        {currentCategory && (
          <motion.div
            key={`desc-${currentCategory.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <p className="text-[#5F6B61] text-lg font-body max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
          </motion.div>
        )}

        {/* Menu Items Grid */}
        {currentCategory && (
          <motion.div
            key={`grid-${currentCategory.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {currentCategory.items.map((item, index) => (
              <motion.div
                key={`item-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-[#AFC8B2]/20"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-display font-bold text-[#2D3A2F] group-hover:text-[#5F8F72] transition-colors">
                      {item.name}
                    </h3>
                    {item.popular && (
                      <span className="px-3 py-1 bg-[#5F8F72]/10 text-[#5F8F72] text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <span className="text-2xl font-display font-bold text-[#5F8F72]">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-[#5F6B61] font-body leading-relaxed mb-3">
                  {item.description}
                </p>
                
                {item.ingredients && (
                  <p className="text-sm text-[#5F6B61]/70 font-body italic">
                    Ingredients: {item.ingredients}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Allergies Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#5F6B61]/70 font-body">
            Please inform our staff of any allergies or dietary requirements. 
            Prices are subject to change. All items are prepared fresh to order.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
