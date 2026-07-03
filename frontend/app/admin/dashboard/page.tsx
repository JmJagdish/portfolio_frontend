import { Metadata } from "next";
import AdminDashboard from "@/components/admin/DashBoard";

export const metadata: Metadata = {
  title: "Jagdish Portfolio | Admin Dashboard",
  description: "Admin Dashboard Page",
};

export default function Admin() {
  return (
    <main>
      <AdminDashboard />
    </main>
  );
}
