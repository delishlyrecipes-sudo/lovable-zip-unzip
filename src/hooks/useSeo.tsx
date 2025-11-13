import { Helmet } from "react-helmet-async";

export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  robots?: string;
  structuredData?: object;
}

const seoMetadataMap: Record<string, SeoMetadata> = {
  home: {
    title: "convertingpdf - Free Online PDF Converter & Processing Tools",
    description: "Convert, compress, merge, and split PDF files for free with convertingpdf. Fast, secure, and easy-to-use PDF tools available online.",
    keywords: "PDF converter, PDF tools, convert PDF, compress PDF, merge PDF, split PDF, free PDF tools",
    canonical: "https://convertingpdf.lovable.app/",
    ogTitle: "convertingpdf - Free PDF Tools",
    ogDescription: "Professional PDF processing tools - Convert, compress, merge and split PDFs online for free.",
    ogType: "website",
    twitterTitle: "convertingpdf - Free PDF Tools",
    twitterDescription: "Convert and process PDF files online for free with professional-grade tools.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "convertingpdf",
      "description": "Free online PDF converter and processing tools",
      "url": "https://convertingpdf.lovable.app",
      "applicationCategory": "UtilitiesApplication",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  },
  about: {
    title: "About convertingpdf - Professional PDF Processing Platform",
    description: "Learn about convertingpdf, the professional PDF processing platform trusted by users worldwide. Discover our mission to simplify document management.",
    keywords: "about convertingpdf, PDF platform, document management, PDF tools company",
    canonical: "https://convertingpdf.lovable.app/about",
    ogTitle: "About convertingpdf - Our Story & Mission",
    ogDescription: "Learn about convertingpdf and our mission to provide professional PDF tools for everyone.",
    ogType: "website",
    twitterTitle: "About convertingpdf",
    twitterDescription: "Discover the story behind convertingpdf and our commitment to excellent PDF tools.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About convertingpdf",
      "description": "Learn about convertingpdf, the professional PDF processing platform",
      "mainEntity": {
        "@type": "Organization",
        "name": "convertingpdf",
        "description": "Professional PDF processing tools for everyone",
        "url": "https://convertingpdf.lovable.app"
      }
    }
  },
  contact: {
    title: "Contact convertingpdf - Get Help & Support",
    description: "Contact convertingpdf for support, questions, or feedback. We're here to help with all your PDF processing needs.",
    keywords: "contact convertingpdf, PDF support, customer service, help, feedback",
    canonical: "https://convertingpdf.lovable.app/contact",
    ogTitle: "Contact convertingpdf",
    ogDescription: "Get in touch with convertingpdf for support and inquiries.",
    ogType: "website",
    twitterTitle: "Contact convertingpdf",
    twitterDescription: "Reach out to our support team for help with PDF tools.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact convertingpdf",
      "description": "Contact page for convertingpdf support and inquiries"
    }
  },
  dashboard: {
    title: "Dashboard - convertingpdf PDF Tools",
    description: "Access your convertingpdf dashboard. Manage your PDF documents, view processing history, and access all PDF tools in one place.",
    canonical: "https://convertingpdf.lovable.app/dashboard",
    robots: "noindex, nofollow",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "convertingpdf Dashboard",
      "description": "User dashboard for managing PDF documents and accessing tools"
    }
  },
  notFound: {
    title: "404 - Page Not Found | convertingpdf",
    description: "The page you're looking for doesn't exist. Return to convertingpdf to access our PDF processing tools.",
    canonical: "https://convertingpdf.lovable.app",
    robots: "noindex, nofollow"
  }
};

export const useSeo = (page: keyof typeof seoMetadataMap) => {
  const metadata = seoMetadataMap[page];

  const SeoHelmet = () => (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      {metadata.keywords && <meta name="keywords" content={metadata.keywords} />}
      {metadata.robots && <meta name="robots" content={metadata.robots} />}
      <link rel="canonical" href={metadata.canonical} />
      
      {/* Open Graph */}
      {metadata.ogTitle && <meta property="og:title" content={metadata.ogTitle} />}
      {metadata.ogDescription && <meta property="og:description" content={metadata.ogDescription} />}
      {metadata.ogType && <meta property="og:type" content={metadata.ogType} />}
      <meta property="og:url" content={metadata.canonical} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {metadata.twitterTitle && <meta name="twitter:title" content={metadata.twitterTitle} />}
      {metadata.twitterDescription && <meta name="twitter:description" content={metadata.twitterDescription} />}
      
      {/* Structured Data */}
      {metadata.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(metadata.structuredData)}
        </script>
      )}
    </Helmet>
  );

  return { metadata, SeoHelmet };
};
