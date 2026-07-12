// "use client";

// import { useEffect, useState } from "react";
// import { Plus, Pencil, Trash2, X, Sparkles, Loader2 } from "lucide-react";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// interface Skill {
//   _id: string;
//   name: string;
//   category: string;
//   level: number;
// }

// type SkillFormState = {
//   name: string;
//   category: string;
//   level: number;
// };

// const emptyForm: SkillFormState = { name: "", category: "Frontend", level: 70 };

// const categories = ["Frontend", "Backend", "Database", "Tools", "Other"];

// export default function SkillManager() {
//   const [skills, setSkills] = useState<Skill[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState("");

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [form, setForm] = useState<SkillFormState>(emptyForm);

//   const fetchSkills = async () => {
//     try {
//       setLoading(true);
//       const res = await fetch(`${API_URL}/skills`, { credentials: "include" });
//       const data = await res.json();
//       setSkills(data.skills || data.data || []);
//     } catch {
//       setError("Failed to load skills");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchSkills();
//   }, []);

//   const openCreateModal = () => {
//     setEditingId(null);
//     setForm(emptyForm);
//     setIsModalOpen(true);
//   };

//   const openEditModal = (skill: Skill) => {
//     setEditingId(skill._id);
//     setForm({ name: skill.name, category: skill.category, level: skill.level });
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setForm(emptyForm);
//     setEditingId(null);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSaving(true);
//     setError("");

//     try {
//       const url = editingId ? `${API_URL}/skills/${editingId}` : `${API_URL}/skills`;
//       const method = editingId ? "PUT" : "POST";

//       const res = await fetch(url, {
//         method,
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       if (!res.ok) throw new Error("Could not save skill");

//       await fetchSkills();
//       closeModal();
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : "Something went wrong");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm("Delete this skill?")) return;
//     try {
//       await fetch(`${API_URL}/skills/${id}`, { method: "DELETE", credentials: "include" });
//       setSkills((prev) => prev.filter((s) => s._id !== id));
//     } catch {
//       setError("Failed to delete skill");
//     }
//   };

//   const grouped = categories
//     .map((category) => ({ category, items: skills.filter((s) => s.category === category) }))
//     .filter((group) => group.items.length > 0);

//   return (
//     <section className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,168,232,0.12)] backdrop-blur-xl">
//       <div className="mb-6 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a8e8]/10 text-[#00a8e8]">
//             <Sparkles size={22} />
//           </div>
//           <div>
//             <h2 className="text-xl font-bold text-slate-800">Skills</h2>
//             <p className="text-sm text-slate-500">{skills.length} listed</p>
//           </div>
//         </div>

//         <button
//           onClick={openCreateModal}
//           className="flex items-center gap-2 rounded-full bg-[#00a8e8] px-5 py-2.5 font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,0.35)] transition hover:-translate-y-1"
//         >
//           <Plus size={18} />
//           Add skill
//         </button>
//       </div>

//       {error && (
//         <div className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</div>
//       )}

//       {loading ? (
//         <div className="flex items-center justify-center py-16 text-slate-400">
//           <Loader2 className="animate-spin" size={28} />
//         </div>
//       ) : skills.length === 0 ? (
//         <div className="rounded-2xl bg-[#f8fbff] p-10 text-center text-slate-500">
//           No skills yet. Add your first one.
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {grouped.map((group) => (
//             <div key={group.category}>
//               <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
//                 {group.category}
//               </h3>

//               <div className="space-y-3">
//                 {group.items.map((skill) => (
//                   <div
//                     key={skill._id}
//                     className="flex items-center gap-4 rounded-2xl bg-[#f8fbff] p-4"
//                   >
//                     <div className="w-32 shrink-0 font-medium text-slate-800">{skill.name}</div>

//                     <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
//                       <div
//                         className="h-full rounded-full bg-[#00a8e8]"
//                         style={{ width: `${skill.level}%` }}
//                       />
//                     </div>

//                     <span className="w-10 shrink-0 text-right text-sm text-slate-500">
//                       {skill.level}%
//                     </span>

//                     <div className="flex items-center gap-1">
//                       <button
//                         onClick={() => openEditModal(skill)}
//                         className="rounded-lg p-2 text-slate-500 transition hover:bg-[#00a8e8]/10 hover:text-[#00a8e8]"
//                       >
//                         <Pencil size={16} />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(skill._id)}
//                         className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-500"
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
//           <div className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8">
//             <div className="mb-6 flex items-center justify-between">
//               <h3 className="text-xl font-bold text-slate-900">
//                 {editingId ? "Edit skill" : "Add skill"}
//               </h3>
//               <button onClick={closeModal} className="text-slate-400 hover:text-slate-700">
//                 <X size={22} />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">Name</label>
//                 <input
//                   required
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   placeholder="React"
//                   className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1.5 block text-sm font-medium text-slate-700">
//                   Category
//                 </label>
//                 <select
//                   value={form.category}
//                   onChange={(e) => setForm({ ...form, category: e.target.value })}
//                   className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20"
//                 >
//                   {categories.map((c) => (
//                     <option key={c} value={c}>
//                       {c}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="mb-1.5 flex items-center justify-between text-sm font-medium text-slate-700">
//                   Proficiency
//                   <span className="text-[#00a8e8]">{form.level}%</span>
//                 </label>
//                 <input
//                   type="range"
//                   min={0}
//                   max={100}
//                   value={form.level}
//                   onChange={(e) => setForm({ ...form, level: Number(e.target.value) })}
//                   className="w-full accent-[#00a8e8]"
//                 />
//               </div>

//               <button
//                 disabled={saving}
//                 className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#00a8e8] font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,0.35)] transition hover:-translate-y-1 disabled:opacity-50"
//               >
//                 {saving ? <Loader2 className="animate-spin" size={20} /> : null}
//                 {saving ? "Saving..." : editingId ? "Update skill" : "Create skill"}
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
