import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, RssIcon } from '@heroicons/react/24/solid'

const links = [
  {
    name: 'Documentation',
    href: '#',
    description: 'Learn how to integrate our tools with your app.',
    icon: BookOpenIcon,
  },
  { name: 'API Reference', href: '#', description: 'A complete API reference for our libraries.', icon: QueueListIcon },
  {
    name: 'Guides',
    href: '#',
    description: 'Installation guides that cover popular setups.',
    icon: BookmarkSquareIcon,
  },
  { name: 'Blog', href: '#', description: 'Read our latest news and articles.', icon: RssIcon },
]

export default function FOFWithPopularPages() {
  return (
    <div className="bg-white">
      <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto sm:h-12"
        />
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base/8 font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            This page does not exist
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
          <h2 className="sr-only">Popular pages</h2>
          <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
            {links.map((link, linkIdx) => (
              <li key={linkIdx} className="relative flex gap-x-6 py-6">
                <div className="flex size-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                  <link.icon aria-hidden="true" className="size-6 text-indigo-600" />
                </div>
                <div className="flex-auto">
                  <h3 className="text-sm/6 font-semibold text-gray-900">
                    <a href={link.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {link.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm/6 text-gray-600">{link.description}</p>
                </div>
                <div className="flex-none self-center">
                  <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex justify-center">
            <a href="#" className="text-sm/6 font-semibold text-indigo-600">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
