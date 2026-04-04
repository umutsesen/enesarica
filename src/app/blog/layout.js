export const metadata = {
  title: "Blog | Fzt. Enes Arıca",
  description:
    "Fizyoterapi, egzersiz ve sağlıklı yaşam hakkında güncel yazılar. Uzman fizyoterapist Enes Arıca'nın blog yazıları.",
  alternates: {
    canonical: "https://www.fizyoterapistenesarica.com/blog",
  },
  openGraph: {
    title: "Blog | Fzt. Enes Arıca",
    description:
      "Fizyoterapi, egzersiz ve sağlıklı yaşam hakkında güncel yazılar.",
    url: "https://www.fizyoterapistenesarica.com/blog",
    images: [{ url: "https://www.fizyoterapistenesarica.com/imgs/enes-arica.jpeg", width: 2048, height: 1368, alt: "Fzt. Enes Arıca - Blog" }],
  },
};

export default function BlogLayout({ children }) {
  return children;
}
