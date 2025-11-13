import { useSeo } from "@/hooks/useSeo";

const About = () => {
  const { SeoHelmet } = useSeo("about");
  
  return (
    <>
      <SeoHelmet />
      
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
