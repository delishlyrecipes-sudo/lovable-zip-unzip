import { useSeo } from "@/hooks/useSeo";

const Index = () => {
  const { SeoHelmet } = useSeo("home");
  
  return (
    <>
      <SeoHelmet />
      
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Welcome to convertingpdf</h1>
          <p className="text-xl text-muted-foreground">Free Online PDF Tools</p>
        </div>
      </div>
    </>
  );
};

export default Index;
