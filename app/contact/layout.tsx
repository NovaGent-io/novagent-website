// app/contact/layout.tsx

import type { ReactNode } from "react";

export const metadata = {
  title: "Contact Us – NovaGent",
  description: "Reach out to NovaGent for AI-powered solutions and support",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  // You can wrap children with any layout UI (e.g., header/footer) if needed.
  // For now, we just render the page content directly.
  return <>{children}</>;
}
