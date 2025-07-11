"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, 
  X, 
  Search,
  Zap,
  Database,
  MessageSquare,
  Mail,
  Calendar,
  Phone,
  FileText,
  BarChart,
  Users,
  CreditCard,
  Globe,
  Shield,
  Cloud,
  Layers,
  Info,
  ExternalLink,
  Sparkles,
  Package,
  Grid,
  Table,
  ClipboardList,
  FolderOpen,
  HardDrive,
  ShoppingBag
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip"

interface Integration {
  id: string
  name: string
  category: string
  icon: React.ReactElement
  status: 'native' | 'available'
  description: string
  features?: string[]
  setupTime?: string
}

const integrations: Integration[] = [
  // CRM & Sales
  {
    id: 'salesforce',
    name: 'Salesforce',
    category: 'CRM & Sales',
    icon: <Cloud className="h-5 w-5" />,
    status: 'native',
    description: 'Full bi-directional sync with Salesforce CRM',
    features: ['Contact sync', 'Lead management', 'Opportunity tracking', 'Custom fields'],
    setupTime: '30 mins'
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    category: 'CRM & Sales',
    icon: <Database className="h-5 w-5" />,
    status: 'native',
    description: 'Complete HubSpot integration for sales and marketing',
    features: ['Contact sync', 'Deal tracking', 'Email tracking', 'Marketing automation'],
    setupTime: '20 mins'
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    category: 'CRM & Sales',
    icon: <Layers className="h-5 w-5" />,
    status: 'available',
    description: 'Sales pipeline management and automation',
    features: ['Deal tracking', 'Activity logging', 'Email integration'],
    setupTime: '15 mins'
  },
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    category: 'CRM & Sales',
    icon: <Database className="h-5 w-5" />,
    status: 'available',
    description: 'Connect with Zoho CRM for lead and contact management',
    setupTime: '25 mins'
  },
  {
    id: 'copper',
    name: 'Copper',
    category: 'CRM & Sales',
    icon: <Database className="h-5 w-5" />,
    status: 'available',
    description: 'CRM that works seamlessly with Google Workspace',
    features: ['Gmail integration', 'Pipeline management', 'Contact tracking'],
    setupTime: '20 mins'
  },
  {
    id: 'agile-crm',
    name: 'Agile CRM',
    category: 'CRM & Sales',
    icon: <Layers className="h-5 w-5" />,
    status: 'available',
    description: 'All-in-one CRM with sales, marketing, and service automation',
    setupTime: '25 mins'
  },
  {
    id: 'clickup-monday',
    name: 'ClickUp Monday CRM',
    category: 'CRM & Sales',
    icon: <Layers className="h-5 w-5" />,
    status: 'available',
    description: 'Project management and CRM functionality combined',
    setupTime: '30 mins'
  },
  {
    id: 'activecamp',
    name: 'ActiveCampaign',
    category: 'CRM & Sales',
    icon: <Mail className="h-5 w-5" />,
    status: 'available',
    description: 'Email marketing, marketing automation, and CRM',
    features: ['Email automation', 'Lead scoring', 'Sales automation'],
    setupTime: '35 mins'
  },
  
  // Marketing
  {
    id: 'google-ads',
    name: 'Google Ads',
    category: 'Marketing',
    icon: <Globe className="h-5 w-5" />,
    status: 'native',
    description: 'Manage and optimize Google Ads campaigns',
    features: ['Campaign management', 'Bid optimization', 'Reporting', 'Keyword research'],
    setupTime: '45 mins'
  },
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    category: 'Marketing',
    icon: <Mail className="h-5 w-5" />,
    status: 'available',
    description: 'Email marketing automation and campaign management',
    features: ['Email campaigns', 'Audience segmentation', 'Analytics', 'Templates'],
    setupTime: '25 mins'
  },
  
  // Communication
  {
    id: 'slack',
    name: 'Slack',
    category: 'Communication',
    icon: <MessageSquare className="h-5 w-5" />,
    status: 'native',
    description: 'Send notifications and messages to Slack channels',
    features: ['Channel messaging', 'DMs', 'File sharing', 'Webhooks'],
    setupTime: '5 mins'
  },
  {
    id: 'zoom',
    name: 'Zoom',
    category: 'Communication',
    icon: <Users className="h-5 w-5" />,
    status: 'available',
    description: 'Video conferencing and meeting scheduling',
    features: ['Meeting creation', 'Recording access', 'Calendar sync'],
    setupTime: '15 mins'
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    category: 'Communication',
    icon: <Users className="h-5 w-5" />,
    status: 'available',
    description: 'Integrate with Teams for enterprise communication',
    features: ['Channel messaging', 'Meeting scheduling', 'File collaboration'],
    setupTime: '20 mins'
  },
  {
    id: 'gmail',
    name: 'Gmail',
    category: 'Communication',
    icon: <Mail className="h-5 w-5" />,
    status: 'native',
    description: 'Send and receive emails through Gmail',
    features: ['Email sending', 'Inbox monitoring', 'Attachment handling', 'Labels & filters'],
    setupTime: '10 mins'
  },
  {
    id: 'outlook',
    name: 'Outlook',
    category: 'Communication',
    icon: <Mail className="h-5 w-5" />,
    status: 'native',
    description: 'Full Outlook integration for enterprise email',
    features: ['Email management', 'Calendar sync', 'Contact sync'],
    setupTime: '15 mins'
  },
  
  // Scheduling
  {
    id: 'google-calendar',
    name: 'Google Calendar',
    category: 'Scheduling',
    icon: <Calendar className="h-5 w-5" />,
    status: 'native',
    description: 'Full calendar integration for scheduling',
    features: ['Event creation', 'Availability checking', 'Meeting scheduling', 'Reminders'],
    setupTime: '10 mins'
  },
  {
    id: 'calendly',
    name: 'Calendly',
    category: 'Scheduling',
    icon: <Calendar className="h-5 w-5" />,
    status: 'available',
    description: 'Automated scheduling with Calendly',
    features: ['Link generation', 'Booking management', 'Calendar sync'],
    setupTime: '15 mins'
  },
  
  // Productivity & Collaboration
  {
    id: 'google-sheets',
    name: 'Google Sheets',
    category: 'Productivity',
    icon: <Table className="h-5 w-5" />,
    status: 'native',
    description: 'Spreadsheet automation and data management',
    features: ['Data sync', 'Formula execution', 'Report generation'],
    setupTime: '10 mins'
  },
  {
    id: 'airtable',
    name: 'Airtable',
    category: 'Productivity',
    icon: <Grid className="h-5 w-5" />,
    status: 'available',
    description: 'Database and spreadsheet hybrid for flexible data management',
    features: ['Record management', 'Views & filters', 'Automation triggers'],
    setupTime: '20 mins'
  },
  {
    id: 'notion',
    name: 'Notion',
    category: 'Productivity',
    icon: <FileText className="h-5 w-5" />,
    status: 'available',
    description: 'All-in-one workspace for notes, docs, and databases',
    features: ['Page creation', 'Database sync', 'Content management'],
    setupTime: '25 mins'
  },
  {
    id: 'trello',
    name: 'Trello',
    category: 'Productivity',
    icon: <ClipboardList className="h-5 w-5" />,
    status: 'available',
    description: 'Visual project management with boards and cards',
    features: ['Card creation', 'Board management', 'Automation'],
    setupTime: '15 mins'
  },
  {
    id: 'asana',
    name: 'Asana',
    category: 'Productivity',
    icon: <ClipboardList className="h-5 w-5" />,
    status: 'available',
    description: 'Work management platform for teams',
    features: ['Task management', 'Project tracking', 'Timeline views'],
    setupTime: '20 mins'
  },
  
  // Storage
  {
    id: 'google-drive',
    name: 'Google Drive',
    category: 'Storage',
    icon: <FolderOpen className="h-5 w-5" />,
    status: 'native',
    description: 'Cloud storage and file management',
    features: ['File upload/download', 'Folder organization', 'Sharing permissions'],
    setupTime: '10 mins'
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    category: 'Storage',
    icon: <Package className="h-5 w-5" />,
    status: 'available',
    description: 'Cloud storage and file synchronization',
    features: ['File sync', 'Sharing', 'Version history'],
    setupTime: '15 mins'
  },
  
  // Databases
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Databases',
    icon: <HardDrive className="h-5 w-5" />,
    status: 'native',
    description: 'Direct PostgreSQL database connections',
    features: ['Query execution', 'Data sync', 'Real-time updates'],
    setupTime: '30 mins'
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Databases',
    icon: <HardDrive className="h-5 w-5" />,
    status: 'available',
    description: 'MySQL database integration',
    features: ['Query support', 'Data import/export', 'Schema management'],
    setupTime: '30 mins'
  },
  
  // Finance & E-commerce
  {
    id: 'stripe',
    name: 'Stripe',
    category: 'Finance',
    icon: <CreditCard className="h-5 w-5" />,
    status: 'available',
    description: 'Payment processing and subscription management',
    features: ['Payment automation', 'Invoice generation', 'Subscription handling'],
    setupTime: '30 mins'
  },
  {
    id: 'shopify',
    name: 'Shopify',
    category: 'E-commerce',
    icon: <ShoppingBag className="h-5 w-5" />,
    status: 'available',
    description: 'E-commerce platform integration',
    features: ['Order management', 'Inventory sync', 'Customer data'],
    setupTime: '35 mins'
  },
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    category: 'Finance',
    icon: <FileText className="h-5 w-5" />,
    status: 'available',
    description: 'Accounting and invoice automation',
    features: ['Invoice creation', 'Expense tracking', 'Financial reports'],
    setupTime: '40 mins'
  },

  
  // Support & Service
  {
    id: 'zendesk',
    name: 'Zendesk',
    category: 'Support & Service',
    icon: <MessageSquare className="h-5 w-5" />,
    status: 'native',
    description: 'Complete help desk integration',
    features: ['Ticket management', 'Knowledge base', 'Chat support', 'Analytics'],
    setupTime: '30 mins'
  },
  {
    id: 'intercom',
    name: 'Intercom',
    category: 'Support & Service',
    icon: <MessageSquare className="h-5 w-5" />,
    status: 'available',
    description: 'Customer messaging and support',
    setupTime: '25 mins'
  },

  
  // Enterprise & Security
  {
    id: 'okta',
    name: 'Okta',
    category: 'Enterprise & Security',
    icon: <Shield className="h-5 w-5" />,
    status: 'available',
    description: 'Enterprise SSO and identity management',
    setupTime: '60 mins'
  },
  {
    id: 'active-directory',
    name: 'Active Directory',
    category: 'Enterprise & Security',
    icon: <Shield className="h-5 w-5" />,
    status: 'available',
    description: 'Microsoft AD integration for enterprise',
    setupTime: '90 mins'
  },

]

const categories = [...new Set(integrations.map(i => i.category))]

export default function IntegrationChecker() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null)

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusBadge = (status: Integration['status']) => {
    switch (status) {
      case 'native':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Native</Badge>
      case 'available':
        return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Available</Badge>
    }
  }

  const stats = {
    native: integrations.filter(i => i.status === 'native').length,
    available: integrations.filter(i => i.status === 'available').length,
    total: integrations.length
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700">
          <div className="text-2xl font-bold text-green-700 dark:text-green-400">{stats.native}</div>
          <p className="text-sm text-green-600 dark:text-green-300">Native Integrations</p>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-700">
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">{stats.available}</div>
          <p className="text-sm text-blue-600 dark:text-blue-300">Additional Available</p>
        </Card>
        <Card className="p-4 text-center bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-900/20 dark:to-fuchsia-900/20 border-purple-200 dark:border-purple-700">
          <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">{stats.total}+</div>
          <p className="text-sm text-purple-600 dark:text-purple-300">Total Ready</p>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search integrations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? 'bg-purple-600 hover:bg-purple-700' : ''}
          >
            All Categories
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'bg-purple-600 hover:bg-purple-700' : ''}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2">
        <AnimatePresence mode="popLayout">
          {filteredIntegrations.map((integration, index) => (
            <motion.div
              key={integration.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: index * 0.02 }}
            >
              <Card 
                className="p-4 hover:shadow-md transition-all cursor-pointer hover:border-purple-300 dark:hover:border-purple-700 group"
                onClick={() => setSelectedIntegration(integration)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg transition-colors ${
                      integration.status === 'native' ? 'bg-green-100 dark:bg-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-800' :
                      integration.status === 'available' ? 'bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800' :
                      integration.status === 'coming-soon' ? 'bg-amber-100 dark:bg-amber-900 group-hover:bg-amber-200 dark:group-hover:bg-amber-800' :
                      'bg-slate-100 dark:bg-slate-800 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                    }`}>
                      {integration.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{integration.name}</h4>
                        {getStatusBadge(integration.status)}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {integration.description}
                      </p>
                      {integration.setupTime && (
                        <p className="text-xs text-slate-500 mt-1">
                          Setup: {integration.setupTime}
                        </p>
                      )}
                    </div>
                  </div>
                  {integration.status === 'native' && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Sparkles className="h-4 w-4 text-purple-500" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Deep native integration</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Selected Integration Details */}
      <AnimatePresence>
        {selectedIntegration && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t pt-4"
          >
            <Card className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white dark:bg-slate-800">
                    {selectedIntegration.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{selectedIntegration.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {selectedIntegration.category}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedIntegration(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {selectedIntegration.features && (
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Key Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedIntegration.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Check className="h-3 w-3 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Add to My Configuration
                </Button>
                <Button variant="outline">
                  Learn More
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Info */}
      <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-slate-600 dark:text-slate-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-slate-600 dark:text-slate-400">
            <p className="font-medium mb-1">And many more!</p>
            <p>We support hundreds of additional integrations and are constantly adding new ones. Contact us to request a specific integration or learn about our API for custom connections.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
