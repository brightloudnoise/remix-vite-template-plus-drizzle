import type { LoaderFunctionArgs } from '@remix-run/node'
import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { db } from '~/drizzle/config.server'
import { items } from '~/drizzle/schema/items.server'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const itemsData = await db.select().from(items).all()

  return null
}

const linkStyle = 'underline decoration-dotted'
export default function Index() {
  return (
    <div>
      <div className="flex items-baseline gap-8 p-8 bg-blue-300">
        <img
          src="/images/Remix-Logo-Full-Black.svg"
          alt="Remix Logo"
          className="h-12"
        />
        <h1 className="text-5xl font-bold">Welcome to Remix</h1>
      </div>
      <div className="p-8">
        <ul className="flex flex-col gap-2">
          <li>
            <Link to="/counter" className={linkStyle}>
              Counter
            </Link>
          </li>
          <li>
            <a
              className={linkStyle}
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              className={linkStyle}
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a
              className={linkStyle}
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
