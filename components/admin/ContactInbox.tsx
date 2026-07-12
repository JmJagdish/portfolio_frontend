// "use client";

// import { useEffect, useState } from "react";
// import { Mail, MailOpen, Trash2, Loader2, X } from "lucide-react";

// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// interface Message {
//   _id: string;
//   name: string;
//   email: string;
//   message: string;
//   isRead: boolean;
//   createdAt: string;
// }

// export default function ContactInbox() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [active, setActive] = useState<Message | null>(null);

//   // const fetchMessages = async () => {
//   //   try {
//   //     setLoading(true);
//   //     const res = await fetch(`${API_URL}/contact`, { credentials: "include" });
//   //     const data = await res.json();
//   //     setMessages(data.contacts || data.data || []);
//   //   } catch {
//   //     setError("Failed to load messages");
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   // useEffect(() => {
//   //   fetchMessages();
//   // }, []);

//   const openMessage = async (msg: Message) => {
//     setActive(msg);
//     if (msg.isRead) return;

//     try {
//       await fetch(`${API_URL}/contact/${msg._id}/read`, {
//         method: "PATCH",
//         credentials: "include",
//       });
//       setMessages((prev) =>
//         prev.map((m) => (m._id === msg._id ? { ...m, isRead: true } : m))
//       );
//     } catch {
//       // fail silently, read-state isn't critical
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm("Delete this message?")) return;
//     try {
//       await fetch(`${API_URL}/contact/${id}`, { method: "DELETE", credentials: "include" });
//       setMessages((prev) => prev.filter((m) => m._id !== id));
//       if (active?._id === id) setActive(null);
//     } catch {
//       setError("Failed to delete message");
//     }
//   };

//   const unreadCount = messages.filter((m) => !m.isRead).length;

//   const formatDate = (iso: string) =>
//     new Date(iso).toLocaleDateString("en-US", {
//       day: "numeric",
//       month: "short",
//       year: "numeric",
//     });

//   return (
//     <section className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,168,232,0.12)] backdrop-blur-xl">
//       <div className="mb-6 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a8e8]/10 text-[#00a8e8]">
//             <Mail size={22} />
//           </div>
//           <div>
//             <h2 className="text-xl font-bold text-slate-800">Messages</h2>
//             <p className="text-sm text-slate-500">
//               {unreadCount > 0 ? `${unreadCount} unread` : "All caught up"}
//             </p>
//           </div>
//         </div>
//       </div>

//       {error && (
//         <div className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</div>
//       )}

//       {loading ? (
//         <div className="flex items-center justify-center py-16 text-slate-400">
//           <Loader2 className="animate-spin" size={28} />
//         </div>
//       ) : messages.length === 0 ? (
//         <div className="rounded-2xl bg-[#f8fbff] p-10 text-center text-slate-500">
//           No messages yet.
//         </div>
//       ) : (
//         <div className="space-y-3">
//           {messages.map((msg) => (
//             <button
//               key={msg._id}
//               onClick={() => openMessage(msg)}
//               className={`flex w-full flex-col gap-2 rounded-2xl p-4 text-left transition sm:flex-row sm:items-center sm:justify-between ${
//                 msg.isRead ? "bg-[#f8fbff]" : "bg-[#00a8e8]/5 ring-1 ring-[#00a8e8]/20"
//               }`}
//             >
//               <div className="flex items-start gap-3">
//                 <div
//                   className={`mt-0.5 shrink-0 ${
//                     msg.isRead ? "text-slate-300" : "text-[#00a8e8]"
//                   }`}
//                 >
//                   {msg.isRead ? <MailOpen size={18} /> : <Mail size={18} />}
//                 </div>
//                 <div>
//                   <h3
//                     className={`font-semibold ${
//                       msg.isRead ? "text-slate-700" : "text-slate-900"
//                     }`}
//                   >
//                     {msg.name}
//                   </h3>
//                   <p className="text-sm text-slate-500">{msg.email}</p>
//                   <p className="mt-1 line-clamp-1 text-sm text-slate-500 sm:hidden">
//                     {msg.message}
//                   </p>
//                 </div>
//               </div>

//               <div className="hidden max-w-xs flex-1 truncate text-sm text-slate-500 sm:block">
//                 {msg.message}
//               </div>

//               <div className="flex items-center justify-between gap-4 sm:justify-end">
//                 <span className="text-xs text-slate-400">{formatDate(msg.createdAt)}</span>
//                 <span
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleDelete(msg._id);
//                   }}
//                   role="button"
//                   aria-label="Delete message"
//                   className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-500"
//                 >
//                   <Trash2 size={16} />
//                 </span>
//               </div>
//             </button>
//           ))}
//         </div>
//       )}

//       {active && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
//           <div className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8">
//             <div className="mb-6 flex items-center justify-between">
//               <div>
//                 <h3 className="text-xl font-bold text-slate-900">{active.name}</h3>
//                 <p className="text-sm text-slate-500">{active.email}</p>
//               </div>
//               <button
//                 onClick={() => setActive(null)}
//                 className="text-slate-400 hover:text-slate-700"
//               >
//                 <X size={22} />
//               </button>
//             </div>

//             <p className="whitespace-pre-wrap rounded-2xl bg-[#f8fbff] p-4 text-slate-700">
//               {active.message}
//             </p>

//             <div className="mt-6 flex items-center justify-between">
//               <span className="text-xs text-slate-400">{formatDate(active.createdAt)}</span>
//               <div className="flex gap-3">
//                 <a
//                   href={`mailto:${active.email}`}
//                   className="rounded-full bg-[#00a8e8] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,0.35)] transition hover:-translate-y-1"
//                 >
//                   Reply by email
//                 </a>
//                 <button
//                   onClick={() => handleDelete(active._id)}
//                   className="rounded-full border border-red-200 px-5 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
