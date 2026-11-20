import Script from "next/script";
import { markup } from "@/content/markup";

// The page is plain markup plus one browser script (public/site.js),
// so every demo behaves exactly as in the approved mockup.
export default function Page() {
  return (
    <>
      <div id="site" dangerouslySetInnerHTML={{ __html: markup }} />
      <Script src="/site.js" strategy="afterInteractive" />
    </>
  );
}
