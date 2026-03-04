import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_NEWS } from '@/lib/queries'
import { NewsData } from '@/lib/types'
import Header from '../components/Header'
import NewsCard from '../components/NewsCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'News | Lakeview School District - K-12',
  description: 'Read the latest news, announcements, and updates from Lakeview School District.',
}

async function getNews() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<NewsData>({
      query: GET_NEWS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeNewsItems?.nodes || []
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}

export default async function NewsPage() {
  const items = await getNews()

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
              News
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Stay informed with the latest updates, achievements, and stories from our school community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold font-display text-gray-600 mb-2">No News Yet</h2>
              <p className="text-gray-500">
                News will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
