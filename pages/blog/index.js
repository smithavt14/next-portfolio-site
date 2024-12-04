import Header from '@components/Header';
import Subtitle from '@components/Subtitle';
import Body from '@/components/blog/Body';
import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';

export async function getStaticProps() {
    const posts = getAllPosts();
    return {
        props: { posts },
    };
}

const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
}

export default function BlogPage({ posts }) {
    return (
        <section
            id="blog"
            onAnimationEnd={(event) => endAnimation(event)}
            className="relative flex flex-col justify-center box-border z-20 mb-32 px-6 md:px-12 lg:px-24 xl:px-48">

            <Header style={{ animationDelay: '.2s' }}>
                {"There's a Raptor in my Cereal"}
            </Header>

            <Subtitle style={{ animationDelay: '.4s' }}>
                {"Welcome to my blog! Here, I share my thoughts on various topics related to web development, technology, and more."}
            </Subtitle>

            <ol>
                {posts.map((post) => (
                    <li
                        key={post.slug}
                        className="w-full my-5 text-base dark:text-slate-400 text-slate-500 lg:w-8/12 opacity-0 animate-fadeUp"
                        style={{ animationDelay: '.6s' }}
                    >
                        <Link href={`/blog/${post.slug}`}>
                            <Body>{post.frontMatter.title}</Body>
                        </Link>
                    </li>
                ))}
            </ol>
        </section>
    );
}