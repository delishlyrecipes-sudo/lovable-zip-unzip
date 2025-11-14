import { useSeo } from "@/hooks/useSeo";

const Merge = () => {
  const { SeoHelmet } = useSeo("merge");
  
  return (
    <>
      <SeoHelmet />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold">Merge PDF Files</h1>
          
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Combine Multiple PDFs into One</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Merge PDF files online for free. Our tool combines multiple PDF documents into a single file quickly and securely, preserving quality and formatting.
            </p>
          </section>
          
          <section>
            <h3 className="mb-4 text-xl font-semibold">How to Merge PDFs</h3>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Upload multiple PDF files</li>
              <li>Arrange files in desired order</li>
              <li>Click merge and download</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  );
};

export default Merge;
