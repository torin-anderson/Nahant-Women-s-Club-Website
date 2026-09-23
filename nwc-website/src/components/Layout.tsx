import { NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/donations', label: 'Donations' },
  { to: '/join', label: 'Join' },
]

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200">
        <nav className="mx-auto flex max-w-6xl items-center justify-center px-6 py-5">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-bold no-underline transition-colors ${
                      isActive
                        ? 'text-amber-600'
                        : 'text-blue-600 hover:text-amber-500'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        {children}
      </main>

      <footer className="border-t border-gray-200 px-6 py-5 text-center text-gray-700">
        <p>&copy; 2025 Nahant Women's Club. All rights reserved.</p>
      </footer>
    </div>
  )
}
