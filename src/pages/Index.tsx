import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>convertingpdf - Free Online PDF Converter & Processing Tools</title>
        <meta
          name="description"
          content="Convert, compress, merge, and split PDF files for free with convertingpdf. Fast, secure, and easy-to-use PDF tools available online."
        />
        <meta
          name="keywords"
          content="PDF converter, PDF tools, convert PDF, compress PDF, merge PDF, split PDF, free PDF tools"
        />
        <link rel="canonical" href="https://convertingpdf.lovable.app/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="convertingpdf - Free PDF Tools" />
        <meta
          property="og:description"
          content="Professional PDF processing tools - Convert, compress, merge and split PDFs online for free."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://convertingpdf.lovable.app/" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="convertingpdf - Free PDF Tools" />
        <meta
          name="twitter:description"
          content="Convert and process PDF files online for free with professional-grade tools."
        />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>
      
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to convertingpdf</h1>
          <p className="text-xl text-muted-foreground">Free Online PDF Tools</p>
        </div>
      </div>
    </>
  );
};

export default Index;
