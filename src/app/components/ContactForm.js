'use client';

import { useState } from 'react';
import Link from 'next/link';
import branches from '@/data/branches';

const location = branches[0].name;
const initialForm = { name: '', phone: '', email: '', branch: location, message: '' };
const fieldClass = 'w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-forest-900 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none transition-colors';
const labelClass = 'block text-sm font-medium text-forest-900 mb-1.5';

export default function ContactForm({ idPrefix }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'a849377f-2f48-4c4d-b751-364a46e721fc',
          subject: 'Yeni Randevu Talebi - Fzt. Enes Arıca',
          from_name: form.name,
          ...form,
          branch: location,
        }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-describedby={`${idPrefix}-privacy`} aria-busy={loading}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div>
        <label htmlFor={`${idPrefix}-name`} className={labelClass}>Ad soyad <span className="font-normal">(zorunlu)</span></label>
        <input id={`${idPrefix}-name`} type="text" name="name" autoComplete="name" required value={form.name} onChange={handleChange} className={fieldClass} />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`${idPrefix}-phone`} className={labelClass}>Telefon <span className="font-normal">(zorunlu)</span></label>
          <input id={`${idPrefix}-phone`} type="tel" inputMode="tel" name="phone" autoComplete="tel" required value={form.phone} onChange={handleChange} className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-email`} className={labelClass}>E-posta <span className="font-normal">(isteğe bağlı)</span></label>
          <input id={`${idPrefix}-email`} type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} className={fieldClass} />
        </div>
      </div>
      <div className="rounded-lg border border-sand-200 bg-sand-50 px-4 py-3 text-sm text-gray-700">
        <span className="block font-medium text-forest-900">İletişim noktası</span>
        {location}
        <input type="hidden" name="branch" value={location} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-message`} className={labelClass}>Mesaj <span className="font-normal">(isteğe bağlı)</span></label>
        <textarea id={`${idPrefix}-message`} name="message" rows={3} value={form.message} onChange={handleChange} aria-describedby={`${idPrefix}-privacy`} className={`${fieldClass} resize-y`} />
      </div>
      <p id={`${idPrefix}-privacy`} className="text-sm leading-relaxed text-gray-600">
        Bu form yalnızca iletişim ve randevu bilgisi içindir. Lütfen tanı, rapor, görüntüleme sonucu veya başka sağlık bilgileri paylaşmayın.
        Formdaki bilgiler Web3Forms üzerinden iletilir. Ayrıntılar için <Link href="/kvkk" className="underline underline-offset-4 text-forest-900">KVKK aydınlatma metnini</Link> ve <Link href="/gizlilik-politikasi" className="underline underline-offset-4 text-forest-900">gizlilik politikasını</Link> inceleyebilirsiniz.
      </p>
      <button type="submit" disabled={loading} className="w-full bg-forest-900 text-white font-medium py-3.5 rounded-lg hover:bg-forest-800 transition-colors disabled:opacity-60">
        {loading ? 'Gönderiliyor…' : 'Mesajı gönder'}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status === 'success' && <p className="text-sage-800 text-sm">Mesajınız iletildi. Bu form randevu saatini otomatik olarak onaylamaz.</p>}
        {status === 'error' && <p className="text-red-700 text-sm" role="alert">Mesaj iletilemedi. Tekrar deneyebilir veya +90 554 662 12 45 numarasından ulaşabilirsiniz.</p>}
      </div>
    </form>
  );
}
