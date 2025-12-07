import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedWork, setSelectedWork] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const works = [
    {
      id: 1,
      type: 'video',
      title: 'Reels для модного бренда',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'video'
    },
    {
      id: 2,
      type: 'post',
      title: 'Вирусный пост для кафе',
      thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
      content: '☕️ Новое утреннее меню!\n\nКогда завтрак - это не просто еда, а целый ритуал. Попробуйте наши авторские круассаны с лососем и сливочным сыром.\n\nБронь столиков по ссылке в шапке профиля 👆',
      category: 'text'
    },
    {
      id: 3,
      type: 'video',
      title: 'TikTok для IT-стартапа',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'video'
    },
    {
      id: 4,
      type: 'post',
      title: 'Stories для фитнес-клуба',
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      content: '💪 Первая тренировка БЕСПЛАТНО\n\nНе откладывай на понедельник то, что можно начать сегодня. Запишись на пробное занятие и получи персональную программу от тренера.\n\n#фитнес #тренировки #здоровье',
      category: 'text'
    },
    {
      id: 5,
      type: 'video',
      title: 'Промо для ресторана',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      category: 'video'
    },
    {
      id: 6,
      type: 'post',
      title: 'Вовлекающий пост для салона',
      thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
      content: '✨ Время преображений!\n\nКакую стрижку ты бы выбрала: классическое каре или дерзкий пикси?\n\nПиши в комментариях 👇 А мы поможем определиться с идеальным образом.',
      category: 'text'
    }
  ];

  const filteredWorks = activeFilter === 'all' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight">D&K</div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('works')} className="text-sm hover:text-primary transition-colors">Работы</button>
            <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(155,135,245,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,70,239,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
            Dasha & Ksusha
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-4 text-muted-foreground">
            SMM, который работает
          </p>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Создаем контент, от которого не пройдут мимо
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('works')}
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full group"
          >
            Смотреть наши работы
            <Icon name="ArrowDown" size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </section>

      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center animate-fade-in">Кто мы?</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 animate-slide-in-left">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl font-bold mb-6">
                К
              </div>
              <h3 className="text-2xl font-semibold mb-4">Ксюша</h3>
              <p className="text-muted-foreground leading-relaxed">
                Текст. Стратегия. Веду каналы так, чтобы аудитория ждала каждый пост. Превращаю идеи в вирусный контент с душой.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-secondary/50 transition-all duration-300 animate-slide-in-right">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-4xl font-bold mb-6">
                Д
              </div>
              <h3 className="text-2xl font-semibold mb-4">Даша</h3>
              <p className="text-muted-foreground leading-relaxed">
                Видео. Режиссура. Снимаю так, чтобы хотелось пересматривать. Каждый кадр — это история, которая цепляет.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Вместе мы создаем <span className="text-primary font-semibold">цепляющий SMM-контент под ключ</span> — 
              от стратегии до реализации
            </p>
          </div>
        </div>
      </section>

      <section id="works" className="py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">Наши работы</h2>
          
          <div className="flex justify-center gap-4 mb-16 flex-wrap">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
              className="rounded-full"
            >
              Все работы
            </Button>
            <Button
              variant={activeFilter === 'video' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('video')}
              className="rounded-full"
            >
              <Icon name="Video" size={16} className="mr-2" />
              Видео
            </Button>
            <Button
              variant={activeFilter === 'text' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('text')}
              className="rounded-full"
            >
              <Icon name="FileText" size={16} className="mr-2" />
              Тексты + Графика
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work, index) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedWork(work)}
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    src={work.thumbnail} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {work.type === 'video' ? (
                      <Icon name="Play" size={48} className="text-white" />
                    ) : (
                      <Icon name="FileText" size={48} className="text-white" />
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-white font-semibold text-lg">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 text-center">Что мы делаем</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                <Icon name="TrendingUp" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">SMM-сопровождение</h3>
              <p className="text-muted-foreground">
                Ведение аккаунтов, стратегия, контент-план. Растим охваты и превращаем подписчиков в клиентов.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-secondary/20 rounded-full flex items-center justify-center">
                <Icon name="Video" size={32} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Видеопродакшн</h3>
              <p className="text-muted-foreground">
                Ролики для Reels, TikTok, Stories. Промо-видео, которые останавливают скролл и запоминаются.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
                <Icon name="Pen" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Копирайтинг</h3>
              <p className="text-muted-foreground">
                Посты с характером, сценарии для видео, слоганы. Пишем так, чтобы читали до конца.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Готовы сделать ваш аккаунт заметным?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Напишите нам, и мы обсудим, как вывести ваш SMM на новый уровень
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 rounded-full">
              <Icon name="Send" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
              <Icon name="Mail" size={20} className="mr-2" />
              Отправить Email
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold">D&K</div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Send" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Dasha & Ksusha. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogClose className="absolute right-4 top-4 z-50" />
          {selectedWork?.type === 'video' ? (
            <div className="aspect-video">
              <iframe
                src={selectedWork.videoUrl}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : selectedWork?.type === 'post' ? (
            <div className="p-6">
              <img 
                src={selectedWork.thumbnail} 
                alt={selectedWork.title}
                className="w-full rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">{selectedWork.title}</h3>
              <p className="text-lg whitespace-pre-line leading-relaxed">
                {selectedWork.content}
              </p>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
