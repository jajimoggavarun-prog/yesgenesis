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
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(10.5);
  const [tenureYears, setTenureYears] = useState(5);

  const { emi, totalInterest, totalPayment } = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const months = tenureYears * 12;

    if (monthlyRate === 0) {
      const flatEmi = principal / months;

      return {
        emi: flatEmi,
        totalInterest: 0,
        totalPayment: principal,
      };
    }

    const factor = Math.pow(1 + monthlyRate, months);
    const emiValue =
      (principal * monthlyRate * factor) / (factor - 1);

    const total = emiValue * months;

    return {
      emi: emiValue,
      totalInterest: total - principal,
      totalPayment: total,
    };
  }, [principal, rate, tenureYears]);

  return (
    <div className="grid gap-8 rounded-pill bg-white p-6 shadow-lg md:p-8 lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="space-y-6">

        {/* LOAN AMOUNT */}
        <div>
          <label
            htmlFor="principal"
            className="flex justify-between text-sm font-semibold text-midnight"
          >
            <span>Loan Amount</span>
            <span>{formatCurrency(principal)}</span>
          </label>

          <div className="mt-2 flex items-center overflow-hidden rounded-card border border-gray-200 bg-white">
            <span className="border-r border-brand-cyan px-4 py-3 text-lg font-semibold text-midnight">
              ₹
            </span>

            <input
              id="principal"
              type="number"
              min={50000}
              max={10000000}
              step={10000}
              value={principal === 0 ? "" : principal}
              onFocus={(e) => e.target.select()}
              onChange={(e) => {
                const value = e.target.value;

                if (value === "") {
                  setPrincipal(0);
                  return;
                }

                setPrincipal(Number(value));
              }}
              onBlur={() => {
                if (principal < 50000) {
                  setPrincipal(50000);
                } else if (principal > 10000000) {
                  setPrincipal(10000000);
                }
              }}
              className="w-full border-0 bg-transparent px-3 py-3 text-lg font-semibold text-midnight outline-none focus:ring-0 [appearance:textfield]"
              placeholder="Enter loan amount"
            />
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Enter an amount between ₹50,000 and ₹1 crore
          </p>
        </div>

        {/* INTEREST RATE */}
        <div>
          <label
            htmlFor="rate"
            className="flex justify-between text-sm font-semibold text-midnight"
          >
            <span>Interest Rate (per annum)</span>
            <span>{rate.toFixed(1)}%</span>
          </label>

          <input
            id="rate"
            type="range"
            min={5}
            max={24}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-2 w-full accent-brand-cyan"
          />
        </div>

        {/* TENURE */}
        <div>
          <label
            htmlFor="tenure"
            className="flex justify-between text-sm font-semibold text-midnight"
          >
            <span>Tenure</span>
            <span>{tenureYears} yrs</span>
          </label>

          <input
            id="tenure"
            type="range"
            min={1}
            max={30}
            step={1}
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="mt-2 w-full accent-brand-cyan"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col justify-center gap-6 rounded-card bg-midnight-light p-6 text-white">

        {/* MONTHLY EMI */}
        <div>
          <p className="text-sm text-white/70">
            Monthly EMI
          </p>

          <p className="text-3xl font-bold text-brand-cyan">
            {formatCurrency(emi)}
          </p>
        </div>

        {/* TOTALS */}
        <div className="grid grid-cols-2 gap-4">

          <div>
            <p className="text-sm text-white/70">
              Total Interest
            </p>

            <p className="text-lg font-semibold">
              {formatCurrency(totalInterest)}
            </p>
          </div>

          <div>
            <p className="text-sm text-white/70">
              Total Payment
            </p>

            <p className="text-lg font-semibold">
              {formatCurrency(totalPayment)}
            </p>
          </div>

        </div>

        <p className="text-xs text-white/50">
          This is an indicative estimate. Actual EMI may vary by lender.
        </p>
      </div>
    </div>
  );
}