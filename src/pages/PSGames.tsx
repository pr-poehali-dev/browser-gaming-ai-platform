import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const PSGames = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  const categories = [
    { id: 'all', label: 'ВСЕ ИГРЫ', count: 247 },
    { id: 'action', label: 'ЭКШН', count: 85 },
    { id: 'adventure', label: 'ПРИКЛЮЧЕНИЯ', count: 62 },
    { id: 'rpg', label: 'RPG', count: 43 },
    { id: 'racing', label: 'ГОНКИ', count: 28 },
    { id: 'sport', label: 'СПОРТ', count: 29 }
  ];

  const games = [
    {
      id: 1,
      title: "Spider-Man: Miles Morales",
      category: "action",
      platform: "PS5",
      rating: 9.2,
      userRating: 8.8,
      downloads: "2.5M",
      image: "/img/f51d8c7d-9dd3-4ffa-8e58-d1b78dd829b3.jpg",
      description: "Эпическое приключение нового Человека-паука",
      tags: ["Эксклюзив PS5", "Открытый мир", "Супергерой"],
      aiEnhanced: true,
      status: "available"
    },
    {
      id: 2,
      title: "Horizon Forbidden West",
      category: "adventure",
      platform: "PS5",
      rating: 9.5,
      userRating: 9.1,
      downloads: "3.8M",
      image: "/img/84d640fe-d7df-44b3-90c9-5d7a32d379dd.jpg",
      description: "Путешествие Элой в запретные земли",
      tags: ["Эксклюзив PS5", "Открытый мир", "Постапокалипсис"],
      aiEnhanced: true,
      status: "available"
    },
    {
      id: 3,
      title: "Gran Turismo 7",
      category: "racing",
      platform: "PS5",
      rating: 8.9,
      userRating: 8.5,
      downloads: "1.9M",
      image: "/img/f51d8c7d-9dd3-4ffa-8e58-d1b78dd829b3.jpg",
      description: "Реалистичные автогонки нового поколения",
      tags: ["Симулятор", "Многопользовательская", "VR"],
      aiEnhanced: true,
      status: "available"
    },
    {
      id: 4,
      title: "God of War Ragnarök",
      category: "action",
      platform: "PS5",
      rating: 9.8,
      userRating: 9.6,
      downloads: "4.2M",
      image: "/img/84d640fe-d7df-44b3-90c9-5d7a32d379dd.jpg",
      description: "Эпическое завершение скандинавской саги",
      tags: ["Эксклюзив PS5", "Мифология", "Экшн"],
      aiEnhanced: true,
      status: "featured"
    },
    {
      id: 5,
      title: "FIFA 24",
      category: "sport",
      platform: "PS4/PS5",
      rating: 8.3,
      userRating: 7.9,
      downloads: "5.1M",
      image: "/img/f51d8c7d-9dd3-4ffa-8e58-d1b78dd829b3.jpg",
      description: "Футбольный симулятор с ИИ-улучшениями",
      tags: ["Спорт", "Многопользовательская", "Онлайн"],
      aiEnhanced: false,
      status: "available"
    },
    {
      id: 6,
      title: "Cyberpunk 2077",
      category: "rpg",
      platform: "PS5",
      rating: 8.7,
      userRating: 8.3,
      downloads: "2.8M",
      image: "/img/84d640fe-d7df-44b3-90c9-5d7a32d379dd.jpg",
      description: "Киберпанк RPG в Night City",
      tags: ["Открытый мир", "RPG", "Киберпанк"],
      aiEnhanced: true,
      status: "available"
    }
  ];

  const filteredGames = games.filter(game => 
    selectedCategory === 'all' || game.category === selectedCategory
  ).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'downloads') return parseFloat(b.downloads) - parseFloat(a.downloads);
    return a.title.localeCompare(b.title);
  });

  const getRatingColor = (rating: number) => {
    if (rating >= 9.0) return 'electric-green';
    if (rating >= 8.0) return 'retro-yellow';
    if (rating >= 7.0) return 'neon-orange';
    return 'neon-pink';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-space via-slate-900 to-dark-space text-foreground pt-20">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-neon-pink/10 via-cyber-blue/10 to-electric-green/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 animate-neon-pulse" 
              style={{ fontFamily: 'Orbitron, monospace' }}>
            <span className="text-cyber-blue">PLAYSTATION</span>{' '}
            <span className="text-neon-orange">GAMES</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full border-2 border-neon-pink animate-retro-glow overflow-hidden">
              <img src="/img/84d640fe-d7df-44b3-90c9-5d7a32d379dd.jpg" alt="PS5" className="w-full h-full object-cover" />
            </div>
            <p className="text-xl text-muted-foreground">
              Играй в лучшие игры PS4/PS5 с ИИ-улучшениями прямо в браузере
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Categories */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-electric-green mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              КАТЕГОРИИ
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`
                    font-bold border-2 transition-all duration-300
                    ${selectedCategory === category.id 
                      ? 'bg-neon-orange text-dark-space border-neon-orange animate-retro-glow' 
                      : 'border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-dark-space'
                    }
                  `}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="lg:w-64">
            <h3 className="text-lg font-bold text-electric-green mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              СОРТИРОВКА
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { id: 'rating', label: 'ПО РЕЙТИНГУ' },
                { id: 'downloads', label: 'ПО ПОПУЛЯРНОСТИ' },
                { id: 'title', label: 'ПО АЛФАВИТУ' }
              ].map((sort) => (
                <Button
                  key={sort.id}
                  variant={sortBy === sort.id ? "default" : "outline"}
                  className={`
                    justify-start font-bold border-2 transition-all duration-300
                    ${sortBy === sort.id 
                      ? 'bg-cyber-blue text-dark-space border-cyber-blue' 
                      : 'border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-dark-space'
                    }
                  `}
                  onClick={() => setSortBy(sort.id)}
                >
                  {sort.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <Card 
              key={game.id}
              className={`
                bg-card/50 border-2 transition-all duration-300 group cursor-pointer hover:scale-105
                ${game.status === 'featured' 
                  ? 'border-electric-green hover:shadow-xl hover:shadow-electric-green/20' 
                  : 'border-retro-purple hover:border-neon-pink hover:shadow-xl hover:shadow-neon-pink/20'
                }
              `}
            >
              <CardHeader className="relative p-0">
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlays */}
                  <div className="absolute top-2 left-2 flex gap-2">
                    <Badge className="bg-neon-orange text-dark-space font-bold">
                      {game.platform}
                    </Badge>
                    {game.aiEnhanced && (
                      <Badge className="bg-electric-green text-dark-space font-bold">
                        <Icon name="Brain" size={12} className="mr-1" />
                        ИИ
                      </Badge>
                    )}
                    {game.status === 'featured' && (
                      <Badge className="bg-retro-yellow text-dark-space font-bold animate-neon-pulse">
                        ⭐ ТОП
                      </Badge>
                    )}
                  </div>

                  {/* Rating */}
                  <div className={`absolute top-2 right-2 bg-${getRatingColor(game.rating)}/90 text-dark-space px-2 py-1 rounded font-black`}>
                    {game.rating}
                  </div>
                </div>

                <div className="p-4">
                  <CardTitle className={`text-${getRatingColor(game.rating)} font-black mb-2`} style={{ fontFamily: 'Orbitron, monospace' }}>
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm mb-3">
                    {game.description}
                  </CardDescription>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {game.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-muted-foreground/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-4 pb-4">
                {/* Stats */}
                <div className="flex justify-between items-center mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={14} className="text-cyber-blue" />
                    <span className="text-cyber-blue font-bold">{game.downloads}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Heart" size={14} className="text-neon-pink" />
                    <span className="text-neon-pink font-bold">{game.userRating}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-neon-orange to-neon-pink hover:from-neon-pink hover:to-cyber-blue text-dark-space font-black border-0"
                  >
                    <Icon name="Play" className="mr-2" size={16} />
                    ИГРАТЬ
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-2 border-electric-green text-electric-green hover:bg-electric-green hover:text-dark-space"
                  >
                    <Icon name="Info" size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-retro-purple to-neon-pink hover:from-neon-pink hover:to-cyber-blue text-white font-black text-lg px-8 py-4"
          >
            <Icon name="Download" className="mr-2" size={20} />
            ЗАГРУЗИТЬ ЕЩЁ ИГРЫ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PSGames;