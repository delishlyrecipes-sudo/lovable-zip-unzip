import { useSeo } from "@/hooks/useSeo";

const Compress = () => {
  const { SeoHelmet } = useSeo("compress");
  
  return (
    <>
      <SeoHelmet />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold">Compress PDF</h1>
          
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Free PDF Compression Tool</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Reduce PDF file size online for free. Our compression tool optimizes your PDFs without losing quality, making them easier to share and store.
            </p>
          </section>
          
          <section>
            <h3 className="mb-4 text-xl font-semibold">How to Compress PDF</h3>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Upload your PDF file</li>
              <li>Choose compression level</li>
              <li>Download compressed PDF</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  );
};

export default Compress;
