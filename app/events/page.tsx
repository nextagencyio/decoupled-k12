import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_EVENTS } from '@/lib/queries'
import { EventsData } from '@/lib/types'
import Header from '../components/Header'
import EventCard from '../components/EventCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Events | Lakeview School District - K-12',
  description: 'Stay up to date with school events, assemblies, performances, and activities at Lakeview School District.',
}

async function getEvents() {
  try {
    const client = getClient()
    const data = await client.raw(GET_EVENTS, { first: 50 })
    return data?.nodeEvents?.nodes || []
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

export default async function EventsPage() {
  const items = await getEvents()

  return (
    <div className="min-h-screen bg-primary-50">
      <Header />

      <section className="relative bg-primary-600 overflow-hidden text-white py-16 md:py-24">
        <div className="absolute top-5 left-10 w-40 h-40 bg-primary-500 rounded-full opacity-30" />
        <div className="absolute bottom-5 right-16 w-32 h-32 bg-accent-400 rounded-full opacity-20" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-primary-400 rounded-full opacity-25" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Events
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Join us for exciting events, assemblies, and community gatherings throughout the school year.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No Events Yet</h2>
              <p className="text-gray-500">
                Events will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (
                <EventCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
