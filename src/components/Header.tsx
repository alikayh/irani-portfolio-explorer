
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import CustomButton from './ui/CustomButton';
import { Menu, X, ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    // Animation for elements after page load
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <header className="relative" id="home">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-persian-navy font-vazir transition-all duration-300">
            نمونه‌کارها<span className="text-persian-turquoise">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-vazir">
            <button onClick={() => scrollToSection('projects')} className="text-persian-gray hover:text-persian-navy transition-colors ml-8">
              پروژه‌ها
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-persian-gray hover:text-persian-navy transition-colors ml-8">
              مهارت‌ها
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-persian-gray hover:text-persian-navy transition-colors">
              تماس
            </button>
            <CustomButton 
              onClick={() => scrollToSection('contact')}
              variant="primary"
              size="sm"
            >
              همکاری
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-persian-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 pt-20",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <div className="flex flex-col items-center space-y-6 font-vazir text-lg">
            <button onClick={() => scrollToSection('projects')} className="text-persian-gray hover:text-persian-navy transition-colors">
              پروژه‌ها
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-persian-gray hover:text-persian-navy transition-colors">
              مهارت‌ها
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-persian-gray hover:text-persian-navy transition-colors">
              تماس
            </button>
            <CustomButton 
              onClick={() => scrollToSection('contact')}
              variant="primary"
              size="md"
            >
              همکاری
            </CustomButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl w-full glass-card rounded-2xl p-8 md:p-14 mt-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-persian-blue/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-persian-turquoise/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="flex flex-col lg:flex-row items-center text-center lg:text-right">
            <div className="lg:w-3/5 z-10 order-2 lg:order-1">
              <div className="inline-block bg-persian-blue/10 text-persian-blue px-4 py-2 rounded-full mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <span className="font-vazir">توسعه‌دهنده فول‌استک</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-persian-navy mb-6 font-vazir leading-tight animate-fade-in" style={{ animationDelay: '0.5s' }}>
                علی برادر خدام خسروشاهی <br />
                <span className="text-persian-turquoise">خلاقانه و کاربردی</span>
              </h1>
              <p className="text-persian-gray/80 text-lg mb-8 max-w-xl font-vazir leading-relaxed animate-fade-in" style={{ animationDelay: '0.7s' }}>
                من در زمینه طراحی و توسعه وب‌سایت‌ها و اپلیکیشن‌های مدرن تخصص دارم. با تمرکز بر تجربه کاربری عالی و کدنویسی تمیز، پروژه‌های شما را به واقعیت تبدیل می‌کنم.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <CustomButton 
                  variant="primary" 
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  icon={<ArrowDown size={20} />}
                >
                  <span className="font-vazir">مشاهده نمونه‌کارها</span>
                </CustomButton>
                <CustomButton 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  <span className="font-vazir">تماس با من</span>
                </CustomButton>
              </div>
              
              <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '1.1s' }}>
                <a href="#" className="text-persian-gray/70 hover:text-persian-navy transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/ali-khosroshahi-0b0759246/" className="text-persian-gray/70 hover:text-persian-navy transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="#" className="text-persian-gray/70 hover:text-persian-navy transition-colors">
                  <Twitter size={22} />
                </a>
              </div>
            </div>
            
            <div className="lg:w-2/5 relative mb-10 lg:mb-0 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '1.3s' }}>
              {/* Hero Image with Persian-inspired border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-persian-blue to-persian-turquoise animate-spin-slow opacity-20"></div>
                <div className="absolute inset-3 rounded-full bg-white overflow-hidden persian-border-pattern">
                  <img
                    src="https://rashay.ir/data/avatars/m/0/8.jpg?1741602862"
                    alt="علی برادر خدام خسروشاهی"
                    className="w-full h-full object-cover rounded-full p-1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
