"use client";

import AdminPage from "@/app/admin/layout";
import { Save, Bell, Shield, Globe, Palette, Database, Key, Trash2, Download, Upload, Check, Loader2, Mail, Phone } from "lucide-react";
import { useState } from "react";

const settingsSections = [
  { id: "general", label: "General", icon: Globe },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "database", label: "Database", icon: Database },
  { id: "api", label: "API Keys", icon: Key },
];

function SectionCard({ title, description, children, icon: Icon }: { title: string; description: string; children: React.ReactNode; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#005DCD]/10 text-[#005DCD] flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#012358]">{title}</h3>
          <p className="text-sm text-[#64748B]">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function Toggle({ label, description, checked, onChange, disabled = false }: { label: string; description: string; checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <label className="flex items-center justify-between py-3 border-b border-[#E2E8F0]/50 last:border-0 cursor-pointer">
      <div className="flex-1">
        <p className="font-medium text-[#012358]">{label}</p>
        <p className="text-sm text-[#64748B]">{description}</p>
      </div>
      <button
        type="button"
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        className={`relative w-11 h-6 rounded-full transition-colors ${checked ? "bg-[#FD6100]" : "bg-[#E2E8F0]"} disabled:opacity-50`}
        role="switch"
        aria-checked={checked}
      >
        <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform ${checked ? "translate-x-5" : ""}`} />
      </button>
    </label>
  );
}

function InputField({ label, type = "text", value, onChange, placeholder, helpText, icon }: { label: string; type?: string; value: string; onChange: (v: string) => void; placeholder?: string; helpText?: string; icon?: React.ReactNode }) {
  return (
    <div className="py-3 border-b border-[#E2E8F0]/50 last:border-0">
      <label className="block text-sm font-medium text-[#012358] mb-1">{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 ${icon ? "pl-10" : ""}`}
        />
      </div>
      {helpText && <p className="text-xs text-[#94A3B8] mt-1">{helpText}</p>}
    </div>
  );
}

function SelectField({ label, value, onChange, options, helpText }: { label: string; value: string; onChange: (v: string) => void; options: { value: string; label: string }[]; helpText?: string }) {
  return (
    <div className="py-3 border-b border-[#E2E8F0]/50 last:border-0">
      <label className="block text-sm font-medium text-[#012358] mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 appearance-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {helpText && <p className="text-xs text-[#94A3B8] mt-1">{helpText}</p>}
    </div>
  );
}

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("general");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // General settings
  const [siteName, setSiteName] = useState("Better Tomorrow Nepal");
  const [siteTagline, setSiteTagline] = useState("Empowering Lives Since 2026");
  const [siteEmail, setSiteEmail] = useState("contact@bettertomorrownepal.org");
  const [sitePhone, setSitePhone] = useState("+977 980-0000000");
  const [siteAddress, setSiteAddress] = useState("Parci Studio, Itahari, Sunsari, Koshi Province, Nepal");
  const [timezone, setTimezone] = useState("Asia/Kathmandu");
  const [language, setLanguage] = useState("en");
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  // Appearance
  const [primaryColor, setPrimaryColor] = useState("#012358");
  const [secondaryColor, setSecondaryColor] = useState("#005DCD");
  const [accentColor, setAccentColor] = useState("#FD6100");
  const [darkMode, setDarkMode] = useState(false);
  const [compactMode, setCompactMode] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Notifications
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [donationAlerts, setDonationAlerts] = useState(true);
  const [volunteerAlerts, setVolunteerAlerts] = useState(true);
  const [projectUpdates, setProjectUpdates] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);

  // Security
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState("30");
  const [maxLoginAttempts, setMaxLoginAttempts] = useState("5");
  const [passwordMinLength, setPasswordMinLength] = useState("8");
  const [requireSpecialChars, setRequireSpecialChars] = useState(true);
  const [ipWhitelistEnabled, setIpWhitelistEnabled] = useState(false);

  // Database
  const [autoBackup, setAutoBackup] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState("daily");
  const [backupRetention, setBackupRetention] = useState("30");
  const [dbOptimization, setDbOptimization] = useState(true);

  // API Keys
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: "Stripe Production", key: "sk_live_***", created: "2024-01-15", status: "Active" },
    { id: 2, name: "SendGrid", key: "SG.***", created: "2024-01-20", status: "Active" },
    { id: 3, name: "Cloudinary", key: "cloudinary://***", created: "2024-02-01", status: "Revoked" },
  ]);
  const [newKeyName, setNewKeyName] = useState("");
  const [showNewKey, setShowNewKey] = useState(false);
  const [generatedKey, setGeneratedKey] = useState("");

  const handleSave = async () => {
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const generateApiKey = () => {
    const key = `sk_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    setGeneratedKey(key);
    setShowNewKey(true);
  };

  const deleteApiKey = (id: number) => {
    setApiKeys((prev) => prev.filter((k) => k.id !== id));
  };

  const renderSection = () => {
    switch (activeSection) {
      case "general":
        return (
          <>
            <SectionCard title="Site Information" description="Basic information about your organization" icon={Globe}>
              <InputField label="Site Name" value={siteName} onChange={setSiteName} placeholder="Better Tomorrow Nepal" icon={<Globe className="w-5 h-5" />} />
              <InputField label="Tagline" value={siteTagline} onChange={setSiteTagline} placeholder="Empowering Lives Since 2026" />
              <InputField label="Contact Email" type="email" value={siteEmail} onChange={setSiteEmail} placeholder="contact@example.org" icon={<Mail className="w-5 h-5" />} />
              <InputField label="Contact Phone" type="tel" value={sitePhone} onChange={setSitePhone} placeholder="+977 980-0000000" icon={<Phone className="w-5 h-5" />} />
              <div className="py-3 border-b border-[#E2E8F0]/50 last:border-0">
                <label className="block text-sm font-medium text-[#012358] mb-1">Address</label>
                <textarea
                  value={siteAddress}
                  onChange={(e) => setSiteAddress(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15 resize-none"
                  placeholder="Enter full address"
                />
              </div>
            </SectionCard>

            <SectionCard title="Regional Settings" description="Configure timezone and language preferences" icon={Globe}>
              <SelectField
                label="Timezone"
                value={timezone}
                onChange={setTimezone}
                options={[
                  { value: "Asia/Kathmandu", label: "Asia/Kathmandu (UTC+5:45)" },
                  { value: "UTC", label: "UTC (UTC+0)" },
                  { value: "Asia/Dubai", label: "Asia/Dubai (UTC+4)" },
                  { value: "Asia/Kolkata", label: "Asia/Kolkata (UTC+5:30)" },
                ]}
              />
              <SelectField
                label="Default Language"
                value={language}
                onChange={setLanguage}
                options={[
                  { value: "en", label: "English" },
                  { value: "ne", label: "Nepali (नेपाली)" },
                  { value: "hi", label: "Hindi (हिन्दी)" },
                ]}
              />
            </SectionCard>

            <SectionCard title="Maintenance" description="Put the site into maintenance mode" icon={Database}>
              <Toggle
                label="Maintenance Mode"
                description="When enabled, only admins can access the site. Visitors will see a maintenance page."
                checked={maintenanceMode}
                onChange={setMaintenanceMode}
              />
            </SectionCard>
          </>
        );

      case "appearance":
        return (
          <>
            <SectionCard title="Color Theme" description="Customize the brand colors used across the site" icon={Palette}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#012358] mb-1">Primary Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="w-12 h-12 rounded-xl border border-[#E2E8F0] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] font-mono focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#012358] mb-1">Secondary Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="w-12 h-12 rounded-xl border border-[#E2E8F0] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] font-mono focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#012358] mb-1">Accent Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="w-12 h-12 rounded-xl border border-[#E2E8F0] cursor-pointer"
                    />
                    <input
                      type="text"
                      value={accentColor}
                      onChange={(e) => setAccentColor(e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] font-mono focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15"
                    />
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#94A3B8] mt-3">Changes require a rebuild to take effect on the live site.</p>
            </SectionCard>

            <SectionCard title="Display Options" description="Configure UI display preferences" icon={Palette}>
              <Toggle label="Dark Mode" description="Enable dark mode by default for all users" checked={darkMode} onChange={setDarkMode} />
              <Toggle label="Compact Mode" description="Reduce spacing for a more dense interface" checked={compactMode} onChange={setCompactMode} />
              <Toggle label="Animations" description="Enable transitions and animations across the site" checked={animationsEnabled} onChange={setAnimationsEnabled} />
            </SectionCard>
          </>
        );

      case "notifications":
        return (
          <>
            <SectionCard title="Email Notifications" description="Configure which email notifications you receive" icon={Bell}>
              <Toggle label="Enable Email Notifications" description="Master toggle for all email notifications" checked={emailNotifications} onChange={setEmailNotifications} />
              <Toggle label="New Donation Alerts" description="Receive email when a new donation is made" checked={donationAlerts} onChange={setDonationAlerts} />
              <Toggle label="New Volunteer Signups" description="Get notified when someone registers as a volunteer" checked={volunteerAlerts} onChange={setVolunteerAlerts} />
              <Toggle label="Project Updates" description="Receive updates when projects are created or modified" checked={projectUpdates} onChange={setProjectUpdates} />
              <Toggle label="Weekly Digest" description="Receive a weekly summary of all activity" checked={weeklyDigest} onChange={setWeeklyDigest} />
              <Toggle label="Marketing Emails" description="Receive occasional updates about new features and tips" checked={marketingEmails} onChange={setMarketingEmails} />
            </SectionCard>

            <SectionCard title="Push Notifications" description="Browser push notifications for real-time updates" icon={Bell}>
              <Toggle label="Enable Push Notifications" description="Allow browser notifications for important events" checked={pushNotifications} onChange={setPushNotifications} />
              <p className="text-xs text-[#94A3B8] mt-2">Requires browser permission. Manage in browser settings.</p>
            </SectionCard>
          </>
        );

      case "security":
        return (
          <>
            <SectionCard title="Authentication" description="Configure login security settings" icon={Shield}>
              <Toggle label="Two-Factor Authentication" description="Require 2FA for all admin accounts" checked={twoFactorEnabled} onChange={setTwoFactorEnabled} />
              <InputField label="Session Timeout (minutes)" type="number" value={sessionTimeout} onChange={setSessionTimeout} placeholder="30" helpText="Auto-logout after inactivity" />
              <InputField label="Max Login Attempts" type="number" value={maxLoginAttempts} onChange={setMaxLoginAttempts} placeholder="5" helpText="Lock account after failed attempts" />
            </SectionCard>

            <SectionCard title="Password Policy" description="Set requirements for user passwords" icon={Shield}>
              <InputField label="Minimum Length" type="number" value={passwordMinLength} onChange={setPasswordMinLength} placeholder="8" />
              <Toggle label="Require Special Characters" description="Passwords must contain at least one special character (!@#$%^&*)" checked={requireSpecialChars} onChange={setRequireSpecialChars} />
            </SectionCard>

            <SectionCard title="Access Control" description="Restrict access by IP address" icon={Shield}>
              <Toggle label="IP Whitelist" description="Only allow admin access from whitelisted IP addresses" checked={ipWhitelistEnabled} onChange={setIpWhitelistEnabled} />
              <p className="text-xs text-[#94A3B8] mt-2">Configure IP whitelist in your hosting provider or firewall settings.</p>
            </SectionCard>
          </>
        );

      case "database":
        return (
          <>
            <SectionCard title="Backup Configuration" description="Automated database backup settings" icon={Database}>
              <Toggle label="Enable Automatic Backups" description="Automatically backup database on schedule" checked={autoBackup} onChange={setAutoBackup} />
              <SelectField
                label="Backup Frequency"
                value={backupFrequency}
                onChange={setBackupFrequency}
                options={[
                  { value: "hourly", label: "Every Hour" },
                  { value: "daily", label: "Daily at 2:00 AM" },
                  { value: "weekly", label: "Weekly on Sunday" },
                ]}
              />
              <InputField label="Retention Period (days)" type="number" value={backupRetention} onChange={setBackupRetention} placeholder="30" helpText="How long to keep backups before deletion" />
            </SectionCard>

            <SectionCard title="Manual Actions" description="Perform immediate database operations" icon={Database}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#012358] hover:border-[#005DCD] hover:bg-white transition-all flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> Backup Now
                </button>
                <button className="px-6 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#012358] hover:border-[#005DCD] hover:bg-white transition-all flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" /> Restore Backup
                </button>
                <button className="px-6 py-3 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm font-medium text-[#012358] hover:border-[#005DCD] hover:bg-white transition-all flex items-center justify-center gap-2">
                  <Database className="w-5 h-5" /> Optimize Database
                </button>
              </div>
            </SectionCard>

            <SectionCard title="Performance" description="Database optimization settings" icon={Database}>
              <Toggle label="Auto Optimization" description="Automatically optimize database tables weekly" checked={dbOptimization} onChange={setDbOptimization} />
            </SectionCard>
          </>
        );

      case "api":
        return (
          <>
            <SectionCard title="API Keys" description="Manage API keys for third-party integrations" icon={Key}>
              <div className="space-y-3 mb-4">
                {apiKeys.map((key) => (
                  <div key={key.id} className="flex items-center justify-between p-4 bg-[#F8F9FB] rounded-xl border border-[#E2E8F0]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#005DCD]/10 text-[#005DCD] flex items-center justify-center">
                        <Key className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-[#012358]">{key.name}</p>
                        <p className="text-xs text-[#94A3B8] font-mono">{key.key}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${key.status === "Active" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>
                        {key.status}
                      </span>
                      <button onClick={() => deleteApiKey(key.id)} className="p-2 rounded-lg text-[#64748B] hover:bg-[#E2E8F0] hover:text-[#012358]">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="Key name (e.g., Stripe Production)"
                  className="flex-1 px-4 py-2.5 bg-[#F8F9FB] border border-[#E2E8F0] rounded-xl text-sm text-[#012358] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#005DCD] focus:bg-white focus:ring-2 focus:ring-[#005DCD]/15"
                />
                <button onClick={generateApiKey} className="px-4 py-2.5 bg-[#FD6100] hover:bg-[#e05700] text-white font-medium rounded-xl flex items-center gap-2">
                  <Key className="w-4 h-4" /> Generate
                </button>
              </div>
            </SectionCard>

            {showNewKey && (
              <SectionCard title="New API Key Generated" description="Copy this key now - it won't be shown again" icon={Key}>
                <div className="flex items-center gap-3 p-4 bg-[#F8F9FB] rounded-xl border border-[#E2E8F0]">
                  <input
                    type="text"
                    value={generatedKey}
                    readOnly
                    className="flex-1 px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-sm font-mono text-[#012358]"
                  />
                  <button className="px-4 py-2.5 bg-[#005DCD] hover:bg-[#005DCD]/90 text-white font-medium rounded-xl flex items-center gap-2">
                    <Check className="w-4 h-4" /> Copied
                  </button>
                </div>
                <div className="flex justify-end">
                  <button onClick={() => { setShowNewKey(false); setGeneratedKey(""); }} className="text-sm text-[#005DCD] hover:underline">I&apos;ve copied the key</button>
                </div>
              </SectionCard>
            )}
          </>
        );

      default:
        return null;
    }
  };

  return (
    <AdminPage title="Settings">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Navigation */}
        <aside className="lg:w-56 flex-shrink-0">
          <nav className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
            <ul className="p-2" role="list">
              {settingsSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-[#012358] text-white shadow-sm"
                          : "text-[#64748B] hover:bg-[#F8F9FB] hover:text-[#012358]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      {section.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-semibold text-[#64748B]">Configure your organization settings</h2>
            </div>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-6 py-2.5 bg-[#FD6100] hover:bg-[#e05700] text-white font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
            </button>
          </div>

          <div className="space-y-6">{renderSection()}</div>
        </div>
      </div>
    </AdminPage>
  );
}