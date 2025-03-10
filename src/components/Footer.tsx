
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-persian-navy text-white py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-right">
            <h2 className="text-2xl font-bold mb-2 font-vazir">نمونه‌کارها<span className="text-persian-turquoise">.</span></h2>
            <p className="text-white/70 max-w-md font-vazir">
              طراحی و توسعه وب‌سایت‌ها و اپلیکیشن‌های مدرن با تمرکز بر تجربه کاربری عالی
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:info@example.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0 font-vazir">
            © ۱۴۰۳ تمامی حقوق محفوظ است
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/70 font-vazir">
            <a href="#projects" className="hover:text-white transition-colors">پروژه‌ها</a>
            <a href="#skills" className="hover:text-white transition-colors">مهارت‌ها</a>
            <a href="#contact" className="hover:text-white transition-colors">تماس</a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 w-12 h-12 bg-persian-turquoise text-white rounded-full flex items-center justify-center hover:bg-persian-turquoise/90 transition-colors"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
