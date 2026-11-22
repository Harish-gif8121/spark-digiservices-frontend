"use client";

import { useState } from "react";
import WebsiteAuditForm from "../popups/WebsiteAuditForm";
import PopupForm from "../popups/PopupForm"; // your existing popup form

export default function FreeAuditSection() {
  const [auditOpen, setAuditOpen] = useState(false);
  const [strategyOpen, setStrategyOpen] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Claim<span className="text-blue-500"> FreeAudit</span>
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg">
              Get expert insights, identify hidden revenue gaps, and create a
              clear path to sustainable growth.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1 — Audit Request Form */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white flex flex-col">
              <h3 className="text-xl font-bold text-black">
                Website Performance Audit
              </h3>
              <p className="mt-2 text-gray-600 flex-grow">
                Identify what's holding your website back and uncover
                opportunities for more leads and sales.
              </p>
              <div className="mt-4 text-sm text-blue-500 font-semibold">
                ⚡ Free for a Limited Time
              </div>
              <button
                onClick={() => setAuditOpen(true)}
                className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-blue-500 transition"
              >
                Book Free Audit
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">
                Opens: Audit Request Form
              </p>
            </div>

            {/* Card 2 — Strategy Call (existing popup) */}
            <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition bg-white flex flex-col">
              <h3 className="text-xl font-bold text-black">Spark Session</h3>
              <p className="mt-2 text-gray-600 flex-grow">
                Let's discuss how to take your business to the next level.
              </p>
              <div className="mt-4 text-sm text-blue-500 font-semibold">
                🔥 One-On-One Session
              </div>
              <button
                onClick={() => setStrategyOpen(true)}
                className="mt-6 w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-black transition"
              >
                Book Strategy Call
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">
                Opens: Get Free Quote Form
              </p>
            </div>

            {/* Card 3 — Analytics Report Form */}
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
              <button
                onClick={() => setReportOpen(true)}
                className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-blue-500 transition"
              >
                Get Analysis Report
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">
                Opens: Get Analytics Report Form
              </p>
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

      {/* ===== Modals ===== */}

      {/* Audit Request Form */}
      <WebsiteAuditForm
        open={auditOpen}
        onClose={() => setAuditOpen(false)}
        formType="audit"
      />

      {/* Get Analytics Report Form */}
      <WebsiteAuditForm
        open={reportOpen}
        onClose={() => setReportOpen(false)}
        formType="report"
      />

      {/* Existing PopupForm for Strategy Call */}
      <PopupForm
        open={strategyOpen}
        onClose={() => setStrategyOpen(false)}
        source="free-audit-strategy-call"
        data={{ title: "Get Free Quote" }}
      />
    </>
  );
}