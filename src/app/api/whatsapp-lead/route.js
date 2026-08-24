import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // =========================================
    // 1. GET FORM DATA
    // =========================================

    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      service,
      message,
      source,
    } = body;

    console.log("Received lead:", {
      name,
      email,
      phone,
      company,
      service,
      message,
      source,
    });

    // =========================================
    // 2. SERVER-SIDE VALIDATION
    // =========================================

    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is required",
        },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required",
        },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone is required",
        },
        { status: 400 }
      );
    }

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Service is required",
        },
        { status: 400 }
      );
    }

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is required",
        },
        { status: 400 }
      );
    }

    // =========================================
    // 3. GET WHATSAPP ENVIRONMENT VARIABLES
    // =========================================

    const accessToken =
      process.env.WHATSAPP_ACCESS_TOKEN;

    const phoneNumberId =
      process.env.WHATSAPP_PHONE_NUMBER_ID;

    const recipientNumber =
      process.env.WHATSAPP_RECIPIENT_NUMBER;

    // =========================================
    // 4. CHECK ENVIRONMENT VARIABLES
    // =========================================

    if (!accessToken) {
      console.error(
        "WHATSAPP_ACCESS_TOKEN is missing"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "WhatsApp access token is missing",
        },
        { status: 500 }
      );
    }

    if (!phoneNumberId) {
      console.error(
        "WHATSAPP_PHONE_NUMBER_ID is missing"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "WhatsApp phone number ID is missing",
        },
        { status: 500 }
      );
    }

    if (!recipientNumber) {
      console.error(
        "WHATSAPP_RECIPIENT_NUMBER is missing"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "WhatsApp recipient number is missing",
        },
        { status: 500 }
      );
    }

    // =========================================
    // 5. CREATE WHATSAPP MESSAGE
    // =========================================

    const whatsappMessage = `
🚨 NEW WEBSITE LEAD

━━━━━━━━━━━━━━━━━━

👤 Name:
${name}

📧 Email:
${email}

📱 Phone:
${phone}

🏢 Company:
${company || "Not provided"}

🛠️ Service:
${service}

💬 Message:
${message}

🌐 Source:
${source || "unknown"}

━━━━━━━━━━━━━━━━━━
Generated from website
`.trim();

    // =========================================
    // 6. WHATSAPP CLOUD API
    // =========================================

    const whatsappApiUrl =
      `https://graph.facebook.com/v23.0/${phoneNumberId}/messages`;

    console.log(
      "Sending lead to WhatsApp..."
    );

    // =========================================
    // 7. SEND MESSAGE
    // =========================================

    const response = await fetch(
      whatsappApiUrl,
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${accessToken}`,

          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          messaging_product:
            "whatsapp",

          to: recipientNumber,

          type: "text",

          text: {
            preview_url: false,
            body: whatsappMessage,
          },
        }),
      }
    );

    // =========================================
    // 8. GET WHATSAPP RESPONSE
    // =========================================

    const result =
      await response.json();

    console.log(
      "WhatsApp API response:",
      result
    );

    // =========================================
    // 9. HANDLE WHATSAPP ERROR
    // =========================================

    if (!response.ok) {
      console.error(
        "WhatsApp API Error:",
        result
      );

      return NextResponse.json(
        {
          success: false,

          message:
            "WhatsApp API failed",

          error: result,
        },
        {
          status:
            response.status || 500,
        }
      );
    }

    // =========================================
    // 10. SUCCESS
    // =========================================

    return NextResponse.json(
      {
        success: true,

        message:
          "Lead sent to WhatsApp successfully",

        whatsapp: result,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // =========================================
    // 11. CATCH ERRORS
    // =========================================

    console.error(
      "WhatsApp lead error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Something went wrong",

        error:
          error?.message ||
          "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}