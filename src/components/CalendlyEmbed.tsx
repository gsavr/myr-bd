// "use client";
// import { useEffect } from "react";

// export const CalendlyEmbed: React.FC = () => {
//   useEffect(() => {
//     const head = document.querySelector("head");
//     const script = document.createElement("script");
//     script.setAttribute(
//       "src",
//       "https://assets.calendly.com/assets/external/widget.js",
//     );
//     if (head != null) head.appendChild(script);
//   }, []);

//   return (
//     <div
//       className="calendly-inline-widget h-full w-full"
//       data-url={
//         "https://www.calendly.com/myrianbellydancing?hide_gdpr_banner=1"
//       }
//     ></div>
//   );
// };
