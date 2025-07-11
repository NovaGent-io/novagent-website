      {/* Agent Skills Section - Complete Redesign */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInAnimation} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Build Your AI Workforce
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each skill transforms your AI agent into a specialized expert. Mix and match to create the perfect digital employee for your business.
            </p>
          </motion.div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg">
              All Skills
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 transition-all">
              Sales & Growth
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 transition-all">
              Operations
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-500 transition-all">
              Support & Intelligence
            </button>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="group bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg border ${colorMap[skill.color]}`}>
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">{skill.category}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {skill.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${skill.basePrice}
                    <span className="text-sm font-normal text-gray-500">/mo</span>
                  </span>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More
                  </Button>
                </div>

                {/* Key Metric */}
                <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Zap className="h-4 w-4 mr-2 text-yellow-500" />
                    <span>{skill.metric}</span>
                  </div>
                </div>

                {/* Features (shown on hover) */}
                <div className="mt-3 space-y-1 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
                  {skill.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-500">
                      <Check className="h-3 w-3 mr-1 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Skills Button */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
            >
              View All 14+ Skills
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Interactive Calculator CTA */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-1">
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10 rounded-2xl" />
                <div className="relative z-10">
                  <Calculator className="h-16 w-16 text-purple-600 dark:text-purple-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    Ready to Build Your Custom AI Agent?
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                    Use our interactive pricing calculator to design your perfect AI workforce and see exactly what it will cost
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl"
                    onClick={() => setShowCalculator(true)}
                  >
                    Open Pricing Calculator
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
