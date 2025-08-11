import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const emulators = [
    {
      id: 1,
      name: "Nintendo (NES)",
      description: "Классические игры 8-битной эры",
      image: "/img/f75b4972-5e54-4862-acb7-0ea166fb2ab6.jpg",
      games: "2500+ игр",
      color: "neon-orange"
    },
    {
      id: 2,
      name: "Super Nintendo",
      description: "Легендарная 16-битная консоль",
      image: "/img/f75b4972-5e54-4862-acb7-0ea166fb2ab6.jpg",
      games: "1800+ игр",
      color: "retro-purple"
    },
    {
      id: 3,
      name: "Sega Genesis",
      description: "Соник и классика Sega",
      image: "/img/6a5715fb-f98a-443d-9ade-1dbbd5282f1f.jpg",
      games: "1200+ игр", 
      color: "cyber-blue"
    },
    {
      id: 4,
      name: "PlayStation 1",
      description: "Революция 3D-графики",
      image: "/img/6a5715fb-f98a-443d-9ade-1dbbd5282f1f.jpg",
      games: "3000+ игр",
      color: "electric-green"
    }
  ];

  const aiFeatures = [
    {
      icon: "Zap",
      title: "ИИ Улучшение Графики",
      description: "Автоматическое повышение разрешения и улучшение текстур в старых играх"
    },
    {
      icon: "Settings",
      title: "Оптимизация Производительности", 
      description: "Динамическая настройка эмуляции для максимальной плавности"
    },
    {
      icon: "Brain",
      title: "Умная Адаптация",
      description: "ИИ анализирует ваш стиль игры и подстраивает сложность"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-space via-slate-900 to-dark-space text-foreground">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 via-cyber-blue/10 to-electric-green/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 animate-neon-pulse" 
                style={{ fontFamily: 'Orbitron, monospace' }}>
              <span className="text-neon-orange">RETRO</span>{' '}
              <span className="text-cyber-blue">ARCADE</span>
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-8 text-neon-pink animate-retro-glow">
              🎮 ИИ-ПЛАТФОРМА БУДУЩЕГО 🚀
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
             style={{ fontFamily: 'Roboto Mono, monospace' }}>
            Играй в тысячи классических игр прямо в браузере с революционными ИИ-улучшениями. 
            Никаких скачиваний — только чистое ретро-удовольствие!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-neon-orange hover:bg-neon-orange/80 text-dark-space font-bold text-lg px-8 py-4 border-2 border-neon-orange animate-retro-glow"
            >
              <Icon name="Play" className="mr-2" size={24} />
              НАЧАТЬ ИГРУ
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-space font-bold text-lg px-8 py-4"
            >
              <Icon name="Cpu" className="mr-2" size={24} />
              УЗНАТЬ ОБ ИИ
            </Button>
          </div>
        </div>
      </section>

      {/* Emulators Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-electric-green animate-neon-pulse"
              style={{ fontFamily: 'Orbitron, monospace' }}>
            ЭМУЛЯТОРЫ КОНСОЛЕЙ
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Выберите свою любимую ретро-консоль и погрузитесь в мир классических игр
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emulators.map((emulator) => (
              <Card 
                key={emulator.id} 
                className={`bg-card/50 border-2 border-${emulator.color} hover:border-${emulator.color} hover:shadow-xl hover:shadow-${emulator.color}/20 transition-all duration-300 group cursor-pointer`}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-24 h-24 rounded-lg overflow-hidden border-2 border-current">
                    <img 
                      src={emulator.image} 
                      alt={emulator.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className={`text-${emulator.color} text-lg font-black`} style={{ fontFamily: 'Orbitron, monospace' }}>
                    {emulator.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {emulator.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className={`text-${emulator.color} font-bold mb-4`}>
                    {emulator.games}
                  </div>
                  <Button 
                    variant="outline" 
                    className={`w-full border-${emulator.color} text-${emulator.color} hover:bg-${emulator.color} hover:text-dark-space`}
                  >
                    <Icon name="GamepadIcon" className="mr-2" size={16} />
                    ЗАПУСТИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6">
              <img 
                src="/img/d8981ffa-35e5-4b49-8653-eca3a0027adc.jpg" 
                alt="AI Enhancement" 
                className="w-24 h-24 mx-auto rounded-full border-4 border-neon-pink animate-retro-glow"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-neon-pink animate-neon-pulse"
                style={{ fontFamily: 'Orbitron, monospace' }}>
              ИИ-ТЕХНОЛОГИИ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Революционные ИИ-алгоритмы превращают классические игры в современные шедевры
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card/30 border-2 border-retro-purple hover:border-neon-pink hover:shadow-xl hover:shadow-neon-pink/20 transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-retro-purple to-neon-pink flex items-center justify-center group-hover:animate-retro-glow">
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-neon-pink font-black" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-neon-orange/10 via-neon-pink/10 to-cyber-blue/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 animate-neon-pulse"
              style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="text-retro-yellow">ГОТОВ К</span>{' '}
            <span className="text-electric-green">ПРИКЛЮЧЕНИЮ?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйся к тысячам игроков и открой для себя новую эру ретро-гейминга
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-orange to-neon-pink hover:from-neon-pink hover:to-cyber-blue text-dark-space font-black text-xl px-12 py-6 border-0 animate-retro-glow"
          >
            <Icon name="Rocket" className="mr-3" size={24} />
            ПОЕХАЛИ! 🚀
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;