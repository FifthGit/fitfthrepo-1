import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Eye, 
  EyeOff, 
  TrendingUp, 
  TrendingDown, 
  Plus, 
  Send, 
  ArrowUpRight, 
  ArrowDownLeft,
  Settings,
  LogOut,
  User,
  Shield,
  Bell,
  CreditCard,
  History,
  Moon,
  Sun
} from 'lucide-react'
import toast from 'react-hot-toast'

const DashboardPage: React.FC = () => {
  const { user, signOut } = useAuth()
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [cryptoPrices, setCryptoPrices] = useState<any[]>([])

  // Mock user data
  const [userBalance] = useState({
    usd: 12450.75,
    btc: 0.25,
    eth: 2.5,
    usdt: 1000.00
  })

  const [kycStatus] = useState({
    tier: 1,
    verified: true,
    maxLimit: 20000
  })

  // Mock crypto prices
  const mockCryptos = [
    { symbol: 'BTC', name: 'Bitcoin', price: 43250.50, change: 2.5, icon: '₿' },
    { symbol: 'ETH', name: 'Ethereum', price: 2650.75, change: -1.2, icon: 'Ξ' },
    { symbol: 'USDT', name: 'Tether', price: 1.00, change: 0.1, icon: '₮' },
    { symbol: 'BNB', name: 'Binance Coin', price: 315.20, change: 3.8, icon: 'BNB' },
    { symbol: 'SOL', name: 'Solana', price: 98.45, change: 5.2, icon: 'SOL' },
    { symbol: 'ADA', name: 'Cardano', price: 0.52, change: -2.1, icon: 'ADA' }
  ]

  const [transactions] = useState([
    { id: 1, type: 'buy', crypto: 'BTC', amount: 0.1, usd: 4325, status: 'completed', date: '2025-01-30' },
    { id: 2, type: 'sell', crypto: 'ETH', amount: 1.0, usd: 2650, status: 'completed', date: '2025-01-29' },
    { id: 3, type: 'deposit', crypto: 'USD', amount: 5000, usd: 5000, status: 'pending', date: '2025-01-28' }
  ])

  useEffect(() => {
    setCryptoPrices(mockCryptos)
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut()
      toast.success('Signed out successfully')
      navigate('/')
    } catch (error) {
      toast.error('Failed to sign out')
    }
  }

  if (!user) {
    navigate('/login')
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                BIANOTRADES
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {user.name || user.email}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    KYC Tier {kycStatus.tier}
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleSignOut}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.name || 'Trader'}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here's what's happening with your crypto portfolio today.
          </p>
        </div>

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-blue-100 mb-2">Total Portfolio Value</p>
              <div className="flex items-center space-x-3">
                <h2 className="text-3xl font-bold">
                  {balanceVisible ? `$${userBalance.usd.toLocaleString()}` : '••••••'}
                </h2>
                <button
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                >
                  {balanceVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1 text-green-300">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">+12.5%</span>
              </div>
              <p className="text-blue-100 text-sm">24h change</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div>
              <p className="text-blue-200 text-sm">Bitcoin</p>
              <p className="font-semibold">{balanceVisible ? `${userBalance.btc} BTC` : '••••'}</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm">Ethereum</p>
              <p className="font-semibold">{balanceVisible ? `${userBalance.eth} ETH` : '••••'}</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm">USDT</p>
              <p className="font-semibold">{balanceVisible ? `${userBalance.usdt} USDT` : '••••'}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link
            to="/buy"
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 group"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Buy Crypto</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Purchase cryptocurrencies</p>
          </Link>

          <Link
            to="/sell"
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 group"
          >
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowDownLeft className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Sell Crypto</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Convert to cash</p>
          </Link>

          <Link
            to="/convert"
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 group"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Convert</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Swap cryptocurrencies</p>
          </Link>

          <button className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700 group">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Send className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Send to Friends</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Transfer crypto</p>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Prices */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Live Crypto Prices</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {cryptoPrices.map((crypto) => (
                    <div key={crypto.symbol} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                          <span className="font-bold text-sm">{crypto.icon}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">{crypto.symbol}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{crypto.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900 dark:text-white">
                          ${crypto.price.toLocaleString()}
                        </div>
                        <div className={`text-sm flex items-center ${
                          crypto.change >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {crypto.change >= 0 ? (
                            <TrendingUp className="w-3 h-3 mr-1" />
                          ) : (
                            <TrendingDown className="w-3 h-3 mr-1" />
                          )}
                          {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* KYC Status & Recent Transactions */}
          <div className="space-y-6">
            {/* KYC Status */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">KYC Status</h3>
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Verification</span>
                    <span className="text-green-600 font-semibold">Verified ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Current Tier</span>
                    <span className="font-semibold text-gray-900 dark:text-white">Tier {kycStatus.tier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Limit</span>
                    <span className="font-semibold text-gray-900 dark:text-white">${kycStatus.maxLimit.toLocaleString()}</span>
                  </div>
                  <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Upgrade to Tier 2
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
                  <History className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          tx.type === 'buy' ? 'bg-green-100 dark:bg-green-900' :
                          tx.type === 'sell' ? 'bg-red-100 dark:bg-red-900' :
                          'bg-blue-100 dark:bg-blue-900'
                        }`}>
                          {tx.type === 'buy' ? (
                            <Plus className="w-4 h-4 text-green-600 dark:text-green-400" />
                          ) : tx.type === 'sell' ? (
                            <ArrowDownLeft className="w-4 h-4 text-red-600 dark:text-red-400" />
                          ) : (
                            <CreditCard className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white capitalize">
                            {tx.type} {tx.crypto}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{tx.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-gray-900 dark:text-white">
                          ${tx.usd.toLocaleString()}
                        </div>
                        <div className={`text-sm ${
                          tx.status === 'completed' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {tx.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                  View All Transactions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110">
          <span className="text-xl">💬</span>
        </button>
      </div>
    </div>
  )
}

export default DashboardPage