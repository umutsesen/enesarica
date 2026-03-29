'use client'

import { useState } from 'react'
import branches from '@/data/branches'
import BranchSelect from './BranchSelect'

export default function HomeContact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    branch: '',
    message: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const res = await fetch('https://verify.sizeandme.com/api/email/fizyones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', branch: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 md:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="lg:sticky lg:top-32">
            <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              İletişim
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-6">
              İyileşme Yolculuğunuz Bir Mesaj Uzağınızda
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Sorularınızı yanıtlamak, durumunuzu değerlendirmek ve size en uygun tedavi planını oluşturmak için buradayız. Formu doldurun, en kısa sürede size dönüş yapalım.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-sage-600/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Pazartesi – Cumartesi: 09:00 – 19:00
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-sage-600/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <a href="tel:+905446621245" className="hover:text-sage-600 transition-colors">+90 544 662 12 45</a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <h3 className="text-xl font-semibold text-forest-900 mb-6">Randevu Al</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ad Soyad"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-posta"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none transition-colors text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Telefon"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none transition-colors text-sm"
                />
                <BranchSelect
                  branches={branches}
                  value={form.branch}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="Mesajınız (opsiyonel)"
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sage-600 text-white font-medium py-3.5 rounded-lg hover:bg-sage-700 transition-colors disabled:opacity-50 text-sm"
              >
                {loading ? 'Gönderiliyor...' : 'Randevu Talebi Gönder'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-sm text-center">Mesajınız gönderildi. En kısa sürede dönüş yapacağız.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm text-center">Bir hata oluştu. Lütfen tekrar deneyin.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
