import Head from 'next/head'
import Link from 'next/link'

// Components
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'

// Libs
import { getSortedPostsData } from '../lib/posts'

// Styles
import utilStyles from '../styles/utils.module.css'
import indexStyles from './index.module.css'


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={indexStyles.alignCenter}>
          Eu me chamo Pedro Augusto. Nesse blog, pretendo compartilhar o que sei sobre desenvolvimento web
          e programação. <strong>Seja bem-vindo(a)!</strong>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Artigos</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}