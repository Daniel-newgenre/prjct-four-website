import { Metadata } from 'next'

import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const metadata: Metadata = {
  title: 'Prject Four',
  description: 'Welcome to my website',
}

const HomePage = async () => {
  const payload = await getPayload({ config: configPromise })

  const users = await payload.find({
    collection: 'users',
  })

  return (
    <main>
      <h1 className="text-4xl font-bold text-red-600">Welcome {users.docs[0].email}</h1>
      <p>This is a simple page setup.</p>
    </main>
  )
}

export default HomePage
