"use client";

import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";

type FormState = {
  name: string;
  phone: string;
  email: string;
  loanType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  loanType: "",
  message: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your full name.";

  if (!values.phone.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[6-9]\d{9}$/.test(values.phone.replace(/\s/g, ""))) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.loanType) errors.loanType = "Please select a loan type.";

  return errors;
}

/**
 * PLACEHOLDER — no backend is wired up yet.
 *
 * Replace this function with a real API call, e.g.:
 *   const res = await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(values) });
 * or a call to your CRM / lead-management endpoint.
 */
async function submitEnquiryPlaceholder(values: FormState): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  // eslint-disable-next-line no-console
  console.info("[EnquiryForm] Submitted (placeholder — no backend connected):", values);
}

export default function EnquiryForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setStatus("submitting");
      await submitEnquiryPlaceholder(values);
      setStatus("success");
      setValues(initialState);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 rounded-pill bg-white p-6 md:p-8 shadow-lg">
      <FormField label="Full Name" name="name" value={values.name} error={errors.name} required onChange={handleChange} />
      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        value={values.phone}
        error={errors.phone}
        required
        placeholder="9XXXXXXXXX"
        onChange={handleChange}
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        error={errors.email}
        required
        onChange={handleChange}
      />

      <div>
        <label htmlFor="loanType" className="mb-1.5 block text-sm font-semibold text-midnight">
          Loan Type <span className="text-red-500">*</span>
        </label>
        <select
          id="loanType"
          name="loanType"
          value={values.loanType}
          aria-invalid={!!errors.loanType}
          onChange={(e) => handleChange("loanType", e.target.value)}
          className="w-full rounded-card border border-slate-300 px-4 py-3 text-sm md:text-base text-midnight focus:border-brand-cyan focus:outline-none"
        >
          <option value="">Select a loan type</option>
          <option value="personal">Personal Loan</option>
          <option value="business">Business Loan</option>
          <option value="home">Home Loan</option>
          <option value="mortgage">Mortgage Loan</option>
          <option value="car">Car Loan</option>
          <option value="education">Education Loan</option>
        </select>
        {errors.loanType && <p className="mt-1 text-sm text-red-500">{errors.loanType}</p>}
      </div>

      <FormField
        label="Message"
        name="message"
        as="textarea"
        value={values.message}
        onChange={handleChange}
        placeholder="Tell us a bit about what you need…"
      />

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit Enquiry"}
      </Button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="text-sm font-medium text-green-600">
            Thanks! Your enquiry has been received — our team will call you shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-500">
            Something went wrong. Please try again in a moment.
          </p>
        )}
      </div>
    </form>
  );
}
