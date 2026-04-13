export default function FreeAuditSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Get a <span className="text-pink-600">Free Growth Audit</span> Today
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Unlock hidden opportunities in your business with expert analysis and proven strategies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white">
            <h3 className="text-xl font-bold text-black">
              Free Website Audit
            </h3>
            <p className="mt-2 text-gray-600">
              We analyze your website performance, SEO issues, and conversion gaps.
            </p>

            <div className="mt-4 text-sm text-pink-600 font-semibold">
              ⚡ Limited Slots Available
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-pink-600 transition">
              Book Free Audit
            </button>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white">
            <h3 className="text-xl font-bold text-black">
              Strategy Call
            </h3>
            <p className="mt-2 text-gray-600">
              Get a 1-on-1 expert consultation to scale your marketing and sales.
            </p>

            <div className="mt-4 text-sm text-pink-600 font-semibold">
              🔥 High Demand Service
            </div>

            <button className="mt-6 w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-black transition">
              Book Strategy Call
            </button>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white">
            <h3 className="text-xl font-bold text-black">
              Competitor Analysis
            </h3>
            <p className="mt-2 text-gray-600">
              Discover what your competitors are doing and how to beat them.
            </p>

            <div className="mt-4 text-sm text-pink-600 font-semibold">
              🚀 Limited Time Offer
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-pink-600 transition">
              Get Analysis Report
            </button>
          </div>
        </div>

        {/* Bottom urgency strip */}
        <div className="mt-12 text-center bg-black text-white py-6 px-4 rounded-2xl">
          <p className="text-lg md:text-xl font-semibold">
            ⚠️ Hurry! Free consultations are limited this week only.
          </p>
          <p className="text-gray-300 mt-2">
            Secure your slot before they are fully booked.
          </p>
        </div>

      </div>
    </section>
  );
}