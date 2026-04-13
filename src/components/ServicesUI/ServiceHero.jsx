export default function ServiceHero({ service }) {
  return (
    <section className="py-12">

      <h1 className="text-4xl font-bold">
        {service.heroTitle}
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl">
        {service.heroDescription}
      </p>

    </section>
  );
}