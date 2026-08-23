"use client";

import { useState } from "react";
import { Lock, CheckCircle2 } from "lucide-react";

const presetAmounts = [25, 50, 100, 250];

export default function DonatePage() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(50);
  const [customAmount, setCustomAmount] = useState<string>("50");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handlePresetClick = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(amount.toString());
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    const numVal = parseInt(val, 10);
    if (!isNaN(numVal) && presetAmounts.includes(numVal)) {
      setSelectedAmount(numVal);
    } else {
      setSelectedAmount(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const displayAmount = customAmount ? customAmount : "0";

  return (
    <main className="min-h-screen w-full flex flex-col bg-[#F8F9FB]">
      {/* Container matching navbar width and padding */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 md:px-8 lg:px-12 flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex justify-center items-center">
          {/* Main Dark Donation Card */}
          <div className="w-full max-w-2xl bg-[#012358] rounded-[2rem] p-6 sm:p-10 md:p-12 border border-[#005DCD]/30 shadow-2xl relative overflow-hidden">
            {/* Header Area */}
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-[#FD6100] font-bold tracking-wider text-xs sm:text-sm uppercase block mb-2 sm:mb-3">
                MAKE A DIFFERENCE
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
                Support Our Mission Today
              </h1>
              <p className="text-slate-300/85 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                Your contribution goes directly toward building schools, providing
                healthcare, and protecting our environment.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 text-[#FD6100] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thank You for Your Generosity!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mb-6">
                  Your {frequency === "monthly" ? "monthly" : "one-time"} donation of{" "}
                  <span className="font-bold text-white">रु{displayAmount}</span> is helping us create sustainable change. A receipt has been sent to{" "}
                  <span className="font-semibold text-[#005DCD]">{email}</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#005DCD]/20 hover:bg-[#005DCD]/30 text-white text-sm font-semibold transition-colors border border-[#005DCD]/40"
                >
                  Make Another Donation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                {/* Frequency Toggle */}
                <div className="flex justify-center mb-8">
                  <div className="bg-[#005DCD]/20 p-1.5 rounded-2xl inline-flex items-center gap-1 border border-[#005DCD]/30 shadow-inner">
                    <button
                      type="button"
                      onClick={() => setFrequency("one-time")}
                      className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                        frequency === "one-time"
                          ? "bg-[#0284c7] text-white shadow-sm font-semibold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      type="button"
                      onClick={() => setFrequency("monthly")}
                      className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                        frequency === "monthly"
                          ? "bg-[#0284c7] text-white shadow-sm font-semibold"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      Monthly (Best Impact)
                    </button>
                  </div>
                </div>

                {/* Preset Donation Amounts */}
                <div className="mb-6">
                  <label className="text-slate-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider text-center block mb-3">
                    SELECT DONATION AMOUNT
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {presetAmounts.map((amount) => {
                      const isSelected = selectedAmount === amount;
                      return (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handlePresetClick(amount)}
                          className={`py-3.5 px-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-200 cursor-pointer text-center ${
                            isSelected
                              ? "bg-[#012358] text-white border-2 border-[#005DCD] shadow-sm"
                              : "bg-[#005DCD]/10 text-white border border-[#005DCD]/30 hover:border-[#005DCD]/60 hover:bg-[#005DCD]/20"
                          }`}
                        >
                          रु{amount}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label
                    htmlFor="custom-amount"
                    className="text-slate-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider block mb-2"
                  >
                    OR CUSTOM AMOUNT ( रु )
                  </label>
                  <input
                    id="custom-amount"
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={handleCustomChange}
                    placeholder="Enter custom amount"
                    className="w-full bg-[#005DCD]/10 border border-[#005DCD]/30 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 text-sm sm:text-base font-semibold focus:outline-none focus:border-[#FD6100] focus:ring-1 focus:ring-[#FD6100] transition-all"
                  />
                </div>

                {/* Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="text-slate-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider block mb-2"
                    >
                      FULL NAME
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full bg-[#005DCD]/10 border border-[#005DCD]/30 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-[#FD6100] focus:ring-1 focus:ring-[#FD6100] transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email-address"
                      className="text-slate-400 font-bold text-[11px] sm:text-xs uppercase tracking-wider block mb-2"
                    >
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email-address"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full bg-[#005DCD]/10 border border-[#005DCD]/30 rounded-xl px-4 py-3.5 text-white placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-[#FD6100] focus:ring-1 focus:ring-[#FD6100] transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#FD6100] hover:bg-[#e05700] text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-orange-500/20 transition-all duration-200 cursor-pointer active:scale-[0.99] text-center block"
                >
                  Complete Donation of रु{displayAmount}
                </button>

                {/* Security Footer Note */}
                <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mt-4 sm:mt-5">
                  <Lock className="w-3.5 h-3.5 text-[#FD6100] shrink-0" />
                  <span>Secure 256-bit SSL encrypted transaction</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
