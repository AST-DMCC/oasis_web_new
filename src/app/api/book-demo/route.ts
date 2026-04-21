// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// function escapeHtml(value: string) {
//   return value
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;")
//     .replace(/'/g, "&#039;");
// }

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const fullName = body.fullName?.trim() || "";
//     const workEmail = body.workEmail?.trim() || "";
//     const companyName = body.companyName?.trim() || "";
//     const jobTitle = body.jobTitle?.trim() || "";
//     const phone = body.phone?.trim() || "";
//     const teamSize = body.teamSize?.trim() || "";
//     const message = body.message?.trim() || "";

//     if (!fullName || !workEmail || !companyName || !jobTitle) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Please fill all required fields.",
//         },
//         { status: 400 },
//       );
//     }

//     if (
//       !process.env.RESEND_API_KEY ||
//       !process.env.BOOK_DEMO_TO_EMAIL ||
//       !process.env.BOOK_DEMO_FROM_EMAIL
//     ) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Email configuration is missing.",
//         },
//         { status: 500 },
//       );
//     }

    
//     const emailHtml = `
//   <div style="margin:0;padding:0;background:#f6f4ff;font-family:Arial,Helvetica,sans-serif;">
    
//     <div style="max-width:640px;margin:0 auto;padding:30px 16px;">
      
//       <!-- Card -->
//       <div style="background:#ffffff;border-radius:12px;border:1px solid #e5ddff;overflow:hidden;">
        
//         <!-- Header -->
//         <div style="padding:20px 24px;border-bottom:1px solid #eee;">
//           <h2 style="margin:0;font-size:20px;color:#111;font-weight:600;">
//             Demo Request
//           </h2>
//           <p style="margin:6px 0 0;font-size:13px;color:#666;">
//             A user has requested a demo from the website.
//           </p>
//         </div>

//         <!-- Main Info -->
//         <div style="padding:20px 24px;">
          
//           <p style="margin:0 0 14px;font-size:14px;color:#444;">
//             <strong>${escapeHtml(fullName)}</strong> has submitted a demo request.
//           </p>

//           <table style="width:100%;border-collapse:collapse;font-size:14px;">
            
//             <tr>
//               <td style="padding:8px 0;color:#777;width:140px;">Email</td>
//               <td style="padding:8px 0;color:#111;">${escapeHtml(workEmail)}</td>
//             </tr>

//             <tr>
//               <td style="padding:8px 0;color:#777;">Company</td>
//               <td style="padding:8px 0;color:#111;">${escapeHtml(companyName)}</td>
//             </tr>

//             <tr>
//               <td style="padding:8px 0;color:#777;">Job Title</td>
//               <td style="padding:8px 0;color:#111;">${escapeHtml(jobTitle)}</td>
//             </tr>

//             <tr>
//               <td style="padding:8px 0;color:#777;">Phone</td>
//               <td style="padding:8px 0;color:#111;">${phone || "-"}</td>
//             </tr>

//             <tr>
//               <td style="padding:8px 0;color:#777;">Team Size</td>
//               <td style="padding:8px 0;color:#111;">${teamSize || "-"}</td>
//             </tr>

//           </table>

//           ${
//             message
//               ? `
//               <div style="margin-top:20px;">
//                 <p style="margin:0 0 6px;font-size:13px;color:#777;">Message</p>
//                 <div style="padding:12px 14px;background:#f7f5ff;border-radius:8px;color:#333;font-size:14px;line-height:1.6;">
//                   ${escapeHtml(message)}
//                 </div>
//               </div>
//             `
//               : ""
//           }

//         </div>

//         <!-- Footer -->
//         <div style="padding:14px 24px;border-top:1px solid #eee;background:#faf9ff;">
//           <p style="margin:0;font-size:12px;color:#888;">
//             Sent from OASIS website • Demo Request Form
//           </p>
//         </div>

//       </div>

//     </div>

//   </div>
// `;

//     const result = await resend.emails.send({
//       from: process.env.BOOK_DEMO_FROM_EMAIL,
//       to: [process.env.BOOK_DEMO_TO_EMAIL],
//       replyTo: workEmail,
//       subject: `New Demo Request from ${fullName}`,
//       html: emailHtml,
//     });

//     if (result.error) {
//       return NextResponse.json(
//         {
//           success: false,
//           message: "Failed to send email.",
//           error: result.error,
//         },
//         { status: 500 },
//       );
//     }

//     return NextResponse.json({
//       success: true,
//       message: "Demo request submitted successfully.",
//     });
//   } catch (error) {
//     return NextResponse.json(
//       {
//         success: false,
//         message: "Something went wrong while sending the email.",
//       },
//       { status: 500 },
//     );
//   }
// }


import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = body.fullName?.trim() || "";
    const workEmail = body.workEmail?.trim() || "";
    const companyName = body.companyName?.trim() || "";
    const jobTitle = body.jobTitle?.trim() || "";
    const phone = body.phone?.trim() || "";
    const teamSize = body.teamSize?.trim() || "";
    const message = body.message?.trim() || "";

    if (!fullName || !workEmail || !companyName || !jobTitle) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 },
      );
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.BOOK_DEMO_TO_EMAIL ||
      !process.env.BOOK_DEMO_FROM_EMAIL
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Email configuration is missing.",
        },
        { status: 500 },
      );
    }

    const emailHtml = `
  <div style="margin:0;padding:0;background:#f6f4ff;font-family:Arial,Helvetica,sans-serif;">
    
    <div style="max-width:640px;margin:0 auto;padding:30px 16px;">
      
      <!-- Card -->
      <div style="background:#ffffff;border-radius:12px;border:1px solid #e5ddff;overflow:hidden;">
        
        <!-- Header -->
        <div style="padding:20px 24px;border-bottom:1px solid #eee;">
          <h2 style="margin:0;font-size:20px;color:#111;font-weight:600;">
            Demo Request
          </h2>
          <p style="margin:6px 0 0;font-size:13px;color:#666;">
            A user has requested a demo from the website.
          </p>
        </div>

        <!-- Main Info -->
        <div style="padding:20px 24px;">
          
          <p style="margin:0 0 14px;font-size:14px;color:#444;">
            <strong>${escapeHtml(fullName)}</strong> has submitted a demo request.
          </p>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            
            <tr>
              <td style="padding:8px 0;color:#777;width:140px;">Email</td>
              <td style="padding:8px 0;color:#111;">${escapeHtml(workEmail)}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;color:#777;">Company</td>
              <td style="padding:8px 0;color:#111;">${escapeHtml(companyName)}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;color:#777;">Job Title</td>
              <td style="padding:8px 0;color:#111;">${escapeHtml(jobTitle)}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;color:#777;">Phone</td>
              <td style="padding:8px 0;color:#111;">${phone || "-"}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;color:#777;">Team Size</td>
              <td style="padding:8px 0;color:#111;">${teamSize || "-"}</td>
            </tr>

          </table>

          ${
            message
              ? `
              <div style="margin-top:20px;">
                <p style="margin:0 0 6px;font-size:13px;color:#777;">Message</p>
                <div style="padding:12px 14px;background:#f7f5ff;border-radius:8px;color:#333;font-size:14px;line-height:1.6;">
                  ${escapeHtml(message)}
                </div>
              </div>
            `
              : ""
          }

        </div>

        <!-- Footer -->
        <div style="padding:14px 24px;border-top:1px solid #eee;background:#faf9ff;">
          <p style="margin:0;font-size:12px;color:#888;">
            Sent from OASIS website • Demo Request Form
          </p>
        </div>

      </div>

    </div>

  </div>
`;

    const result = await resend.emails.send({
      from: process.env.BOOK_DEMO_FROM_EMAIL,
      to: [process.env.BOOK_DEMO_TO_EMAIL],
      replyTo: workEmail,
      subject: `New Demo Request from ${fullName}`,
      html: emailHtml,
    });

    if (result.error) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send email.",
          error: result.error,
        },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Demo request submitted successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while sending the email.",
      },
      { status: 500 },
    );
  }
}