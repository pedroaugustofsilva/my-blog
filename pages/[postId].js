import Head from 'next/head'

// Components
import Layout from '../components/layout'
import Date from '../components/date'

// Libs
import { getAllPostIds, getPostData } from '../lib/posts'

// Styles
import utilStyles from '../styles/utils.module.css'

import Prism from 'prismjs';
import { useEffect } from 'react'

export default function Post({ postData }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
        Prism.highlightAll();
    }
  }, [])
  return (
    <Layout>
      <Head>
        <title> { postData.title } </title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.postId)
  return {
    props: {
      postData
    }
  }
}