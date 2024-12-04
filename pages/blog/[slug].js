import { getAllPostSlugs, getPostData } from '../../lib/posts'
import BlogLayout from '@components/blog/BlogLayout'

export default function Post({ frontMatter, content }) {
  return (
    <BlogLayout frontMatter={frontMatter}>
      {content}
    </BlogLayout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug)
  return {
    props: {
      frontMatter: postData.frontMatter,
      content: postData.content
    }
  }
}