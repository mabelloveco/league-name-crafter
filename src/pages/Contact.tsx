import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormStatus =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success" }
  | { type: "error"; message: string };

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Team Name Lab",
  url: "https://teamnamelab.com/contact",
  description:
    "Contact Team Name Lab with questions, name ideas, or partnership inquiries for the fantasy football team name generator.",
};

const categoryMarks = ["Funny", "Player-Themed", "Pop Culture", "Inappropriate"] as const;

function encodeForm(form: HTMLFormElement): string {
  const formData = new FormData(form);
  const params = new URLSearchParams();
  formData.forEach((value, key) => {
    if (typeof value === "string") {
      params.append(key, value);
    }
  });
  return params.toString();
}

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ type: "submitting" });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(form),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed (${response.status})`);
      }

      form.reset();
      setStatus({ type: "success" });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Email us at support@teamnamelab.com.",
      });
    }
  };

  const renderFormCard = () => {
    switch (status.type) {
      case "success":
        return (
          <div className="flex min-h-[28rem] flex-col justify-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Message sent.</h2>
            <p className="mt-3 max-w-sm text-base text-muted-foreground">
              Thanks for writing in. We’ll get back to you at the email you shared.
            </p>
            <button
              type="button"
              onClick={() => setStatus({ type: "idle" })}
              className="mt-8 w-fit rounded-full bg-foreground px-8 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Send another
            </button>
          </div>
        );
      case "idle":
      case "submitting":
      case "error":
        return (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="flex flex-col"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" value="Team Name Lab contact" />
            <p className="hidden" aria-hidden="true">
              <label>
                Don’t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-[1.75rem]">
              Let us know about you.
            </h2>

            <div className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="contact-name"
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                >
                  Full name
                </Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter full name"
                  className="h-12 rounded-xl border-0 bg-muted px-4 text-base shadow-none placeholder:text-muted-foreground/80 focus-visible:ring-offset-0"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="contact-email"
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                >
                  Email
                </Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter email address"
                  className="h-12 rounded-xl border-0 bg-muted px-4 text-base shadow-none placeholder:text-muted-foreground/80 focus-visible:ring-offset-0"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="contact-message"
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Let us know about your ideas or challenges"
                  className="min-h-[8.5rem] resize-none rounded-xl border-0 bg-muted px-4 py-3 text-base shadow-none placeholder:text-muted-foreground/80 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {status.type === "error" ? (
              <p className="mt-4 text-sm text-destructive" role="alert">
                {status.message}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <p className="max-w-[13.5rem] text-xs leading-relaxed text-muted-foreground">
                By submitting, you agree to our{" "}
                <Link to="/terms" className="font-semibold text-foreground underline-offset-2 hover:underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="font-semibold text-foreground underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={status.type === "submitting"}
                  className="rounded-full bg-foreground px-8 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status.type === "submitting" ? "Sending" : "Submit"}
                </button>
                <button
                  type="submit"
                  disabled={status.type === "submitting"}
                  aria-label="Submit contact form"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </form>
        );
      default: {
        const exhaustive: never = status;
        return exhaustive;
      }
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with Team Name Lab. Send questions, name ideas, or partnership inquiries for the fantasy football team name generator."
        keywords="contact team name lab, fantasy football team names, name generator support"
        canonicalUrl="/contact"
        schemaMarkup={schemaMarkup}
      />

      <section className="relative overflow-hidden bg-muted">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-border"
          viewBox="0 0 1440 720"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-80 420 C 180 300, 380 560, 620 390 S 980 140, 1220 310 S 1480 520, 1680 360"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="grid items-stretch gap-12 lg:grid-cols-[1fr_minmax(0,32rem)] lg:gap-16">
            <div className="flex flex-col justify-between gap-12">
              <div className="max-w-xl">
                <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.35rem]">
                  Let’s talk names that actually land.
                </h1>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-foreground/80 md:text-xl">
                  Share your league, a player, or a vibe and we’ll help shape a name that fits how people actually trash-talk today.
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Free names for every kind of league
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-muted-foreground/80">
                  {categoryMarks.map((mark) => (
                    <span key={mark} className="text-sm font-semibold tracking-wide md:text-base">
                      {mark}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-primary p-3 shadow-elegant md:p-4">
              <div className="rounded-[1.35rem] bg-card px-6 py-8 md:rounded-[1.5rem] md:px-9 md:py-10">
                {renderFormCard()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
