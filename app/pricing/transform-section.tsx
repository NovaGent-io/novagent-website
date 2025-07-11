      {/* Transform Your Business Section - Simple & Strategic */}
      <section className="relative py-20 md:py-32 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* The Question */}
            <div className="text-center mb-20">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                What if you could hire the perfect employee?
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                One that works 24/7. Never takes a break. Learns from every interaction.
                <br />And costs less than a single human salary.
              </motion.p>
            </div>

            {/* The Comparison */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Traditional Hire */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-8 rounded-2xl border border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                    Traditional Employee
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">$60,000+ salary per year</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Works 40 hours per week</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Takes 3-6 months to train</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Can only do one task at a time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Knowledge leaves when they do</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* NovaGent Agent */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-8 rounded-2xl border-2 border-purple-500 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20">
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                    Your NovaGent Agent
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">From $499 per month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Works 24/7/365</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Ready in 2 weeks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Handles unlimited tasks simultaneously</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">Gets smarter every day</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* The Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Join the companies already saving millions
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
                {/* Company Logos Placeholder */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
                ))}
              </div>
            </motion.div>

            {/* The Single CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-6 text-lg"
                onClick={() => router.push("/contact")}
              >
                See Your Agent in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                15-minute demo. No commitment. See ROI instantly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
