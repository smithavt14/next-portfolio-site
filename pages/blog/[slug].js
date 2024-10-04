import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import Header from '@components/Header';
import Subtitle from '@components/Subtitle';
import Body from '@components/Body';

const BlogPost = ({ content, frontMatter }) => {

  const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
  }

  const animationDelay = '.4s'; // Set the desired animation delay

  return (
    <section
      id="blog"
      onAnimationEnd={(event) => endAnimation(event)}
      className="relative flex flex-col h-screen box-border pt-48 px-6 md:px-12 lg:px-24 xl:px-48">

      <Header>{frontMatter.title}</Header>
      <div className="text-midnight dark:text-white" dangerouslySetInnerHTML={{ __html: content }} />

    </section >
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('pages/blog/posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('pages/blog/posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      frontMatter,
      content: contentHtml,
    },
  };
}

export default BlogPost;