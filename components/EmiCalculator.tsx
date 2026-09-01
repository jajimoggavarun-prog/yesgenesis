"use client";

import { useMemo, useState } from "react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState("1000000");
  const [rate, setRate] = useState("10.5");
  const [tenureYears, setTenureYears] = useState("5");

  const principalValue = Number(principal) || 0;
  const rateValue = Number(rate) || 0;
  const tenureValue = Number(tenureYears) || 0;

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    if (principalValue <= 0 || tenureValue <= 0) {
      return {
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
      };
    }

    const monthlyRate = rateValue / 12 / 100;
    const months = tenureValue * 12;

    if (monthlyRate === 0) {
      const flatEmi = principalValue / months;

      return {
        emi: flatEmi,
        totalInterest: 0,
        totalPayment: principalValue,
      };
    }

    const factor = Math.pow(1 + monthlyRate, months);

    const emiValue =
      (principalValue * monthlyRate * factor) /
      (factor - 1);

    const total = emiValue * months;

    return {
      emi: emiValue,
      totalInterest: total - principalValue,
      totalPayment: total,
    };
  }, [principalValue, rateValue, tenureValue]);

  return (
    <div className="grid gap-8 rounded-pill bg-white p-6 shadow-lg md:p-8 lg:grid-cols-2">
      {/* =====================================================
          INPUTS
      ===================================================== */}
      <div className="space-y-7">

        {/* Loan Amount */}
        <div>
          <label
            htmlFor="principal"
            className="mb-2 block text-sm font-semibold text-midnight"
          >
            Loan Amount
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base font-semibold text-gray-500">
              ₹
            </span>

            <input
              id="principal"
              type="text"
              inputMode="numeric"
              value={principal}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setPrincipal(value);
              }}
              placeholder="Enter loan amount"
              className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-10 pr-4 text-lg font-semibold text-midnight outline-none transition focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
            />
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Enter the amount you want to borrow.
          </p>
        </div>

        {/* Interest Rate */}
        <div>
          <label
            htmlFor="rate"
            className="mb-2 block text-sm font-semibold text-midnight"
          >
            Interest Rate (per annum)
          </label>

          <div className="relative">
            <input
              id="rate"
              type="text"
              inputMode="decimal"
              value={rate}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9.]/g, "");

                // Allow only one decimal point
                if ((value.match(/\./g) || []).length <= 1) {
                  setRate(value);
                }
              }}
              placeholder="Enter interest rate"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 pr-12 text-lg font-semibold text-midnight outline-none transition focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base font-semibold text-gray-500">
              %
            </span>
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Example: 10.5% per annum.
          </p>
        </div>

        {/* Tenure */}
        <div>
          <label
            htmlFor="tenure"
            className="mb-2 block text-sm font-semibold text-midnight"
          >
            Loan Tenure
          </label>

          <div className="relative">
            <input
              id="tenure"
              type="text"
              inputMode="numeric"
              value={tenureYears}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setTenureYears(value);
              }}
              placeholder="Enter tenure"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 pr-16 text-lg font-semibold text-midnight outline-none transition focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-base font-semibold text-gray-500">
              Years
            </span>
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Enter the repayment period in years.
          </p>
        </div>

        {/* Quick validation */}
        {(principalValue <= 0 ||
          rateValue < 0 ||
          tenureValue <= 0) && (
          <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            Please enter a valid loan amount, interest rate and tenure.
          </p>
        )}
      </div>

      {/* =====================================================
          EMI RESULT
      ===================================================== */}
      <div className="flex flex-col justify-center gap-6 rounded-card bg-midnight-light p-6 text-white md:p-8">

        {/* Monthly EMI */}
        <div>
          <p className="text-sm text-white/70">
            Monthly EMI
          </p>

          <p className="mt-1 text-3xl font-bold text-brand-cyan md:text-4xl">
            {formatCurrency(emi)}
          </p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

          <div>
            <p className="text-sm text-white/70">
              Total Interest
            </p>

            <p className="mt-1 text-lg font-semibold">
              {formatCurrency(totalInterest)}
            </p>
          </div>

          <div>
            <p className="text-sm text-white/70">
              Total Payment
            </p>

            <p className="mt-1 text-lg font-semibold">
              {formatCurrency(totalPayment)}
            </p>
          </div>

        </div>

        {/* Loan Summary */}
        <div className="border-t border-white/10 pt-5">
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-white/60">
              Loan Amount
            </span>

            <span className="font-semibold">
              {formatCurrency(principalValue)}
            </span>
          </div>

          <div className="mt-3 flex justify-between gap-4 text-sm">
            <span className="text-white/60">
              Interest Rate
            </span>

            <span className="font-semibold">
              {rateValue > 0 ? `${rateValue}%` : "—"}
            </span>
          </div>

          <div className="mt-3 flex justify-between gap-4 text-sm">
            <span className="text-white/60">
              Tenure
            </span>

            <span className="font-semibold">
              {tenureValue > 0 ? `${tenureValue} Years` : "—"}
            </span>
          </div>
        </div>

        <p className="text-xs leading-5 text-white/50">
          This is an indicative estimate. Actual EMI may vary by lender,
          interest rate, tenure and other applicable charges.
        </p>
      </div>
    </div>
  );
}