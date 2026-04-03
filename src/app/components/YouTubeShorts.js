"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaPlay } from 'react-icons/fa';

const ease = [0.25, 0.4, 0.25, 1];

const exerciseShorts = [
  {
    id: "lGgUpnG-5Bg",
    title: "Omurganı özgür bırak! Fizyoterapist dokunuşuyla güç ve nefes",
    url: "https://www.youtube.com/shorts/lGgUpnG-5Bg",
  },
  {
    id: "HRB_wt01NQY",
    title: "Pilates: Omurga sağlığı, güç ve ruhsal huzur!",
    url: "https://www.youtube.com/shorts/HRB_wt01NQY",
  },
  {
    id: "Ku0EzqJ2kD8",
    title: "Sırt ağrın varsa bu pilates combo'yu dene!",
    url: "https://www.youtube.com/shorts/Ku0EzqJ2kD8",
  },
  {
    id: "oc6Te4aWrNg",
    title: "Skolyozda Schroth yöntemi",
    url: "https://www.youtube.com/shorts/oc6Te4aWrNg",
  },
  {
    id: "jG6nM2aOjG4",
    title: "Skolyozda Schroth yöntemi — Duruş bozukluğu",
    url: "https://www.youtube.com/shorts/jG6nM2aOjG4",
  },
  {
    id: "xCX41LNBJ2w",
    title: "Skolyozda pilates egzersizleri",
    url: "https://www.youtube.com/shorts/xCX41LNBJ2w",
  },
  {
    id: "6bsPQ9ExuVk",
    title: "Manuel terapi uygulaması",
    url: "https://www.youtube.com/shorts/6bsPQ9ExuVk",
  },
  {
    id: "cVAmXGoSeEg",
    title: "Manuel Terapi uygulamamızdan bir kesit",
    url: "https://www.youtube.com/shorts/cVAmXGoSeEg",
  },
];

const exerciseVideos = [
  {
    id: "aUX2A-SqSWE",
    title: "Bel Ağrıları İçin Evde Yapabileceğiniz Etkili Egzersizler",
    url: "https://www.youtube.com/watch?v=aUX2A-SqSWE",
  },
  {
    id: "09_dP_KL_04",
    title: "Pilates'de oblikler için en uygun basit egzersizler",
    url: "https://www.youtube.com/watch?v=09_dP_KL_04",
  },
  {
    id: "fhrsqtY1370",
    title: "Pilates'de karın kası gelişimi için en uygun basit egzersizler",
    url: "https://www.youtube.com/watch?v=fhrsqtY1370",
  },
];

const videos = [
  {
    id: "Qh3dOevyzxs",
    title: "Yalova Fizyoterapi Tanıtım",
    url: "https://youtu.be/Qh3dOevyzxs",
  },
  {
    id: "_6Oh5PdAQKg",
    title: "Yalova Fizyoterapi Sağlıklı Yaşam",
    url: "https://youtu.be/_6Oh5PdAQKg",
  },
  {
    id: "GyB8qMQlzzM",
    title: "Yalova Fizyoterapi Tedavi Süreci",
    url: "https://youtu.be/GyB8qMQlzzM",
  },
  {
    id: "5rVTtKA8dMc",
    title: "Yalova Fizyoterapi Klinik",
    url: "https://youtu.be/5rVTtKA8dMc",
  },
  {
    id: "ABRLO8FIdMk",
    title: "Kliniğimizden Görüntüler",
    url: "https://youtu.be/ABRLO8FIdMk",
  },
  {
    id: "kunOW-qxMQw",
    title: "Yalova Fizyoterapi Rehabilitasyon",
    url: "https://youtu.be/kunOW-qxMQw",
  },
];

const ShortCard = ({ video, index }) => (
  <motion.a
    href={video.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.06, ease }}
    viewport={{ once: true }}
  >
    <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${video.id}/oar2.jpg`}
        alt={video.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaPlay className="w-4 h-4 text-forest-900 ml-0.5" />
        </div>
      </div>
    </div>
    <h3 className="mt-3 text-sm font-medium text-forest-900 line-clamp-2 group-hover:text-sage-600 transition-colors">
      {video.title}
    </h3>
  </motion.a>
);

const VideoCard = ({ video, index }) => (
  <motion.a
    href={video.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.08, ease }}
    viewport={{ once: true }}
  >
    <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
        alt={video.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaPlay className="w-5 h-5 text-forest-900 ml-0.5" />
        </div>
      </div>
    </div>
    <h3 className="mt-3 text-sm font-medium text-forest-900 line-clamp-2 group-hover:text-sage-600 transition-colors">
      {video.title}
    </h3>
  </motion.a>
);

export default function YouTubeShorts() {
  const [tab, setTab] = useState("videos");

  return (
    <section className="py-24 md:py-32 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-sage-600 text-xs font-semibold tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <FaYoutube className="w-4 h-4" />
              YouTube
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-forest-900">
              Videolarım
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@fizyones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 text-white rounded-lg font-medium hover:bg-forest-800 transition-colors text-sm w-fit"
          >
            <FaYoutube className="w-4 h-4" />
            Kanalı Ziyaret Et
          </a>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 mb-10">
          <button
            onClick={() => setTab("videos")}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              tab === "videos"
                ? "bg-forest-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Videolar
          </button>
          <button
            onClick={() => setTab("exercises")}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              tab === "exercises"
                ? "bg-forest-900 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Egzersizler
          </button>
        </div>

        {/* Content */}
        {tab === "exercises" ? (
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {exerciseShorts.map((video, index) => (
                <ShortCard key={video.id} video={video} index={index} />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {exerciseVideos.map((video, index) => (
                <VideoCard key={video.id} video={video} index={index} />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
