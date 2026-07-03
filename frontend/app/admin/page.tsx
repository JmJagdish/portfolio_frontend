import { Metadata } from "next";
import AdminPage from "@/components/admin/AdminHome";


export const metadata: Metadata = {
  title: "Jagdish Portfolio | Admin Home",
  description: "Admin Home Page",
};

export default function Admin() {
  return (
    <main>
      <AdminPage />
    </main>
  );
}
