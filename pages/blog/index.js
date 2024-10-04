import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Blog from '@components/Blog';

export default function BlogPage({ posts, darkMode }) {
    return (
        <Blog darkMode={darkMode} posts={posts} />
    );
}

export async function getStaticProps() {
    const blogDirectory = path.join(process.cwd(), 'pages/blog/posts');
    const files = fs.readdirSync(blogDirectory);

    const posts = files.map((filename) => {
        const filePath = path.join(blogDirectory, filename);
        const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');

        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            slug: filename.replace('.md', ''),
            frontMatter,
        };
    });

    return {
        props: {
            posts,
        },
    };
}