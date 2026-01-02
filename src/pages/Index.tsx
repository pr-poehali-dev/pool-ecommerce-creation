import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const categories = [
  { id: 'products', name: 'Товары для дома', icon: 'Home' },
  { id: 'food', name: 'Продукты', icon: 'ShoppingBasket' },
  { id: 'kids', name: 'Детские товары', icon: 'Baby' },
  { id: 'household', name: 'Бытовая химия', icon: 'Sparkles' }
];

const products = {
  products: [
    { id: 1, name: 'Набор посуды "Семейный"', price: 3490, category: 'Кухня', icon: 'UtensilsCrossed', badge: 'Хит' },
    { id: 2, name: 'Плед шерстяной 200x220', price: 2890, category: 'Текстиль', icon: 'Wind', badge: '' },
    { id: 3, name: 'Набор полотенец 6 шт', price: 1590, category: 'Текстиль', icon: 'Shirt', badge: '' },
    { id: 4, name: 'Контейнеры для хранения', price: 890, category: 'Хранение', icon: 'Box', badge: 'Новинка' }
  ],
  food: [
    { id: 5, name: 'Крупы в ассортименте', price: 120, category: 'Бакалея', icon: 'Wheat', badge: '' },
    { id: 6, name: 'Макароны премиум 500г', price: 180, category: 'Бакалея', icon: 'Cookie', badge: '' },
    { id: 7, name: 'Масло подсолнечное 1л', price: 210, category: 'Масла', icon: 'Droplet', badge: '' },
    { id: 8, name: 'Консервы овощные', price: 95, category: 'Консервы', icon: 'Package', badge: 'Акция' }
  ],
  kids: [
    { id: 9, name: 'Набор для творчества', price: 890, category: 'Творчество', icon: 'Palette', badge: 'Хит' },
    { id: 10, name: 'Игрушки развивающие', price: 1290, category: 'Игрушки', icon: 'Blocks', badge: '' },
    { id: 11, name: 'Книги для детей', price: 450, category: 'Книги', icon: 'Book', badge: '' },
    { id: 12, name: 'Канцтовары школьные', price: 320, category: 'Школа', icon: 'Pencil', badge: '' }
  ],
  household: [
    { id: 13, name: 'Порошок стиральный 3кг', price: 590, category: 'Стирка', icon: 'Shirt', badge: '' },
    { id: 14, name: 'Средство для посуды', price: 180, category: 'Посуда', icon: 'Sparkles', badge: '' },
    { id: 15, name: 'Освежитель воздуха', price: 240, category: 'Освежители', icon: 'Wind', badge: '' },
    { id: 16, name: 'Салфетки влажные', price: 120, category: 'Гигиена', icon: 'Droplets', badge: 'Акция' }
  ]
};

const features = [
  { title: 'Низкие цены', description: 'Доступные цены для всей семьи', icon: 'Sparkles', color: 'text-primary' },
  { title: 'Свежие продукты', description: 'Ежедневные поставки', icon: 'Leaf', color: 'text-secondary' },
  { title: 'Рядом с домом', description: 'Удобное расположение', icon: 'MapPin', color: 'text-accent' },
  { title: 'Акции и скидки', description: 'Выгодные предложения', icon: 'Tag', color: 'text-primary' }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-green-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">7Я</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={14} className="text-white fill-white" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">7Я</h1>
                <p className="text-sm text-muted-foreground">Магазин для всей семьи</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Icon name="Phone" size={20} className="text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary/10">
                <Icon name="MapPin" size={20} className="text-secondary" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-primary via-green-600 to-secondary py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/ae626591-4ac3-4499-8b21-ae0139238920/files/2c56f62a-8a8a-4f1d-8fe7-efa059333e60.jpg" 
            alt="Магазин 7Я" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-green-600/90 to-secondary/90"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/40 text-lg px-6 py-2">
              <Icon name="Heart" size={16} className="mr-2 fill-white" />
              Для всей семьи
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Магазин 7Я
            </h2>
            <p className="text-2xl mb-8 text-orange-50">
              Всё необходимое для вашей семьи в одном месте
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-primary hover:bg-orange-50 shadow-lg hover-scale">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur">
                <Icon name="MapPin" size={20} className="mr-2" />
                Как добраться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-orange-100 to-green-100 flex items-center justify-center mb-4 ${feature.color}`}>
                    <Icon name={feature.icon} size={32} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-4xl font-bold mb-3 text-foreground">Наш ассортимент</h3>
            <p className="text-xl text-muted-foreground">Выбирайте из 4 категорий товаров</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 h-auto bg-white shadow-lg border-2">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id} 
                  className="flex flex-col gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
                >
                  <Icon name={cat.icon} size={24} />
                  <span className="text-xs font-semibold">{cat.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products[cat.id as keyof typeof products].map((product, idx) => (
                    <Card 
                      key={product.id} 
                      className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 animate-scale-in border-2 hover:border-primary"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-orange-100 via-yellow-50 to-green-100 flex items-center justify-center">
                          <Icon name={product.icon} size={64} className="text-primary/60" />
                        </div>
                        {product.badge && (
                          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground shadow-lg">
                            {product.badge}
                          </Badge>
                        )}
                      </div>
                      <CardHeader>
                        <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
                        <CardTitle className="text-lg leading-snug">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-3xl font-bold text-primary">
                              {product.price}
                            </span>
                            <span className="text-lg text-muted-foreground ml-1">₽</span>
                          </div>
                          <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-lg hover-scale">
                            <Icon name="Plus" size={18} className="mr-1" />
                            В корзину
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="bg-gradient-to-r from-secondary via-green-600 to-primary py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Icon name="Heart" size={200} className="absolute top-10 left-10 text-white" />
          <Icon name="Home" size={150} className="absolute bottom-10 right-20 text-white" />
        </div>
        <div className="container mx-auto text-center text-white relative z-10">
          <Icon name="Gift" size={64} className="mx-auto mb-6 text-white" />
          <h3 className="text-4xl font-bold mb-4">Приходите к нам!</h3>
          <p className="text-2xl mb-8 text-green-50 max-w-2xl mx-auto">
            Каждый день новые акции и специальные предложения для постоянных покупателей
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-secondary hover:bg-green-50 shadow-lg text-lg px-8 hover-scale">
              <Icon name="Phone" size={22} className="mr-2" />
              Позвонить нам
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur text-lg px-8">
              <Icon name="MapPin" size={22} className="mr-2" />
              Адрес магазина
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">7Я</span>
                </div>
                <h4 className="text-2xl font-bold">Магазин 7Я</h4>
              </div>
              <p className="text-slate-400">
                Товары для всей семьи по доступным ценам
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icon name="Phone" size={20} />
                Контакты
              </h4>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Краснодарский край
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Icon name="Clock" size={20} />
                Режим работы
              </h4>
              <div className="space-y-2 text-slate-400">
                <p>Пн-Пт: 8:00 - 21:00</p>
                <p>Сб-Вс: 9:00 - 20:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p className="flex items-center justify-center gap-2">
              © 2026 Магазин 7Я. Сделано с 
              <Icon name="Heart" size={16} className="text-primary fill-primary" />
              для вашей семьи
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}