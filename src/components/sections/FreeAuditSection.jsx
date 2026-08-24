export default function FreeAuditSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Claim<span className="text-blue-500"> FreeAudit</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Get expert insights, identify hidden revenue gaps, and create a clear path to sustainable growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">

          {/* Card 1 */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white flex flex-col">
            <h3 className="text-xl font-bold text-black">
              Website Performance Audit
            </h3>

            <p className="mt-2 text-gray-600 flex-grow">
              Identify what's holding your website back and uncover opportunities for more leads and sales.
            </p>

            <div className="mt-4 text-sm text-blue-500 font-semibold">
              ⚡ Free for a Limited Time
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-blue-500 transition">
              Book Free Audit
            </button>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white flex flex-col">
            <h3 className="text-xl font-bold text-black">
              Spark Session
            </h3>

            <p className="mt-2 text-gray-600 flex-grow">
              Let's discuss how to take your business to the next level.
            </p>

            <div className="mt-4 text-sm text-blue-500 font-semibold">
              🔥 One-On-One Session
            </div>

            <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-black transition">
              Book Strategy Call
            </button>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white flex flex-col">
            <h3 className="text-xl font-bold text-black">
              Competitor Analysis
            </h3>

            <p className="mt-2 text-gray-600 flex-grow">
              Discover what your competitors are doing and how to beat them.
            </p>

            <div className="mt-4 text-sm text-blue-500 font-semibold">
              🚀 Access Analysis Report
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-blue-500 transition">
              Get Analysis Report
            </button>
          </div>

        </div>

        {/* Bottom urgency strip */}
        <div className="mt-12 text-center bg-black text-white py-6 px-4 rounded-2xl">
          <p className="text-lg md:text-xl font-semibold">
            ⚠️ Claim your free consultation before spots fill up.
          </p>
          <p className="text-gray-300 mt-2">
            Reserve your spot before they're gone.
          </p>
        </div>

      </div>
    </section>
  );
}