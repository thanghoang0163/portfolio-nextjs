import { setDocumentTitle } from "~/utils/common";

export const metadata = {
  title: setDocumentTitle("Resume"),
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
