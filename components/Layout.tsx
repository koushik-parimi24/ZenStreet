import { ReactNode } from 'react'
import DarkModeToggle from './DarkModeToggle'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-4 bg-blue-600 text-white flex justify-between items-center">
        <span className="text-xl font-bold">Multi-Step Form</span>
        <DarkModeToggle />
      </header>
      <main className="container mx-auto p-4">{children}</main>
      <footer className="p-4 bg-blue-600 text-white text-center">
        © 2023 Multi-Step Form Project
      </footer>
    </div>
  )
}

export default Layout

