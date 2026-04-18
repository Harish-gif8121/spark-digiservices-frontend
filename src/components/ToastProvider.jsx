"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      gutter={10}
      toastOptions={{
        duration: 3000,
        style: {
          zIndex: 10000000,
          borderRadius: "12px",
          background: "#ffffff",
          color: "#111827",
          padding: "14px 16px",
          fontSize: "14px",
          fontWeight: "500",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.05)",
          border: "1px solid #e5e7eb",
        },

        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#ecfdf5",
          },
          style: {
            borderLeft: "4px solid #22c55e",
          },
        },

        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fef2f2",
          },
          style: {
            borderLeft: "4px solid #ef4444",
          },
        },
      }}
      containerStyle={{
        top: 20,
        right: 20,
        zIndex: 10000000,
      }}
    />
  );
}