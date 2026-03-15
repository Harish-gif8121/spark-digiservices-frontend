import site from "@/data/site.json";

export default function AboutPage() {

  const { name, description, tagline, benefits } = site;

  return (
    <main className="mt-24">

      {/* HERO */}
      <section className="container mx-auto px-6 py-16 text-center">

        <h1 className="text-4xl font-bold">
          {name}
        </h1>

        <p className="mt-4 text-xl text-blue-600">
          {tagline}
        </p>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>

      </section>


      {/* BENEFITS */}
      <section className="bg-gray-50 py-16">

        <div className="container mx-auto px-6">

          <p className="text-blue-600 font-semibold">
            {benefits.tag}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {benefits.title}{" "}
            <span className="text-blue-600">
              {benefits.highlight}
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl">
            {benefits.subtitle}
          </p>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

            {benefits.items.map((item) => (

              <div
                key={item.number}
                className="bg-white p-6 rounded-xl shadow"
              >

                <h3 className="text-2xl font-bold text-blue-600">
                  {item.number}
                </h3>

                <h4 className="font-semibold mt-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 mt-2 text-sm">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}