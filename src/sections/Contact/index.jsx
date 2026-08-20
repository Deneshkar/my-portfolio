import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const contactInfo = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'deneshkar015@gmail.com',
    href: 'mailto:deneshkar015@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Deneshkar Punyamoorthy',
    href: 'https://www.linkedin.com/in/deneshkar-punyamoorthy-450931350',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: '@Deneshkar',
    href: 'https://github.com/Deneshkar',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors]     = useState({});
  const [status, setStatus]     = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim() || formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
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
      setTimeout(() => {
        setStatus('success');
        setStatusMessage('Message received! (demo mode — add VITE_WEB3FORMS_KEY for real emails)');
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: accessKey, ...formData }),
      });
      const result = await res.json();
      if (res.status === 200 || result.success) {
        setStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection.');
    }
  };

  const inputBase = (field) =>
    `w-full rounded-xl border bg-[#070412]/60 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-[#6b21a8]/50 ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500/80 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]'
        : 'border-violet-500/15 focus:border-violet-500/50 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]'
    }`;

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-14 text-center"
        >
          <p className="section-label mb-3 justify-center">Contact</p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-black text-white leading-none">
            Let's{' '}
            <span className="text-gradient">Build Together</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-[15px] text-[#a78bfa]/60 leading-7">
            Open to internship opportunities for 2026. Got a project or just want to chat?
            Drop me a message — I'd love to hear from you.
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-10 items-start">
          {/* Left: contact info */}
          <Motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {contactInfo.map(({ icon, label, value, href }, i) => (
              <Motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-2xl border border-violet-500/10 bg-[#0e0920]/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/25 hover:bg-violet-500/5"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-violet-500/15 bg-violet-500/8 text-xl transition-all duration-300 group-hover:border-violet-500/30 group-hover:scale-105">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-violet-400/50">{label}</p>
                  <p className="mt-0.5 text-sm font-medium text-[#c4b5fd] truncate">{value}</p>
                </div>
                <svg className="ml-auto w-4 h-4 text-violet-500/30 group-hover:text-violet-400 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Motion.a>
            ))}

            {/* Availability card */}
            <Motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl border border-emerald-500/15 bg-emerald-500/5 p-5 flex items-center gap-3"
            >
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <p className="text-sm text-emerald-300/80">
                <span className="font-semibold text-emerald-300">Available</span> for internship roles starting 2026
              </p>
            </Motion.div>
          </Motion.div>

          {/* Right: form */}
          <Motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-violet-500/10 bg-[#0e0920]/80 p-6 lg:p-8 backdrop-blur-xl shadow-2xl shadow-violet-900/20 relative overflow-hidden"
          >
            {/* Form top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-violet-500/10 blur-2xl" />

            <div className="relative grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-violet-400/60">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="John Doe"
                  className={inputBase('name')}
                />
                {errors.name && <span className="mt-1 block text-[11px] text-red-400">{errors.name}</span>}
              </label>

              <label className="block">
                <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-violet-400/60">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  placeholder="john@example.com"
                  className={inputBase('email')}
                />
                {errors.email && <span className="mt-1 block text-[11px] text-red-400">{errors.email}</span>}
              </label>
            </div>

            <div className="relative mt-4">
              <label className="block">
                <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.3em] text-violet-400/60">Message</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputBase('message')} resize-none`}
                />
                {errors.message && <span className="mt-1 block text-[11px] text-red-400">{errors.message}</span>}
              </label>
            </div>

            <AnimatePresence mode="wait">
              {statusMessage && (
                <Motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mt-4 rounded-xl border p-4 text-sm ${
                    status === 'success'
                      ? 'border-emerald-500/25 bg-emerald-500/8 text-emerald-300'
                      : 'border-red-500/25 bg-red-500/8 text-red-300'
                  }`}
                >
                  {statusMessage}
                </Motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={status === 'submitting'}
              data-cursor
              className={`mt-5 w-full btn-primary justify-center ${
                status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {status === 'submitting' ? (
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending…
                </div>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </Motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;