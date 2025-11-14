import { useSeo } from "@/hooks/useSeo";

const PdfToWord = () => {
  const { SeoHelmet } = useSeo("pdfToWord");
  
  return (
    <>
      <SeoHelmet />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold">PDF to Word Converter</h1>
          
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Convert PDF to Editable Word Documents</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Convert your PDF files to editable Word (DOCX) documents online for free. Our converter preserves formatting, tables, images, and text layout.
            </p>
          </section>
          
          <section>
            <h3 className="mb-4 text-xl font-semibold">How to Convert PDF to Word</h3>
            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Upload your PDF file</li>
              <li>Wait for automatic conversion</li>
              <li>Download Word document</li>
            </ol>
          </section>
        </div>
      </div>
    </>
  );
};

export default PdfToWord;
