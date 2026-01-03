import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react'
//import Button from '../Button/Button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { items } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)

  const handleSearch = (e) => {
    e.preventDefault()
    // Implémenter la logique de recherche
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-gray-900">ShopEasy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Accueil
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium">
              Produits
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 font-medium">
              Catégories
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              À propos
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher des produits..."
                className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-700 hover:text-blue-600" size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Profile */}
            <Link to={user ? '/dashboard' : '/login'} className="flex items-center space-x-2">
              <User className="text-gray-700 hover:text-blue-600" size={24} />
              {user && (
                <span className="hidden md:inline text-sm font-medium">
                  {user.name}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="mb-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </form>
            </div>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="py-2 hover:text-blue-600">
                Accueil
              </Link>
              <Link to="/products" className="py-2 hover:text-blue-600">
                Produits
              </Link>
              <Link to="/categories" className="py-2 hover:text-blue-600">
                Catégories
              </Link>
              <Link to="/about" className="py-2 hover:text-blue-600">
                À propos
              </Link>
              {user && (
                <Link to="/dashboard" className="py-2 hover:text-blue-600">
                  Tableau de bord
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header