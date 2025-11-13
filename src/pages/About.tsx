import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About convertingpdf - Professional PDF Processing Platform</title>
        <meta
          name="description"
          content="Learn about convertingpdf, the professional PDF processing platform trusted by users worldwide. Discover our mission to simplify document management."
        />
        <meta
          name="keywords"
          content="about convertingpdf, PDF platform, document management, PDF tools company"
        />
        <link rel="canonical" href="https://convertingpdf.lovable.app/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About convertingpdf - Our Story & Mission" />
        <meta
          property="og:description"
          content="Learn about convertingpdf and our mission to provide professional PDF tools for everyone."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://convertingpdf.lovable.app/about" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About convertingpdf" />
        <meta
          name="twitter:description"
          content="Discover the story behind convertingpdf and our commitment to excellent PDF tools."
        />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold">About convertingpdf</h1>
          
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              convertingpdf is dedicated to providing professional-grade PDF processing tools 
              that are accessible, fast, and secure. We believe document management should be 
              simple and efficient for everyone.
            </p>
          </section>
          
          <section>
            <h3 className="mb-4 text-xl font-semibold">Why Choose Us?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong>Free & Accessible:</strong> All our tools are free to use</li>
              <li><strong>Secure:</strong> Your documents are processed securely</li>
              <li><strong>Fast:</strong> Lightning-fast processing speeds</li>
              <li><strong>Professional Quality:</strong> Enterprise-grade results</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
