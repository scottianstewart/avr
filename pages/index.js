import Head from 'next/head'

import { fetchEntries } from '@utils/contentfulEntries'

import Footer from '@components/Footer'
import RecipeCard from '@components/RecipeCard'

export default function Home({ recipes }) {
  return (
    <div className="container">
      <Head>
        <title>A.V.R</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="recipe-grid">
          {recipes.map((p) => {
            return <RecipeCard key={p.title} image={p.recipeImage.fields} title={p.title} />
          })}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
        }

        .recipe-grid {
          display: flex;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const recipes = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      recipes,
    },
  }
}
