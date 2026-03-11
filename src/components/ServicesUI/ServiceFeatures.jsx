export default function ServiceFeatures({ features }) {
  return (
    <section className="py-12 ">

      <h2 className="text-2xl font-semibold mb-6">
        Key Features
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-gray-50"
          >
            {feature}
          </div>
        ))}
      </div>

    </section>
  );
}