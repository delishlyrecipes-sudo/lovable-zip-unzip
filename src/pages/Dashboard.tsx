import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - convertingpdf PDF Tools</title>
        <meta
          name="description"
          content="Access your convertingpdf dashboard. Manage your PDF documents, view processing history, and access all PDF tools in one place."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://convertingpdf.lovable.app/dashboard" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "convertingpdf Dashboard",
            "description": "User dashboard for managing PDF documents and accessing tools"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold">Dashboard</h1>
          
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Your PDF Tools Dashboard</h2>
            <p className="text-lg text-muted-foreground">
              Manage your PDF documents and access all available tools in one place.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
