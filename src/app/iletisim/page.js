"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import branches from "@/data/branches";
import BranchSelect from "../components/BranchSelect";

const ease = [0.25, 0.4, 0.25, 1];

export default function IletisimPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://verify.sizeandme.com/api/email/fizyones",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", branch: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-20">
      <div className="bg-sand-50 py-24 md:py-32 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Bize Ulaşın
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-forest-900"
          >
            İletişim ve Randevu
          </motion.h1>
        </div>
      </div>

      <section className="py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-4">
                Randevu Formu
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-8">
                Randevu Alın
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none transition-colors"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Şube Seçin
                  </label>
                  <BranchSelect
                    branches={branches}
                    value={form.branch}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-sage-600 focus:ring-1 focus:ring-sage-600 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-forest-900 text-white font-medium py-3.5 rounded-lg hover:bg-forest-800 transition-colors disabled:opacity-50"
                >
                  {loading ? "Gönderiliyor..." : "Randevu Talebi Gönder"}
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-sm">
                    Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Bir hata oluştu. Lütfen tekrar deneyin veya telefonla iletişime geçin.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Branches */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <p className="text-sage-600 text-sm font-medium tracking-widest uppercase mb-4">
                Şubelerimiz
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900 mb-8">
                Lokasyonlar
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {branches.map((b, i) => (
                  <motion.div
                    key={b.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="rounded-2xl p-8 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-forest-900">
                      {b.name}
                    </h3>
                    <div className="mt-4 space-y-3">
                      <p className="flex items-start gap-3 text-sm text-gray-600">
                        <FaMapMarkerAlt className="w-4 h-4 text-sage-600 shrink-0 mt-0.5" />
                        {b.address}
                      </p>
                      <p className="flex items-center gap-3 text-sm text-gray-600">
                        <FaPhone className="w-4 h-4 text-sage-600 shrink-0" />
                        <a
                          href={`tel:${b.phone.replace(/\s/g, "")}`}
                          className="hover:text-sage-600 transition-colors"
                        >
                          {b.phone}
                        </a>
                      </p>
                      <a
                        href={b.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-sage-600 hover:text-sage-700 transition-colors mt-2"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Haritada Gör
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
