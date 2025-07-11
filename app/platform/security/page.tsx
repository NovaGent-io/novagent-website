"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Key, Server, Database, Users, FileCheck, AlertCircle, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const securityFeatures = [
  {
    icon: Server,
    title: "Single-Tenant Isolation",
    description: "Each client gets a dedicated MCP server in an isolated Docker container with complete data segregation",
    highlights: ["No shared compute or memory", "Virtual network isolation", "Zero cross-contamination risk"]
  },
  {
    icon: Lock,
    title: "Zero-Trust Security Model",
    description: "Every request is verified and authenticated with multi-factor authentication required for all access",
    highlights: ["Principle of least privilege", "Role-Based Access Control", "Continuous verification"]
  },
  {
    icon: Key,
    title: "Enterprise Encryption",
    description: "Bank-grade encryption protects your data at every stage",
    highlights: ["AES-256 at rest", "TLS 1.2+ in transit", "Secure key management"]
  },
  {
    icon: Database,
    title: "Data Privacy & Protection",
    description: "Your data is yours alone - never used for AI training or shared with other clients",
    highlights: ["Row Level Security", "GDPR compliant", "Strict retention policies"]
  }
]

const complianceItems = [
  { title: "SOC 2 Ready", description: "Architecture built to meet all five Trust Services Criteria", status: "ready" },
  { title: "HIPAA Compliant", description: "Ready to sign Business Associate Agreements (BAAs)", status: "ready" },
  { title: "GDPR Ready", description: "Full compliance with data protection regulations", status: "ready" },
  { title: "ISO 27001", description: "Information security management standards", status: "planned" }
]

const securityPractices = [
  "Regular security audits and penetration testing",
  "Continuous monitoring and threat detection",
  "Incident response procedures",
  "Employee background checks and security training",
  "Secure development lifecycle (SDLC)",
  "24/7 security oversight"
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Navigation Back Link */}
      <div className="container mx-auto px-4 sm:px-6 pt-20 pb-4">
        <Link href="/platform" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Platform
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 dark:from-cyan-500/20 dark:via-purple-500/20 dark:to-fuchsia-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="w-10 h-10 text-cyan-600 dark:text-cyan-400" />
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500">
              Enterprise-Grade Security
            </span>
            <br />
            <span className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Built In From Day One
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            NovaGent&apos;s security-first architecture ensures your data is protected with the same standards trusted by healthcare, financial services, and government organizations.
          </motion.p>
        </div>
      </section>

      {/* Core Security Architecture Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Core Security Architecture
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Multi-layered protection designed to keep your data safe and your operations secure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="relative p-[2px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-fuchsia-500/20 dark:from-cyan-500/30 dark:via-purple-500/30 dark:to-fuchsia-500/30 rounded-2xl hover:from-cyan-500/30 hover:via-purple-500/30 hover:to-fuchsia-500/30 dark:hover:from-cyan-500/40 dark:hover:via-purple-500/40 dark:hover:to-fuchsia-500/40 transition-all duration-300">
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 mr-2 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Compliance & Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meeting the highest standards of security and compliance for enterprise requirements
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 h-full border border-gray-100 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <FileCheck className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                    {item.status === "ready" ? (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Ready
                      </span>
                    ) : (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        Planned
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Security Practices
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Continuous security measures to protect your business
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 dark:from-cyan-500/20 dark:via-purple-500/20 dark:to-fuchsia-500/20 rounded-2xl p-8 sm:p-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {securityPractices.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{practice}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Security Features Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Platform Security Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced features that keep your AI operations secure and compliant
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Access Control & Monitoring */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-slate-800"
            >
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Access Control & Monitoring
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Complete audit trails of all agent actions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Real-time monitoring of all data access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Automated threat detection and response</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">24/7 security oversight</span>
                </li>
              </ul>
            </motion.div>

            {/* Infrastructure Security */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-slate-800"
            >
              <div className="flex items-center mb-6">
                <Server className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Infrastructure Security
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Cloud provider security compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Automated security patching and updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">DDoS protection and rate limiting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">Redundant backups and disaster recovery</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Center Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 dark:from-cyan-500/20 dark:via-purple-500/20 dark:to-fuchsia-500/20 rounded-2xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  NovaGent Trust Center
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Transparency is core to our security philosophy. Access detailed documentation, security whitepapers, and compliance reports.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
                  >
                    Security Whitepaper
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
                  >
                    Contact Security Team
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client-Specific Security Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Industry-Specific Security
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tailored security measures for your industry&apos;s unique requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Healthcare */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-slate-800"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                For Healthcare
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>? HIPAA BAA availability</li>
                <li>? Patient data protection measures</li>
                <li>? Healthcare-specific compliance features</li>
              </ul>
            </motion.div>

            {/* Financial Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-slate-800"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 dark:from-purple-500/20 dark:to-fuchsia-500/20 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                For Financial Services
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>? Financial data encryption standards</li>
                <li>? Audit trail capabilities</li>
                <li>? Regulatory compliance support</li>
              </ul>
            </motion.div>

            {/* Enterprise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-slate-800"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 dark:from-fuchsia-500/20 dark:to-cyan-500/20 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-fuchsia-600 dark:text-fuchsia-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                For Enterprise
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>? SSO/SAML integration</li>
                <li>? Advanced RBAC options</li>
                <li>? Dedicated security contact</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 border-t border-gray-100 dark:border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Security is Our Foundation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn more about how NovaGent protects your business with enterprise-grade security.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/contact">
                Schedule a Security Review
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
