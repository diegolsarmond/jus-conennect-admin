// Mock data for the CRM SaaS system

export interface Company {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'trial';
  createdAt: string;
  subscription?: Subscription;
  users: User[];
  lastActivity: string;
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  billingCycle: 'monthly' | 'annual';
  features: string[];
  maxUsers: number;
  maxCases: number;
  isActive: boolean;
}

export interface Subscription {
  id: string;
  companyId: string;
  planId: string;
  status: 'active' | 'trialing' | 'past_due' | 'canceled' | 'suspended';
  currentPeriodStart: string;
  currentPeriodEnd: string;
  trialEnd?: string;
  canceledAt?: string;
  mrr: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'support';
  companyId: string;
  lastLogin: string;
  isActive: boolean;
}

export interface SupportTicket {
  id: string;
  companyId: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
}

export interface Analytics {
  mrr: number;
  arr: number;
  churnRate: number;
  conversionRate: number;
  activeSubscriptions: number;
  trialSubscriptions: number;
  totalCompanies: number;
  monthlyGrowth: number;
}

// Mock Plans
export const mockPlans: Plan[] = [
  {
    id: '1',
    name: 'Básico',
    description: 'Para pequenos escritórios',
    price: 99,
    billingCycle: 'monthly',
    features: ['Até 5 usuários', 'Até 100 casos', 'Suporte por email', 'Relatórios básicos'],
    maxUsers: 5,
    maxCases: 100,
    isActive: true,
  },
  {
    id: '2',
    name: 'Profissional',
    description: 'Para escritórios em crescimento',
    price: 199,
    billingCycle: 'monthly',
    features: ['Até 20 usuários', 'Casos ilimitados', 'Suporte prioritário', 'Relatórios avançados', 'API access'],
    maxUsers: 20,
    maxCases: -1,
    isActive: true,
  },
  {
    id: '3',
    name: 'Enterprise',
    description: 'Para grandes escritórios',
    price: 399,
    billingCycle: 'monthly',
    features: ['Usuários ilimitados', 'Casos ilimitados', 'Suporte 24/7', 'Customizações', 'SLA garantido'],
    maxUsers: -1,
    maxCases: -1,
    isActive: true,
  },
];

// Mock Companies
export const mockCompanies: Company[] = [
  {
    id: '1',
    name: 'Silva & Advogados',
    email: 'contato@silvaadvogados.com.br',
    status: 'active',
    createdAt: '2024-01-15',
    lastActivity: '2024-03-10',
    users: [
      {
        id: '1',
        name: 'Carlos Silva',
        email: 'carlos@silvaadvogados.com.br',
        role: 'admin',
        companyId: '1',
        lastLogin: '2024-03-10',
        isActive: true,
      },
      {
        id: '2',
        name: 'Ana Santos',
        email: 'ana@silvaadvogados.com.br',
        role: 'user',
        companyId: '1',
        lastLogin: '2024-03-09',
        isActive: true,
      },
    ],
  },
  {
    id: '2',
    name: 'Costa & Pereira Advocacia',
    email: 'admin@costapereiira.com.br',
    status: 'trial',
    createdAt: '2024-02-20',
    lastActivity: '2024-03-08',
    users: [
      {
        id: '3',
        name: 'Maria Costa',
        email: 'maria@costapereira.com.br',
        role: 'admin',
        companyId: '2',
        lastLogin: '2024-03-08',
        isActive: true,
      },
    ],
  },
  {
    id: '3',
    name: 'Tribunal & Associados',
    email: 'contato@tribunal.adv.br',
    status: 'active',
    createdAt: '2024-01-05',
    lastActivity: '2024-03-11',
    users: [
      {
        id: '4',
        name: 'João Tribunal',
        email: 'joao@tribunal.adv.br',
        role: 'admin',
        companyId: '3',
        lastLogin: '2024-03-11',
        isActive: true,
      },
      {
        id: '5',
        name: 'Paula Alves',
        email: 'paula@tribunal.adv.br',
        role: 'user',
        companyId: '3',
        lastLogin: '2024-03-10',
        isActive: true,
      },
      {
        id: '6',
        name: 'Roberto Lima',
        email: 'roberto@tribunal.adv.br',
        role: 'user',
        companyId: '3',
        lastLogin: '2024-03-09',
        isActive: false,
      },
    ],
  },
];

// Mock Subscriptions
export const mockSubscriptions: Subscription[] = [
  {
    id: '1',
    companyId: '1',
    planId: '2',
    status: 'active',
    currentPeriodStart: '2024-03-01',
    currentPeriodEnd: '2024-04-01',
    mrr: 199,
  },
  {
    id: '2',
    companyId: '2',
    planId: '1',
    status: 'trialing',
    currentPeriodStart: '2024-02-20',
    currentPeriodEnd: '2024-03-20',
    trialEnd: '2024-03-20',
    mrr: 0,
  },
  {
    id: '3',
    companyId: '3',
    planId: '3',
    status: 'active',
    currentPeriodStart: '2024-03-01',
    currentPeriodEnd: '2024-04-01',
    mrr: 399,
  },
];

// Add subscriptions to companies
mockCompanies.forEach(company => {
  const subscription = mockSubscriptions.find(sub => sub.companyId === company.id);
  if (subscription) {
    company.subscription = subscription;
  }
});

// Mock Support Tickets
export const mockSupportTickets: SupportTicket[] = [
  {
    id: '1',
    companyId: '1',
    title: 'Problema com relatórios',
    description: 'Os relatórios não estão sendo gerados corretamente',
    status: 'open',
    priority: 'high',
    createdAt: '2024-03-10',
    updatedAt: '2024-03-10',
    assignedTo: 'Suporte Técnico',
  },
  {
    id: '2',
    companyId: '2',
    title: 'Dúvida sobre upgrade de plano',
    description: 'Gostaria de saber mais sobre o plano profissional',
    status: 'resolved',
    priority: 'medium',
    createdAt: '2024-03-08',
    updatedAt: '2024-03-09',
    assignedTo: 'Vendas',
  },
  {
    id: '3',
    companyId: '3',
    title: 'Usuário não consegue fazer login',
    description: 'Um dos usuários está com problema de acesso',
    status: 'in_progress',
    priority: 'medium',
    createdAt: '2024-03-09',
    updatedAt: '2024-03-10',
    assignedTo: 'Suporte Técnico',
  },
];

// Mock Analytics
export const mockAnalytics: Analytics = {
  mrr: 598, // Sum of active MRR
  arr: 7176, // MRR * 12
  churnRate: 5.2,
  conversionRate: 78.5,
  activeSubscriptions: 2,
  trialSubscriptions: 1,
  totalCompanies: 3,
  monthlyGrowth: 12.5,
};

// Mock monthly data for charts
export const mockMonthlyData = [
  { month: 'Oct', mrr: 350, customers: 8, churn: 4.2 },
  { month: 'Nov', mrr: 420, customers: 12, churn: 3.8 },
  { month: 'Dec', mrr: 485, customers: 15, churn: 6.1 },
  { month: 'Jan', mrr: 520, customers: 18, churn: 2.9 },
  { month: 'Feb', mrr: 580, customers: 22, churn: 3.4 },
  { month: 'Mar', mrr: 598, customers: 25, churn: 5.2 },
];

export const mockPlanDistribution = [
  { name: 'Básico', value: 40, customers: 10 },
  { name: 'Profissional', value: 35, customers: 8 },
  { name: 'Enterprise', value: 25, customers: 7 },
];

export interface ServerLog {
  id: string;
  level: 'info' | 'warn' | 'error';
  timestamp: string;
  message: string;
  logger?: string;
  metadata?: Record<string, unknown>;
  request?: {
    method: string;
    host: string;
    uri: string;
    status: number;
    durationMs: number;
    size: number;
    clientIp: string;
    protocol: string;
    userAgent: string;
    forwardedFor?: string;
  };
}

export const mockServerLogs: ServerLog[] = [
  {
    id: 'log-1',
    level: 'info',
    timestamp: '2025-09-15T17:07:15.296242+00:00',
    message: 'Using config from file',
    metadata: {
      file: '/assets/Caddyfile',
    },
  },
  {
    id: 'log-2',
    level: 'info',
    timestamp: '2025-09-15T17:07:15.301657+00:00',
    message: 'Adapted config to JSON',
    metadata: {
      adapter: 'caddyfile',
    },
  },
  {
    id: 'log-3',
    level: 'warn',
    timestamp: '2025-09-15T17:07:15.302323+00:00',
    logger: 'admin',
    message: 'Admin endpoint disabled',
    metadata: {
      admin_endpoint: 'disabled',
    },
  },
  {
    id: 'log-4',
    level: 'info',
    timestamp: '2025-09-15T17:07:15.302607+00:00',
    logger: 'http.auto_https',
    message: 'Automatic HTTPS is completely disabled for server',
    metadata: {
      server_name: 'srv0',
    },
  },
  {
    id: 'log-5',
    level: 'info',
    timestamp: '2025-09-15T17:07:15.306016+00:00',
    logger: 'http.log',
    message: 'Server running',
    metadata: {
      name: 'srv0',
      protocols: ['h1', 'h2', 'h3'],
    },
  },
  {
    id: 'log-6',
    level: 'info',
    timestamp: '2025-09-15T17:07:15.306064+00:00',
    message: 'Serving initial configuration',
  },
  {
    id: 'log-7',
    level: 'info',
    timestamp: '2025-09-15T17:07:15.306252+00:00',
    logger: 'tls.cache.maintenance',
    message: 'Started background certificate maintenance',
    metadata: {
      cache: '0xc00080e500',
    },
  },
  {
    id: 'log-8',
    level: 'info',
    timestamp: '2025-09-15T17:07:15.346178+00:00',
    logger: 'tls',
    message: 'Cleaning storage unit',
    metadata: {
      storage: 'FileStorage:/root/.local/share/caddy',
    },
  },
  {
    id: 'log-9',
    level: 'info',
    timestamp: '2025-09-15T17:07:15.346889+00:00',
    logger: 'tls',
    message: 'Finished cleaning storage units',
  },
  {
    id: 'log-10',
    level: 'info',
    timestamp: '2025-09-15T17:10:23.929662+00:00',
    logger: 'http.log.access.log0',
    message: 'Handled request',
    metadata: {
      referer: 'https://easypanel02.quantumtecnologia.com.br/',
    },
    request: {
      method: 'GET',
      host: 'quantumtecnologia-jus-conennect-admin.3a2ucf.easypanel.host',
      uri: '/',
      status: 200,
      durationMs: 20.37,
      size: 380,
      clientIp: '190.52.73.117',
      protocol: 'HTTP/1.1',
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
      forwardedFor: '190.52.73.117',
    },
  },
  {
    id: 'log-11',
    level: 'info',
    timestamp: '2025-09-15T17:16:24.800494+00:00',
    logger: 'http.log.access.log0',
    message: 'Handled request',
    metadata: {
      cache_control: 'max-age=0',
    },
    request: {
      method: 'GET',
      host: 'quantumtecnologia-jus-conennect-admin.3a2ucf.easypanel.host',
      uri: '/',
      status: 304,
      durationMs: 1.35,
      size: 0,
      clientIp: '190.52.73.117',
      protocol: 'HTTP/1.1',
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
      forwardedFor: '190.52.73.117',
    },
  },
  {
    id: 'log-12',
    level: 'info',
    timestamp: '2025-09-15T17:16:25.575566+00:00',
    logger: 'http.log.access.log0',
    message: 'Handled request',
    metadata: {
      cache_control: 'max-age=0',
    },
    request: {
      method: 'GET',
      host: 'quantumtecnologia-jus-conennect-admin.3a2ucf.easypanel.host',
      uri: '/',
      status: 304,
      durationMs: 0.31,
      size: 0,
      clientIp: '190.52.73.117',
      protocol: 'HTTP/1.1',
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
      forwardedFor: '190.52.73.117',
    },
  },
];
