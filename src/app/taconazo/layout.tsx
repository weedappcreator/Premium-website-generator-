import type { Metadata } from "next";
import { Bangers, Nunito } from "next/font/google";

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taconazo24 | Tacos Artesanales 24/7 en Santo Domingo",
  description:
    "Tortillas artesanales hechas al momento, sin gluten. Abierto 24 horas en Av. Tiradentes esq. Roberto Pastoriza #10, Santo Domingo. Los mejores tacos de la ciudad.",
  keywords: [
    "tacos", "taconazo", "taconazo24", "tacos artesanales", "sin gluten",
    "comida mexicana", "Santo Domingo", "24 horas", "tortillas artesanales",
    "tacos santo domingo", "comida callejera mexicana",
  ],
  openGraph: {
    title: "Taconazo24 | Tacos Artesanales 24/7",
    description:
      "Tortillas artesanales hechas al momento, sin gluten. Abierto 24 horas en Av. Tiradentes, Santo Domingo.",
    type: "website",
    locale: "es_DO",
    siteName: "Taconazo24",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taconazo24 | Tacos Artesanales 24/7",
    description:
      "Tortillas artesanales hechas al momento, sin gluten. Abierto 24 horas en Santo Domingo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Taconazo24",
  description:
    "Tortillas artesanales hechas al momento, sin gluten. Abierto 24 horas en Santo Domingo.",
  url: "https://taconazo24.com",
  telephone: "+18091234567",
  servesCuisine: "Mexican",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Tiradentes esq. Roberto Pastoriza #10",
    addressLocality: "Santo Domingo",
    addressRegion: "Distrito Nacional",
    addressCountry: "DO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.473,
    longitude: -69.932,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "7319",
    bestRating: "5",
  },
  servesDiet: ["GlutenFreeDiet"],
  menu: {
    "@type": "Menu",
    name: "Taconazo24 Menu",
    description: "Tacos, burritos, quesadillas, tostadas, and drinks",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Tacos",
        description: "Handcrafted tacos on nixtamal corn tortillas",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Tacos al Pastor", description: "Adobo-marinated pork with grilled pineapple", offers: { "@type": "Offer", price: "295", priceCurrency: "DOP" } },
          { "@type": "MenuItem", name: "Tacos de Birria", description: "Slow-cooked beef in aromatic chile broth", offers: { "@type": "Offer", price: "395", priceCurrency: "DOP" } },
        ],
      },
    ],
  },
};

export default function TaconazoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${bangers.variable} ${nunito.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </div>
  );
}
