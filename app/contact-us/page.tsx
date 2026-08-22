"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  User,
  MessageSquare,
  PenTool,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Send,
  Sparkles,
} from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    inquiryType: "General Inquiry",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const googleMapsUrl =
    "https://www.google.com/maps/place/Parci+studio/@26.6731287,87.2384795,19z/data=!3m1!4b1!4m6!3m5!1s0x39ef6d005f3a11ad:0xde26056a652c94fd!8m2!3d26.6731275!4d87.2391232!16s%2Fg%2F11n9qwlgjh?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D";

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=26.6731275,87.2391232&hl=en&z=19&output=embed";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        inquiryType: "General Inquiry",
        subject: "",
        message: "",
      });
    }, 4500);
  };

  return (
    <main id="contact-us" className="w-full bg-[#F8F9FB] min-h-screen px-4 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-12 sm:gap-14">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FD6100]/10 border border-[#FD6100]/20 text-[#FD6100] font-bold tracking-wider text-xs sm:text-sm uppercase mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            CONNECT WITH US
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#012358] tracking-tight leading-tight mb-4">
            Contact Better Tomorrow Nepal
          </h1>
          <p className="text-[#64748B] text-sm sm:text-base md:text-[1.05rem] leading-relaxed max-w-2xl mx-auto">
            Have questions about our programs, volunteer drives, or partnerships? Reach out to our team in Itahari and let&apos;s build a better tomorrow together.
          </p>
        </div>

        {/* Top Section: 4 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Our Location */}
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-[#E2E8F0] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#005DCD] flex items-center justify-center mb-3.5 group-hover:bg-[#005DCD] group-hover:text-white transition-colors duration-200">
              <MapPin size={22} strokeWidth={2} />
            </div>
            <h3 className="text-base font-bold text-[#012358] mb-1">Our Location</h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">Parci Studio, Itahari</p>
            <p className="text-xs text-[#64748B] leading-relaxed">Sunsari, Koshi Province, Nepal</p>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-[#E2E8F0] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FD6100] flex items-center justify-center mb-3.5 group-hover:bg-[#FD6100] group-hover:text-white transition-colors duration-200">
              <Mail size={22} strokeWidth={2} />
            </div>
            <h3 className="text-base font-bold text-[#012358] mb-1">Email Us</h3>
            <a
              href="mailto:contact@bettertomorrownepal.org"
              className="text-xs sm:text-sm text-[#005DCD] hover:underline leading-relaxed font-medium"
            >
              contact@bettertomorrownepal.org
            </a>
            <p className="text-xs text-[#64748B] leading-relaxed">info@bettertomorrownepal.org</p>
          </div>

          {/* Card 3: Call Us */}
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-[#E2E8F0] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
              <Phone size={22} strokeWidth={2} />
            </div>
            <h3 className="text-base font-bold text-[#012358] mb-1">Call Us</h3>
            <p className="text-xs sm:text-sm text-[#012358] font-semibold leading-relaxed">
              +977 980-0000000
            </p>
            <p className="text-xs text-[#64748B] leading-relaxed">Available on WhatsApp</p>
          </div>

          {/* Card 4: Office Hours */}
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-[#E2E8F0] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#012358] flex items-center justify-center mb-3.5 group-hover:bg-[#012358] group-hover:text-white transition-colors duration-200">
              <Clock size={22} strokeWidth={2} />
            </div>
            <h3 className="text-base font-bold text-[#012358] mb-1">Office Hours</h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">Sun - Fri: 9:00 AM - 5:00 PM</p>
            <p className="text-xs text-emerald-600 font-semibold leading-relaxed">Field Work: Active on Weekends</p>
          </div>
        </div>

        {/* Bottom Section: Form + Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Card (7 cols on lg) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 md:p-9 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="text-[#005DCD] font-bold tracking-wider text-xs uppercase block mb-1">
                  LEAVE A MESSAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#012358]">
                  Send us a Message
                </h2>
                <p className="text-[#64748B] text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Fill in your details below and our team will get back to you within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-3 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                    <CheckCircle2 size={36} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#012358]">Message Sent Successfully!</h3>
                  <p className="text-sm text-[#64748B] max-w-sm leading-relaxed">
                    Thank you for contacting <strong className="text-[#012358]">Better Tomorrow Nepal Foundation</strong>. Our team will review your inquiry and reach out shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#012358]">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-slate-400 focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 transition-all"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#012358]">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                          <Phone size={16} />
                        </span>
                        <input
                          type="tel"
                          required
                          placeholder="+977 98..."
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-slate-400 focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email Address & Inquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#012358]">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          value={formData.emailAddress}
                          onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-slate-400 focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 transition-all"
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-[#012358]">Topic / Category</label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 transition-all"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Volunteering / Drives">Volunteering &amp; Drives</option>
                        <option value="Blood Donation Program">Blood Donation Program</option>
                        <option value="Donations & Sponsorships">Donations &amp; Sponsorships</option>
                        <option value="Project Collaboration">Project Collaboration</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#012358]">
                      Subject <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                        <MessageSquare size={16} />
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-slate-400 focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 transition-all"
                      />
                    </div>
                  </div>

                  {/* Your Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-[#012358]">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute top-3 left-0 pl-3.5 flex items-start pointer-events-none text-[#64748B]">
                        <PenTool size={16} />
                      </span>
                      <textarea
                        required
                        rows={4}
                        placeholder="Write your message or inquiry here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-slate-400 focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 bg-[#FD6100] hover:bg-[#e05600] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map Card (6 cols on lg) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-4 sm:p-5 border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
            {/* Map Header bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3 px-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#005DCD] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#012358]">Parci Studio / BTN Foundation</h3>
                  <p className="text-xs text-[#64748B]">Itahari, Sunsari, Koshi Province</p>
                </div>
              </div>

              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#005DCD] text-xs font-bold transition-colors cursor-pointer"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Embedded Iframe */}
            <div className="relative w-full flex-1 min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden border border-[#E2E8F0]">
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full min-h-[380px] sm:min-h-[420px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Better Tomorrow Nepal Foundation Location Map - Parci Studio, Itahari"
              />
            </div>

            {/* Directions Footer bar */}
            <div className="mt-3 pt-3 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-[#64748B]">
              <span>Coordinates: 26.6731&deg; N, 87.2391&deg; E</span>
              <Link
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005DCD] hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}