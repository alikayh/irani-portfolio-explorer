
import React, { useState } from 'react';
import CustomButton from './ui/CustomButton';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "پیام شما با موفقیت ارسال شد",
        description: "در اسرع وقت با شما تماس خواهیم گرفت",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="page-section bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-block bg-persian-blue/10 text-persian-blue px-4 py-2 rounded-full mb-4">
            <span className="font-vazir">تماس</span>
          </div>
          <h2 className="text-4xl font-bold text-persian-navy mb-4 font-vazir">
            تماس با من
          </h2>
          <p className="text-persian-gray/80 max-w-2xl mx-auto font-vazir">
            برای شروع همکاری، درخواست مشاوره و یا هر گونه سوال دیگری، می‌توانید با من در ارتباط باشید.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="lg:w-2/5 animate-on-scroll">
            <div className="glass-card rounded-xl p-8 h-full persian-border-pattern">
              <h3 className="text-2xl font-bold text-persian-navy mb-6 font-vazir text-right">
                اطلاعات تماس
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4 text-right" dir="rtl">
                  <div className="flex-shrink-0 w-12 h-12 bg-persian-blue/10 text-persian-blue rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-persian-navy font-vazir">ایمیل</h4>
                    <p className="text-persian-gray/80 font-vazir">info@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-right" dir="rtl">
                  <div className="flex-shrink-0 w-12 h-12 bg-persian-blue/10 text-persian-blue rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-persian-navy font-vazir">تلفن</h4>
                    <p className="text-persian-gray/80 font-vazir">۰۹۱۲۳۴۵۶۷۸۹</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-right" dir="rtl">
                  <div className="flex-shrink-0 w-12 h-12 bg-persian-blue/10 text-persian-blue rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-persian-navy font-vazir">آدرس</h4>
                    <p className="text-persian-gray/80 font-vazir">تهران، خیابان ولیعصر</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-10 border-t border-persian-navy/10">
                <h4 className="text-lg font-semibold text-persian-navy mb-4 font-vazir text-right">
                  ساعات کاری
                </h4>
                <p className="text-persian-gray/80 mb-2 font-vazir text-right">
                  شنبه تا چهارشنبه: ۹ صبح تا ۶ عصر
                </p>
                <p className="text-persian-gray/80 font-vazir text-right">
                  پنجشنبه: ۹ صبح تا ۱ بعد از ظهر
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-3/5 animate-on-scroll">
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold text-persian-navy mb-6 font-vazir text-right">
                ارسال پیام
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 text-right" dir="rtl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-persian-navy mb-2 font-vazir">
                      نام و نام خانوادگی
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-input font-vazir"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-persian-navy mb-2 font-vazir">
                      ایمیل
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input font-vazir"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-persian-navy mb-2 font-vazir">
                    موضوع
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input font-vazir"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-persian-navy mb-2 font-vazir">
                    پیام
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="contact-input font-vazir resize-none"
                    required
                  ></textarea>
                </div>
                
                <div className="text-left" dir="ltr">
                  <CustomButton
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                    icon={<Send size={18} />}
                  >
                    <span className="font-vazir">
                      {isSubmitting ? 'درحال ارسال...' : 'ارسال پیام'}
                    </span>
                  </CustomButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
