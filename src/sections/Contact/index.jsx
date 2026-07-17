import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setStatusMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      // Simulate successful form submission for demo/development if no key is configured
      console.log('Form data submitted:', formData);
      console.info(
        'Tip: To receive actual emails, create a free Web3Forms account and add VITE_WEB3FORMS_KEY to your .env file.'
      );
      
      setTimeout(() => {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully (demo mode).');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="border-b border-[#223042] py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2.2rem,6vw,4rem)] font-display font-black leading-none text-[#f5f8fc]"
        >
          Get In Touch
        </Motion.h2>

        <Motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#9fb0c6]"
        >
          I&apos;m open to internship opportunities for 2026. If you want to talk about a role, a project, or an idea, send a message.
        </Motion.p>

        <Motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-10 rounded-2xl border border-[#223042] bg-[#0d1521] p-5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.2)] lg:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#9fb0c6]">Your Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'submitting'}
                placeholder="John Doe"
                className={`w-full rounded-lg border bg-[#08111d] px-4 py-3 text-sm text-[#f5f8fc] outline-none transition-colors placeholder:text-[#5f6f86] ${
                  errors.name
                    ? 'border-red-500/50 focus:border-red-500'
                    : 'border-[#223042] focus:border-[#31d7ff]'
                }`}
              />
              {errors.name && (
                <span className="mt-1 block text-xs text-red-400">{errors.name}</span>
              )}
            </label>

            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#9fb0c6]">Email Address</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'submitting'}
                placeholder="john@example.com"
                className={`w-full rounded-lg border bg-[#08111d] px-4 py-3 text-sm text-[#f5f8fc] outline-none transition-colors placeholder:text-[#5f6f86] ${
                  errors.email
                    ? 'border-red-500/50 focus:border-red-500'
                    : 'border-[#223042] focus:border-[#31d7ff]'
                }`}
              />
              {errors.email && (
                <span className="mt-1 block text-xs text-red-400">{errors.email}</span>
              )}
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-[#9fb0c6]">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === 'submitting'}
              rows="6"
              placeholder="Let's build something amazing..."
              className={`w-full resize-none rounded-lg border bg-[#08111d] px-4 py-3 text-sm text-[#f5f8fc] outline-none transition-colors placeholder:text-[#5f6f86] ${
                errors.message
                  ? 'border-red-500/50 focus:border-red-500'
                  : 'border-[#223042] focus:border-[#31d7ff]'
              }`}
            />
            {errors.message && (
              <span className="mt-1 block text-xs text-red-400">{errors.message}</span>
            )}
          </label>

          <AnimatePresence mode="wait">
            {statusMessage && (
              <Motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className={`mt-4 rounded-lg border p-4 text-sm ${
                  status === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                    : 'border-red-500/30 bg-red-500/10 text-red-300'
                }`}
              >
                {statusMessage}
                {!import.meta.env.VITE_WEB3FORMS_KEY && status === 'success' && (
                  <p className="mt-1 text-[11px] opacity-80">
                    * To receive actual emails from this form, set <code>VITE_WEB3FORMS_KEY</code> in a <code>.env</code> file.
                  </p>
                )}
              </Motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === 'submitting'}
            data-cursor
            className={`mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#31d7ff] px-5 py-3 text-sm font-semibold text-[#06111d] transition-all duration-300 ${
              status === 'submitting'
                ? 'opacity-70 cursor-not-allowed'
                : 'hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(49,215,255,0.3)]'
            }`}
          >
            {status === 'submitting' ? (
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin text-[#06111d]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </Motion.form>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-[#9fb0c6]">
          <a href="https://github.com/Deneshkar" target="_blank" rel="noreferrer" data-cursor className="hover:text-[#31d7ff]">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/deneshkar-punyamoorthy-450931350" target="_blank" rel="noreferrer" data-cursor className="hover:text-[#31d7ff]">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;