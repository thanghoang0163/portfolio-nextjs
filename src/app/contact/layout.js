import { setDocumentTitle } from "~/utils/common";

export const metadata = {
  title: setDocumentTitle("Contact"),
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
