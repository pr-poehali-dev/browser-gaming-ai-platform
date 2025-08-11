import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'ГЛАВНАЯ', icon: 'Home' },
    { id: 'emulators', label: 'ЭМУЛЯТОРЫ', icon: 'Gamepad2' },
    { id: 'ps-games', label: 'PS4/PS5 ИГРЫ', icon: 'Monitor' },
    { id: 'ai-features', label: 'ИИ-ФУНКЦИИ', icon: 'Brain' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-space/95 backdrop-blur-md border-b-2 border-neon-orange">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-black text-neon-orange animate-neon-pulse" style={{ fontFamily: 'Orbitron, monospace' }}>
              RETRO
            </div>
            <div className="text-2xl font-black text-cyber-blue" style={{ fontFamily: 'Orbitron, monospace' }}>
              ARCADE
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                className={`
                  font-bold px-4 py-2 border-2 transition-all duration-300
                  ${currentPage === item.id 
                    ? 'bg-neon-orange text-dark-space border-neon-orange animate-retro-glow' 
                    : 'border-transparent text-foreground hover:border-neon-orange hover:text-neon-orange'
                  }
                `}
                onClick={() => onPageChange(item.id)}
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                <Icon name={item.icon} size={16} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden text-neon-orange border-2 border-neon-orange"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon name={isOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  className={`
                    justify-start font-bold border-2 transition-all duration-300
                    ${currentPage === item.id 
                      ? 'bg-neon-orange text-dark-space border-neon-orange' 
                      : 'border-transparent text-foreground hover:border-neon-orange hover:text-neon-orange'
                    }
                  `}
                  onClick={() => {
                    onPageChange(item.id);
                    setIsOpen(false);
                  }}
                  style={{ fontFamily: 'Orbitron, monospace' }}
                >
                  <Icon name={item.icon} size={16} className="mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;