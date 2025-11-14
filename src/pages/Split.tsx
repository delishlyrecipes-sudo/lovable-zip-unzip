import { useSeo } from "@/hooks/useSeo";

const Split = () => {
  const { SeoHelmet } = useSeo("split");
  
  return (
    <>
      <SeoHelmet />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold">Split PDF Files</h1>
          
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Extract Pages from PDF</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Split PDF files online for free. Our tool lets you extract specific pages from PDFs or separate a large PDF into multiple smaller documents.
            </p>
          </section>
          
          <section>
            <h3 className="mb-4 text-xl font-semibold">How to Split PDF</h3>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Upload your PDF file</li>
              <li>Select pages to extract</li>
              <li>Download split PDF files</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  );
};

export default Split;
