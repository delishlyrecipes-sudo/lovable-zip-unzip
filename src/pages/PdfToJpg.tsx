import { useSeo } from "@/hooks/useSeo";

const PdfToJpg = () => {
  const { SeoHelmet } = useSeo("pdfToJpg");
  
  return (
    <>
      <SeoHelmet />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold">PDF to JPG Converter</h1>
          
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Convert PDF to JPG Images</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Convert your PDF documents to high-quality JPG images online for free. Our converter transforms each PDF page into a separate JPG file with excellent quality.
            </p>
          </section>
          
          <section>
            <h3 className="mb-4 text-xl font-semibold">How to Convert PDF to JPG</h3>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Upload your PDF file</li>
              <li>Select image quality settings</li>
              <li>Download JPG images</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  );
};

export default PdfToJpg;
