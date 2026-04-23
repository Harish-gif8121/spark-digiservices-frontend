import { notFound } from 'next/navigation';
import { blogs } from '@/data/blogs';

export default async function BlogDetail({ params }) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);
  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-bold text-indigo-700">
              {blog.category}
            </span>
            <span className="text-sm text-gray-500">{blog.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 max-w-3xl">
            {blog.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl leading-relaxed">
            {blog.desc}
          </p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200">
          <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover" />
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column (2/3 width) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Horizontal scrollable metrics */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                📈 Key Performance Metrics
              </h2>
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-4 min-w-max">
                  {blog.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-200 p-4 w-48 shadow-sm hover:shadow-md transition"
                    >
                      <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide">
                        {metric.label}
                      </div>
                      <div className="mt-1 text-2xl font-black text-gray-900 flex items-baseline gap-1">
                        {metric.value}
                        {metric.trend === 'up' && (
                          <span className="text-sm text-emerald-600">▲</span>
                        )}
                        {metric.trend === 'down' && (
                          <span className="text-sm text-rose-600">▼</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Benchmarks Table - bold headings and values */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                📊 Industry Benchmarks
              </h2>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">
                        Metric
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-700">
                        Industry Avg
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-bold text-indigo-700">
                        Achieved
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {blog.benchmarks.map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-bold text-gray-800">
                          {item.metric}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.industryAvg}</td>
                        <td className="px-6 py-4 text-sm font-bold text-emerald-700">
                          {item.achieved}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Strategic Insights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                💡 Strategic Insights
              </h2>
              <div className="space-y-3">
                {blog.insights.map((insight, idx) => (
                  <div key={idx} className="flex gap-3 bg-white p-4 rounded-xl border border-gray-200">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-sm font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Bold headings & values everywhere */}
          <div className="space-y-8">
            {/* Extra Stats Grid */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                ⚡ Extra Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {blog.extraStats.map((stat, idx) => (
                  <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-xs font-bold text-indigo-600 uppercase">{stat.label}</div>
                    <div className="text-xl font-black text-gray-800 mt-1">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actionable Takeaways with bold inline headings */}
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-lg font-bold text-indigo-900 mb-3">🎯 Actionable Takeaways</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-bold text-indigo-800">Ad Spend Efficiency:</span>{' '}
                  <span className="text-gray-700">Save 31% with negative keyword audits</span>
                </li>
                <li>
                  <span className="font-bold text-indigo-800">CTR Boost:</span>{' '}
                  <span className="text-gray-700">+2.1x via RSA asset groups</span>
                </li>
                <li>
                  <span className="font-bold text-indigo-800">Conversion Uplift:</span>{' '}
                  <span className="text-gray-700">+31% from audience signals</span>
                </li>
                <li>
                  <span className="font-bold text-indigo-800">Time to Rank:</span>{' '}
                  <span className="text-gray-700">47 days vs industry 89 days</span>
                </li>
              </ul>
            </div>

            {/* Highlighted impact number */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 text-center shadow-sm">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                Overall Impact
              </div>
              <div className="text-3xl font-black text-indigo-700 mt-1">
                {blog.metrics.find((m) => m.label.includes('ROI'))?.value || '+2.4x'}
              </div>
              <div className="text-xs text-gray-500 mt-1">average growth in 90 days</div>
            </div>

            {/* Another bold stat */}
            <div className="bg-gray-800 rounded-xl p-6 text-white">
              <div className="text-sm font-bold text-gray-300 uppercase">Did You Know?</div>
              <p className="mt-2 text-white">
                <strong className="text-indigo-300">Businesses using these strategies</strong> saw an
                average of <strong className="text-indigo-300">2.4x faster growth</strong> in qualified
                leads within 90 days.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom extra data row - bold values */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center sm:text-left">
            🔥 More Performance Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
              <div className="text-xs font-bold text-indigo-500 uppercase">ROAS</div>
              <div className="text-2xl font-black text-gray-800 mt-1">3.8x</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
              <div className="text-xs font-bold text-indigo-500 uppercase">Lead Quality Score</div>
              <div className="text-2xl font-black text-gray-800 mt-1">A-</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
              <div className="text-xs font-bold text-indigo-500 uppercase">Engagement Rate</div>
              <div className="text-2xl font-black text-gray-800 mt-1">+67%</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
              <div className="text-xs font-bold text-indigo-500 uppercase">Time Savings</div>
              <div className="text-2xl font-black text-gray-800 mt-1">12h/week</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}