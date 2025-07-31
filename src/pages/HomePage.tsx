import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  Moon,
  Sun
} from 'lucide-react'

const HomePage: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [cryptoPrices, setCryptoPrices] = useState<any[]>([])

  // Hero images that change every 3 seconds
  const heroImages = [
    'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/7567522/pexels-photo-7567522.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/7567486/pexels-photo-7567486.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/7567440/pexels-photo-7567440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ]

  // Mock crypto data
  const mockCryptos = [
    { symbol: 'BTC', name: 'Bitcoin', price: 43250.50, change: 2.5 },
    { symbol: 'ETH', name: 'Ethereum', price: 2650.75, change: -1.2 },
    { symbol: 'USDT', name: 'Tether', price: 1.00, change: 0.1 },
    { symbol: 'BNB', name: 'Binance Coin', price: 315.20, change: 3.8 },
    { symbol: 'SOL', name: 'Solana', price: 98.45, change: 5.2 },
    { symbol: 'ADA', name: 'Cardano', price: 0.52, change: -2.1 },
    { symbol: 'AVAX', name: 'Avalanche', price: 36.80, change: 4.1 },
    { symbol: 'DOT', name: 'Polkadot', price: 7.25, change: 1.8 },
    { symbol: 'MATIC', name: 'Polygon', price: 0.85, change: -0.5 },
    { symbol: 'LINK', name: 'Chainlink', price: 14.60, change: 2.9 },
    { symbol: 'UNI', name: 'Uniswap', price: 6.75, change: -1.8 },
    { symbol: 'LTC', name: 'Litecoin', price: 72.30, change: 1.5 },
    { symbol: 'ATOM', name: 'Cosmos', price: 10.45, change: 3.2 },
    { symbol: 'XRP', name: 'Ripple', price: 0.63, change: -0.8 },
    { symbol: 'DOGE', name: 'Dogecoin', price: 0.08, change: 4.5 }
  ]

  useEffect(() => {
    setCryptoPrices(mockCryptos)
    
    // Change hero image every 3 seconds
    const imageTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(imageTimer)
  }, [])

  const cryptoLogos = [
    '₿', 'Ξ', '₮', 'BNB', 'SOL', 'ADA', 'AVAX', 'DOT', 'MATIC', 'LINK',
    'UNI', 'LTC', 'ATOM', 'XRP', 'DOGE', 'SHIB', 'TRX', 'NEAR', 'FTM', 'ALGO',
    'VET', 'ICP', 'HBAR', 'APE', 'SAND', 'MANA', 'CRO', 'LRC', 'ENJ', 'BAT',
    'ZEC', 'DASH', 'XMR', 'ETC', 'BCH', 'BSV', 'XLM', 'AXS', 'THETA', 'FLOW',
    'EGLD', 'XTZ', 'KSM', 'WAVES', 'QTUM', 'ZIL', 'HOT', 'OMG', 'SNX', 'COMP'
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        {/* Crypto Ticker */}
        <div className="bg-blue-600 dark:bg-blue-700 text-white py-1 overflow-hidden">
          <div className="animate-scroll flex space-x-8 whitespace-nowrap">
            {cryptoPrices.concat(cryptoPrices).map((crypto, index) => (
              <span key={index} className="flex items-center space-x-2 text-sm">
                <span className="font-semibold">{crypto.symbol}</span>
                <span>${crypto.price.toLocaleString()}</span>
                <span className={crypto.change >= 0 ? 'text-green-300' : 'text-red-300'}>
                  {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Crypto Logos Scroll */}
        <div className="bg-gray-100 dark:bg-gray-800 py-2 overflow-hidden">
          <div className="animate-scroll-slow flex space-x-6 whitespace-nowrap">
            {cryptoLogos.concat(cryptoLogos).map((logo, index) => (
              <span key={index} className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              BIANOTRADES
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/buy" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Buy Crypto
              </Link>
              <Link to="/sell" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Sell Crypto
              </Link>
              <Link to="/convert" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Convert
              </Link>
              <Link to="/deposit" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Deposit
              </Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                to="/login"
                className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Trade Crypto with
            <span className="text-blue-400"> Confidence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Join millions of traders on the world's most trusted crypto platform. 
            Buy, sell, and convert over 50+ cryptocurrencies with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Trading Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose BIANOTRADES?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the future of crypto trading with our advanced platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Bank-Level Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your funds are protected with 256-bit SSL encryption and cold storage technology.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Execute trades in milliseconds with our high-performance trading engine.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Global Access
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Trade from anywhere in the world with 24/7 customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-blue-200">Trusted Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2.5T+</div>
              <div className="text-blue-200">Volume Traded</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Cryptocurrencies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Trading Suite
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to trade crypto like a pro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Buy Crypto</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Purchase cryptocurrencies with credit card, bank transfer, or other payment methods.</p>
            </div>

            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <Users className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Sell Crypto</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Convert your crypto back to fiat currency and withdraw to your bank account.</p>
            </div>

            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Convert</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Instantly convert between different cryptocurrencies at competitive rates.</p>
            </div>

            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <Shield className="w-8 h-8 text-red-600 dark:text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure Wallet</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Store your crypto safely with our industry-leading security measures.</p>
            </div>

            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <Globe className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Send to Friends</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Transfer crypto to friends and family instantly with zero fees.</p>
            </div>

            <div className="group p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
              <Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Advanced Trading</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Access professional trading tools and real-time market data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of users who trust BIANOTRADES for their crypto needs
          </p>
          <Link
            to="/register"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Create Free Account
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-6 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-blue-400 mb-4">BIANOTRADES</div>
              <p className="text-gray-400 mb-6">
                The world's most trusted cryptocurrency exchange platform. Trade with confidence.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold">i</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/buy" className="hover:text-white transition-colors">Buy Crypto</Link></li>
                <li><Link to="/sell" className="hover:text-white transition-colors">Sell Crypto</Link></li>
                <li><Link to="/convert" className="hover:text-white transition-colors">Convert</Link></li>
                <li><Link to="/deposit" className="hover:text-white transition-colors">Deposit</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Staking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">NFT Marketplace</a></li>
                <li><a href="#" className="hover:text-white transition-colors">DeFi Earn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Futures Trading</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status Page</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bug Bounty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Learn</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Crypto Basics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trading Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Academy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Glossary</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                © 2025 BIANOTRADES. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-400">SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-gray-400">Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">Trusted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110">
          <span className="text-xl">💬</span>
        </button>
      </div>
    </div>
  )
}

export default HomePage