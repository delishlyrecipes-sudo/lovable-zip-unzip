import { useSeo } from "@/hooks/useSeo";

const Contact = () => {
  const { SeoHelmet } = useSeo("contact");
  
  return (
    <>
      <SeoHelmet />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>
          
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
            <p className="mb-6 text-lg text-muted-foreground">
              Have questions or need support? We're here to help with all your PDF processing needs.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Support</h3>
                <p className="text-muted-foreground">
                  For technical support and questions about our tools, please reach out through our support channels.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-muted-foreground">
                  View our project on GitHub:{" "}
                  <a 
                    href="https://github.com/younes-alhyan/convertingpdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    github.com/younes-alhyan/convertingpdf
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">Feedback</h3>
                <p className="text-muted-foreground">
                  We value your feedback and suggestions for improving our PDF tools.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
