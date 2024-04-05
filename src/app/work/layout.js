import { setDocumentTitle } from "~/utils/common";

export const metadata = {
  title: setDocumentTitle("Work"),
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
