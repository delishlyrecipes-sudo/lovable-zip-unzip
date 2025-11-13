import { useSeo } from "@/hooks/useSeo";

const Dashboard = () => {
  const { SeoHelmet } = useSeo("dashboard");
  
  return (
    <>
      <SeoHelmet />
      
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
