import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Bike" className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gradient">МотоТакси</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#tariffs"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Тарифы
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-orange-500 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-200">
                ⚡ Быстрая доставка по городу
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Быстрее пробок.
                <br />
                <span className="text-gradient">Надежнее такси.</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мотоциклы проезжают там, где автомобили стоят в пробках.
                Доставляем людей и документы быстро и экологично.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg"
                >
                  <Icon name="Clock" className="w-5 h-5 mr-3" />
                  Заказать сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
                >
                  <Icon name="Calculator" className="w-5 h-5 mr-3" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-600 rounded-3xl transform rotate-3 opacity-20"></div>
              <img
                src="/img/a870fdd2-4dc3-4b08-a82f-3bb876bfda36.jpg"
                alt="Мотоциклист службы доставки"
                className="relative z-10 w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг доставки на мотоциклах для частных лиц и
              бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">
                  Пассажирские перевозки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Быстрая доставка людей по городу. Идеально для опозданий и
                  срочных дел.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Доставка документов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Надежная доставка важных документов и договоров между офисами.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">Мелкие грузы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Доставка небольших посылок, лекарств и других мелких грузов.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="w-8 h-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl">Экспресс-доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Сверхбыстрая доставка в течение 15-30 минут по центру города.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Тарифы</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Прозрачные и доступные цены на все виды услуг
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-10 h-10 text-blue-500" />
                </div>
                <CardTitle className="text-2xl text-blue-600">
                  Базовый
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Стандартная доставка
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  150₽
                </div>
                <p className="text-gray-600 mb-6">за первые 3 км</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Доставка 30-45 минут</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Отслеживание заказа</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Поддержка 24/7</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow duration-300 border-2 border-orange-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-10 h-10 text-orange-500" />
                </div>
                <CardTitle className="text-2xl text-orange-600">
                  Премиум
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Быстрая доставка
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  250₽
                </div>
                <p className="text-gray-600 mb-6">за первые 3 км</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Доставка 15-30 минут</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Приоритетная очередь</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>SMS-уведомления</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Страхование груза</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" className="w-10 h-10 text-purple-500" />
                </div>
                <CardTitle className="text-2xl text-purple-600">
                  Бизнес
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Корпоративные клиенты
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  По договору
                </div>
                <p className="text-gray-600 mb-6">индивидуальные условия</p>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Скидки от объема</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Отсрочка платежа</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Личный менеджер</span>
                  </li>
                  <li className="flex items-center">
                    <Icon
                      name="Check"
                      className="w-5 h-5 text-green-500 mr-3"
                    />
                    <span>Отчетность</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Связаться с нами
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">О нас</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мы — команда профессиональных мотоциклистов, которая знает город
                как свои пять пальцев. Наша цель — сделать доставку быстрой,
                надежной и экологичной.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    500+
                  </div>
                  <p className="text-gray-600">Довольных клиентов</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    15 мин
                  </div>
                  <p className="text-gray-600">Среднее время доставки</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    24/7
                  </div>
                  <p className="text-gray-600">Работаем круглосуточно</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-600 rounded-3xl transform -rotate-3 opacity-20"></div>
              <img
                src="/img/f77070c7-d0b3-4ac0-9abe-e95d7a06f89b.jpg"
                alt="Мотоцикл для доставки"
                className="relative z-10 w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Leaf" className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">Экологичность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Меньше выбросов CO2 по сравнению с автомобилями. Заботимся о
                  будущем планеты.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Все водители проходят обучение безопасности. Полная страховка
                  всех грузов.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">Скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Обходим пробки и доставляем в 3 раза быстрее обычного такси.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg font-medium">
                  +7 (999) 123-45-67
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg font-medium">
                  info@motodost.ru
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="MessageCircle"
                    className="w-8 h-8 text-green-500"
                  />
                </div>
                <CardTitle className="text-xl">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg font-medium">
                  +7 (999) 123-45-67
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="w-8 h-8 text-purple-500" />
                </div>
                <CardTitle className="text-xl">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg font-medium">
                  г. Москва, ул. Примерная, 123
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Bike" className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">МотоТакси</h4>
              </div>
              <p className="text-gray-400">
                Быстрая и надежная доставка на мотоциклах по всему городу.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Пассажирские перевозки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Доставка документов
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Мелкие грузы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Экспресс-доставка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" className="w-4 h-4 mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="w-4 h-4 mr-2" />
                  info@motodost.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="w-4 h-4 mr-2" />
                  г. Москва, ул. Примерная, 123
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МотоТакси. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
