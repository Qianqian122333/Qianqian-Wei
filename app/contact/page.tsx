"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  Send,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send message.",
      );
    }
  }

  return (
    <main className="w-full pb-24 bg-background">
      {/* ───── Contact ───── */}
      <section className="w-full pt-32 pb-24 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-16 text-center font-kalam font-bold text-4xl text-primary md:text-5xl">
            Contact me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 rounded-2xl border border-border bg-background p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle2 className="w-16 h-16 text-primary" />
                  <h3 className="font-kalam text-2xl font-bold text-primary">
                    Message Sent! 🎉
                  </h3>
                  <p className="text-foreground/80 max-w-sm">
                    Thank you for reaching out! I&apos;ll get back to you as
                    soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Name ✏️
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-background-alt px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email 📧
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-background-alt px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message 💬
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-background-alt px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-destructive">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Email */}
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <h3 className="font-kalam text-lg font-bold text-foreground">
                    Email
                  </h3>
                </div>
                <Link
                  href="mailto:qianqianwei112233@gmail.com"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors break-all"
                >
                  qianqianwei112233@gmail.com
                </Link>
              </div>

              {/* LinkedIn */}
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <h3 className="font-kalam text-lg font-bold text-foreground">
                    LinkedIn
                  </h3>
                </div>
                <Link
                  href="https://www.linkedin.com/in/qianqianwei112233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  linkedin.com/in/qianqianwei112233
                </Link>
              </div>

              {/* GitHub */}
              <div className="rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Github className="w-5 h-5 text-primary" />
                  <h3 className="font-kalam text-lg font-bold text-foreground">
                    GitHub
                  </h3>
                </div>
                <Link
                  href="https://github.com/Qianqian122333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  github.com/Qianqian122333
                </Link>
              </div>

              {/* Fun note */}
              <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-center">
                <p className="text-sm text-foreground/80 leading-relaxed">
                  🕐 I usually respond within <strong>24 hours</strong>. Feel
                  free to reach out anytime — I&apos;d love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
