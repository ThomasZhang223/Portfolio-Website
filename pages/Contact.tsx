import React, { useState } from 'react';
import { Github, Linkedin, FileText, Send, Loader2 } from 'lucide-react';
import TerminalCard from '../components/TerminalCard';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS Configuration from environment variables
    const serviceID = "service_byvqshg";
    const templateID = "template_o16mk1n";
    const publicKey = "JZDsXSvxWmXNSKkyH";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center space-y-2 mb-12">
        <h1 className="text-3xl font-bold text-white">Contact</h1>
        <p className="text-accent">$ ./send_message.sh</p>
      </div>

      <TerminalCard title="contact_form.sh">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Info Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
              <p className="text-muted leading-relaxed">
                I'm always interested in new opportunities. Whether you have a question or just want to say hi, I'll get back to you in no time!
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-accent font-medium text-sm">$ echo $EMAIL</p>
              <div className="inline-block border border-accent/30 bg-accent/10 px-4 py-2 rounded text-accent font-mono">
                thomaszhangdev@gmail.com
              </div>
            </div>

            <div className="space-y-4 pt-4">
               <p className="text-accent font-medium text-sm">$ ls ./socials</p>
               <div className="flex flex-col gap-4">
                  <a 
                    href="/Portfolio-Website/assets/General_resume.pdf" 
                    target="_blank"
                    className="flex items-center gap-3 text-muted hover:text-accent transition-colors w-fit group"
                  >
                    <FileText size={18} className="group-hover:scale-110 transition-transform" />
                    <span>Download Resume</span>
                  </a>
                  <a 
                    href="https://github.com/ThomasZhang223" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 text-muted hover:text-accent transition-colors w-fit group"
                  >
                    <Github size={18} className="group-hover:scale-110 transition-transform" />
                    <span>github.com/alexchen</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/thomas-zhang-022a9b21b/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 text-muted hover:text-accent transition-colors w-fit group"
                  >
                    <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                    <span>linkedin.com/in/alexchen</span>
                  </a>
               </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-bg/50 p-6 rounded border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-accent text-sm font-bold">name:</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-bg border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors font-mono text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-accent text-sm font-bold">email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-bg border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors font-mono text-sm"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-accent text-sm font-bold">message:</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-bg border border-border rounded px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors font-mono resize-none text-sm"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full font-bold py-3 rounded transition-all transform flex items-center justify-center gap-2 text-sm ${
                  status === 'success' 
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-accent hover:bg-green-600 text-bg active:scale-[0.98]'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                 {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                 ) : status === 'success' ? (
                    'Message Sent!'
                 ) : status === 'error' ? (
                    'Error - Try Again'
                 ) : (
                    <>
                      ./send.sh
                      <Send size={16} />
                    </>
                 )}
              </button>
            </form>
          </div>

        </div>
      </TerminalCard>
    </div>
  );
};

export default Contact;