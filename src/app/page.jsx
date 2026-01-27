import site from "@/data/site.json";
import FormTrigger from "@/components/FormTrigger";

export default function HomePage() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">{site.name}</h1>
      <p className="mt-4">{site.description}</p>

      <FormTrigger />
    </main>
  );
}
