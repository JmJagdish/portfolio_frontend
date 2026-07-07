"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  Github,
  ExternalLink,
  FolderKanban,
  Loader2,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
}

type ProjectFormState = {
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
  liveLink: string;
  imageFile: File | null;
};

const emptyForm: ProjectFormState = {
  title: "",
  description: "",
  techStack: "",
  githubLink: "",
  liveLink: "",
  imageFile: null,
};

export default function ProjectManager() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<ProjectFormState>(emptyForm);
  const [preview, setPreview] = useState<string>("");

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/projects`, { credentials: "include" });
      const data = await res.json();
      setProjects(data.projects || data.data || []);
    } catch {
      setError("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const openCreateModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setPreview("");
    setIsModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      techStack: project.techStack?.join(", ") || "",
      githubLink: project.githubLink || "",
      liveLink: project.liveLink || "",
      imageFile: null,
    });
    setPreview(project.image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setForm(emptyForm);
    setPreview("");
    setEditingId(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setForm((prev) => ({ ...prev, imageFile: file }));
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    try {
      const body = new FormData();
      body.append("title", form.title);
      body.append("description", form.description);
      body.append(
        "techStack",
        JSON.stringify(form.techStack.split(",").map((t) => t.trim()).filter(Boolean))
      );
      body.append("githubLink", form.githubLink);
      body.append("liveLink", form.liveLink);
      if (form.imageFile) body.append("image", form.imageFile);

      const url = editingId ? `${API_URL}/projects/${editingId}` : `${API_URL}/projects`;
      const method = editingId ? "PUT" : "POST";

      const res = await fetch(url, { method, credentials: "include", body });
      if (!res.ok) throw new Error("Could not save project");

      await fetchProjects();
      closeModal();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this project? This cannot be undone.")) return;
    try {
      await fetch(`${API_URL}/projects/${id}`, { method: "DELETE", credentials: "include" });
      setProjects((prev) => prev.filter((p) => p._id !== id));
    } catch {
      setError("Failed to delete project");
    }
  };

  return (
    <section className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,168,232,0.12)] backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#00a8e8]/10 text-[#00a8e8]">
            <FolderKanban size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Projects</h2>
            <p className="text-sm text-slate-500">{projects.length} published</p>
          </div>
        </div>

        <button
          onClick={openCreateModal}
          className="flex items-center gap-2 rounded-full bg-[#00a8e8] px-5 py-2.5 font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,0.35)] transition hover:-translate-y-1"
        >
          <Plus size={18} />
          Add project
        </button>
      </div>

      {error && (
        <div className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-16 text-slate-400">
          <Loader2 className="animate-spin" size={28} />
        </div>
      ) : projects.length === 0 ? (
        <div className="rounded-2xl bg-[#f8fbff] p-10 text-center text-slate-500">
          No projects yet. Add your first one.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-40 w-full bg-[#f8fbff]">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-slate-800">{project.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.techStack?.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#00a8e8]/10 px-2.5 py-1 text-xs font-medium text-[#00a8e8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-slate-400">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer">
                        <Github size={17} className="hover:text-slate-700" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer">
                        <ExternalLink size={17} className="hover:text-slate-700" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditModal(project)}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-[#00a8e8]/10 hover:text-[#00a8e8]"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-900">
                {editingId ? "Edit project" : "Add project"}
              </h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-700">
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Title</label>
                <input
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Description
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Tech stack (comma separated)
                </label>
                <input
                  value={form.techStack}
                  onChange={(e) => setForm({ ...form, techStack: e.target.value })}
                  placeholder="React, Node.js, MongoDB"
                  className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    GitHub link
                  </label>
                  <input
                    value={form.githubLink}
                    onChange={(e) => setForm({ ...form, githubLink: e.target.value })}
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Live link
                  </label>
                  <input
                    value={form.liveLink}
                    onChange={(e) => setForm({ ...form, liveLink: e.target.value })}
                    className="h-11 w-full rounded-xl border border-slate-200 px-4 outline-none focus:border-[#00a8e8] focus:ring-2 focus:ring-[#00a8e8]/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Image</label>
                {preview && (
                  <div className="relative mb-3 h-36 w-full overflow-hidden rounded-xl bg-[#f8fbff]">
                    <Image src={preview} alt="preview" fill className="object-cover" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-[#00a8e8]/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[#00a8e8]"
                />
              </div>

              <button
                disabled={saving}
                className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#00a8e8] font-semibold text-white shadow-[0_10px_30px_rgba(0,168,232,0.35)] transition hover:-translate-y-1 disabled:opacity-50"
              >
                {saving ? <Loader2 className="animate-spin" size={20} /> : null}
                {saving ? "Saving..." : editingId ? "Update project" : "Create project"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
