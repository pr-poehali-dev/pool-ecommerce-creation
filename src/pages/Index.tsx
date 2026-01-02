import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const pools = [
  {
    id: 1,
    brand: 'Intex',
    name: 'Ultra Frame Pool',
    size: '549x274x132',
    volume: 22706,
    price: 85990,
    image: 'https://cdn.poehali.dev/projects/4x/bucket/pool1.jpg'
  },
  {
    id: 2,
    brand: 'Bestway',
    name: 'Power Steel Frame',
    size: '488x244x122',
    volume: 14550,
    price: 59990,
    image: 'https://cdn.poehali.dev/projects/4x/bucket/pool2.jpg'
  },
  {
    id: 3,
    brand: 'Intex',
    name: 'Prism Frame Pool',
    size: '457x122',
    volume: 16805,
    price: 42990,
    image: 'https://cdn.poehali.dev/projects/4x/bucket/pool3.jpg'
  },
  {
    id: 4,
    brand: 'Bestway',
    name: 'Steel Pro Frame',
    size: '366x122',
    volume: 10250,
    price: 28990,
    image: 'https://cdn.poehali.dev/projects/4x/bucket/pool4.jpg'
  }
];

const accessories = [
  { id: 1, name: 'Насос-фильтр 3785 л/ч', category: 'Насосы', price: 8990, icon: 'Zap' },
  { id: 2, name: 'Лестница 122 см', category: 'Лестницы', price: 4590, icon: 'Grid3x3' },
  { id: 3, name: 'Скиммер навесной', category: 'Скиммеры', price: 2790, icon: 'Filter' },
  { id: 4, name: 'Тент защитный', category: 'Тенты', price: 3490, icon: 'Shield' }
];

const chemistry = [
  { id: 1, name: 'Хлор быстрого действия 1 кг', price: 890, icon: 'Droplets' },
  { id: 2, name: 'pH-регулятор 1.5 кг', price: 790, icon: 'Flask' },
  { id: 3, name: 'Альгицид 1 л', price: 1190, icon: 'Beaker' },
  { id: 4, name: 'Комплект тестеров', price: 690, icon: 'TestTube' }
];

const vehicles = [
  { id: 1, name: 'Велосипед горный 27.5"', category: 'Велосипеды', price: 32990, icon: 'Bike' },
  { id: 2, name: 'Электросамокат Kugoo M5', category: 'Самокаты', price: 45990, icon: 'BatteryCharging' },
  { id: 3, name: 'Велосипед детский 20"', category: 'Велосипеды', price: 18990, icon: 'Bike' },
  { id: 4, name: 'Электросамокат Xiaomi Pro', category: 'Самокаты', price: 54990, icon: 'BatteryCharging' }
];

const services = [
  { title: 'Консультация', description: 'Поможем выбрать подходящую модель для ваших нужд', icon: 'MessageCircle' },
  { title: 'Сборка', description: 'Профессиональная установка и сборка бассейна', icon: 'Wrench' },
  { title: 'Доставка', description: 'Быстрая доставка по Краснодарскому краю', icon: 'Truck' },
  { title: 'Комплекты', description: 'Готовые решения: бассейн + оборудование', icon: 'Package' }
];

export default function Index() {
  const [brandFilter, setBrandFilter] = useState<string>('all');
  const [volumeRange, setVolumeRange] = useState([0, 30000]);

  const filteredPools = pools.filter(pool => {
    const brandMatch = brandFilter === 'all' || pool.brand === brandFilter;
    const volumeMatch = pool.volume >= volumeRange[0] && pool.volume <= volumeRange[1];
    return brandMatch && volumeMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="Waves" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">АкваЗона</h1>
                <p className="text-sm text-muted-foreground">Краснодарский край</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingCart" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-primary via-blue-500 to-secondary py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/40">Сезон 2026</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Бассейны для вашего отдыха
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Профессиональное оборудование для гостевых домов, баз отдыха и частных домовладений
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                <Icon name="ShoppingBag" size={20} className="mr-2" />
                Каталог бассейнов
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Phone" size={20} className="mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Tabs defaultValue="pools" className="container mx-auto px-4 py-12">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto">
          <TabsTrigger value="pools" className="flex flex-col gap-2 py-3">
            <Icon name="Waves" size={20} />
            <span className="text-xs">Бассейны</span>
          </TabsTrigger>
          <TabsTrigger value="accessories" className="flex flex-col gap-2 py-3">
            <Icon name="Wrench" size={20} />
            <span className="text-xs">Аксессуары</span>
          </TabsTrigger>
          <TabsTrigger value="chemistry" className="flex flex-col gap-2 py-3">
            <Icon name="Droplets" size={20} />
            <span className="text-xs">Химия</span>
          </TabsTrigger>
          <TabsTrigger value="vehicles" className="flex flex-col gap-2 py-3">
            <Icon name="Bike" size={20} />
            <span className="text-xs">Транспорт</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pools" className="mt-8">
          <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Icon name="Filter" size={20} />
              Фильтры
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Бренд</label>
                <Select value={brandFilter} onValueChange={setBrandFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все бренды</SelectItem>
                    <SelectItem value="Intex">Intex</SelectItem>
                    <SelectItem value="Bestway">Bestway</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Объём: {volumeRange[0]} - {volumeRange[1]} л
                </label>
                <Slider
                  min={0}
                  max={30000}
                  step={1000}
                  value={volumeRange}
                  onValueChange={setVolumeRange}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPools.map(pool => (
              <Card key={pool.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <Icon name="Waves" size={64} className="text-primary/40" />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{pool.brand}</Badge>
                  <CardTitle className="text-lg">{pool.name}</CardTitle>
                  <CardDescription>
                    <div className="flex flex-col gap-1 mt-2">
                      <span className="flex items-center gap-2">
                        <Icon name="Maximize" size={14} />
                        {pool.size} см
                      </span>
                      <span className="flex items-center gap-2">
                        <Icon name="Droplet" size={14} />
                        {pool.volume.toLocaleString()} л
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {pool.price.toLocaleString()} ₽
                    </span>
                    <Button size="sm">
                      <Icon name="ShoppingCart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="accessories" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map(item => (
              <Card key={item.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">{item.category}</Badge>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {item.price.toLocaleString()} ₽
                    </span>
                    <Button size="sm" variant="outline">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="chemistry" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chemistry.map(item => (
              <Card key={item.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={32} className="text-cyan-600" />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {item.price.toLocaleString()} ₽
                    </span>
                    <Button size="sm" variant="outline">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vehicles" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map(item => (
              <Card key={item.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={32} className="text-secondary" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">{item.category}</Badge>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {item.price.toLocaleString()} ₽
                    </span>
                    <Button size="sm" variant="outline">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="bg-gradient-to-r from-primary to-secondary py-16 px-4 mt-12">
        <div className="container mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Готовы начать?</h3>
          <p className="text-xl mb-8 text-blue-50">
            Закажите консультацию и получите скидку 10% на первый заказ
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
            <Icon name="Phone" size={20} className="mr-2" />
            Связаться с нами
          </Button>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">АкваЗона</h4>
              <p className="text-slate-400">
                Профессиональное оборудование для активного отдыха в Краснодарском крае
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (861) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@akvazona.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Режим работы</h4>
              <p className="text-slate-400">Пн-Вс: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© 2026 АкваЗона. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
