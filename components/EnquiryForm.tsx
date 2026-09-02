"use client";

import { useState } from "react";
import FormField from "./FormField";
import Button from "./Button";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbydxLXPj5igse4DkmHYQdQZeSP_40j29P6DDzrihygsvBVO6iwm92j8A2yaDr-uwlm0/exec";

type LoanType =
  | ""
  | "personal"
  | "business"
  | "home"
  | "mortgage"
  | "car"
  | "education";

type FormState = {
  name: string;
  phone: string;
  email: string;
  loanType: LoanType;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const loanTypeLabels: Record<Exclude<LoanType, "">, string> = {
  personal: "Personal Loan",
  business: "Business Loan",
  home: "Home Loan",
  mortgage: "Mortgage Loan",
  car: "Car Loan",
  education: "Education Loan",
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  loanType: "",
  message: "",
};

function getLoanTypeFromValue(value?: string): LoanType {
  if (!value) return "";

  const cleanValue = value.toLowerCase().trim();

  if (
    cleanValue === "personal" ||
    cleanValue === "personal-loan" ||
    cleanValue === "personal loan"
  ) {
    return "personal";
  }

  if (
    cleanValue === "business" ||
    cleanValue === "business-loan" ||
    cleanValue === "business loan"
  ) {
    return "business";
  }

  if (
    cleanValue === "home" ||
    cleanValue === "home-loan" ||
    cleanValue === "home loan"
  ) {
    return "home";
  }

  if (
    cleanValue === "mortgage" ||
    cleanValue === "mortgage-loan" ||
    cleanValue === "mortgage loan"
  ) {
    return "mortgage";
  }

  if (
    cleanValue === "car" ||
    cleanValue === "car-loan" ||
    cleanValue === "car loan"
  ) {
    return "car";
  }

  if (
    cleanValue === "education" ||
    cleanValue === "education-loan" ||
    cleanValue === "education loan"
  ) {
    return "education";
  }

  return "";
}

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  const cleanName = values.name.trim();
  const cleanPhone = values.phone.replace(/\s/g, "");
  const cleanEmail = values.email.trim();

  if (!cleanName) {
    errors.name = "Please enter your full name.";
  }

  if (!cleanPhone) {
    errors.phone = "Please enter a phone number.";
  } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  }

  if (!cleanEmail) {
    errors.email = "Please enter an email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.loanType) {
    errors.loanType = "Please select a loan type.";
  }

  return errors;
}

async function submitEnquiry(values: FormState): Promise<void> {
  const cleanName = values.name.trim();
  const cleanPhone = values.phone.replace(/\s/g, "");
  const cleanEmail = values.email.trim();

  const selectedLoanType =
    values.loanType && loanTypeLabels[values.loanType]
      ? loanTypeLabels[values.loanType]
      : values.loanType;

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      name: cleanName,
      mobile: cleanPhone,
      email: cleanEmail,
      loanType: selectedLoanType,
      message: values.message.trim(),
      source: "Website Enquiry",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit enquiry.");
  }

  let result: { success?: boolean; message?: string } | null = null;

  try {
    result = await response.json();
  } catch {
    /*
     * Some Google Apps Script responses can behave differently
     * because of browser/CORS handling. If the HTTP request
     * itself succeeded, do not reject the submission solely
     * because the response body could not be parsed.
     */
  }

  if (result && result.success === false) {
    throw new Error(result.message || "Unable to save enquiry.");
  }
}

type EnquiryFormProps = {
  loanType?: string;
};

export default function EnquiryForm({
  loanType,
}: EnquiryFormProps) {
  const initialLoanType = getLoanTypeFromValue(loanType);

  const [values, setValues] = useState<FormState>({
    ...initialState,
    loanType: initialLoanType,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const validationErrors = validate(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setStatus("submitting");

      await submitEnquiry(values);

      setStatus("success");

      setValues({
        ...initialState,
        loanType: initialLoanType,
      });

      setErrors({});
    } catch (error) {
      console.error("[EnquiryForm] Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-5 rounded-pill bg-white p-6 shadow-lg md:p-8"
    >
      {/* FULL NAME */}
      <FormField
        label="Full Name"
        name="name"
        value={values.name}
        error={errors.name}
        required
        onChange={handleChange}
      />

      {/* PHONE */}
      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        value={values.phone}
        error={errors.phone}
        required
        placeholder="9XXXXXXXXX"
        onChange={(name, value) => {
          const numbersOnly = value.replace(/\D/g, "");

          handleChange(
            name,
            numbersOnly.slice(0, 10)
          );
        }}
      />

      {/* EMAIL */}
      <FormField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        error={errors.email}
        required
        onChange={handleChange}
      />

      {/* LOAN TYPE */}
      <div>
        <label
          htmlFor="loanType"
          className="mb-1.5 block text-sm font-semibold text-midnight"
        >
          Loan Type <span className="text-red-500">*</span>
        </label>

        <select
          id="loanType"
          name="loanType"
          value={values.loanType}
          aria-invalid={!!errors.loanType}
          onChange={(e) =>
            handleChange(
              "loanType",
              e.target.value
            )
          }
          className="w-full rounded-card border border-slate-300 px-4 py-3 text-sm text-midnight focus:border-brand-cyan focus:outline-none md:text-base"
        >
          <option value="">
            Select a loan type
          </option>

          <option value="personal">
            Personal Loan
          </option>

          <option value="business">
            Business Loan
          </option>

          <option value="home">
            Home Loan
          </option>

          <option value="mortgage">
            Mortgage Loan
          </option>

          <option value="car">
            Car Loan
          </option>

          <option value="education">
            Education Loan
          </option>
        </select>

        {errors.loanType && (
          <p className="mt-1 text-sm text-red-500">
            {errors.loanType}
          </p>
        )}
      </div>

      {/* MESSAGE */}
      <FormField
        label="Message"
        name="message"
        as="textarea"
        value={values.message}
        onChange={handleChange}
        placeholder="Tell us a bit about what you need..."
      />

      {/* SUBMIT */}
      <Button
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting"
          ? "Submitting..."
          : "Submit Enquiry"}
      </Button>

      {/* STATUS */}
      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="text-sm font-medium text-green-600">
            Thanks! Your enquiry has been received —
            our team will call you shortly.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm font-medium text-red-500">
            Something went wrong. Please try again in
            a moment.
          </p>
        )}
      </div>
    </form>
  );
}