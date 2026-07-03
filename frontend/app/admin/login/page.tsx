import { Metadata } from "next";
import Login from "@/components/admin/Login";

export const metadata: Metadata = {
  title: "Jagdish Portfolio | Admin Login",
  description: "Admin Login Page",
};

export default function Admin() {
  return (
    <main>
      <Login />
    </main>
  );
}
