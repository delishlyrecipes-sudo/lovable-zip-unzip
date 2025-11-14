import { useSeo } from "@/hooks/useSeo";

const Edit = () => {
  const { SeoHelmet } = useSeo("edit");
  
  return (
    <>
      <SeoHelmet />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold">Edit PDF Online</h1>
          
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Free Online PDF Editor</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Edit your PDF documents online with our professional PDF editor. Add text, images, annotations, and signatures without installing any software.
            </p>
          </section>
          
          <section>
            <h3 className="mb-4 text-xl font-semibold">PDF Editing Features</h3>
            <ul className="space-y-3 text-muted-foreground list-disc list-inside">
              <li>Add and edit text</li>
              <li>Insert images and shapes</li>
              <li>Annotate and highlight</li>
              <li>Add signatures</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Edit;
