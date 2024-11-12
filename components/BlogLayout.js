import Header from './Header'
import Subtitle from './Subtitle'
import Body from './Body'

const endAnimation = (event) => {
    event.target.classList.remove('opacity-0')
    event.target.classList.add('opacity-100')
}

const BlogLayout = ({ children, frontMatter }) => {
    return (
        <article
            onAnimationEnd={(event) => endAnimation(event)}
            className="prose lg:prose-xl dark:prose-invert mx-auto px-4"
        >
            <Header style={{ animationDelay: '.2s' }}>{frontMatter.title}</Header>
            <Subtitle style={{ animationDelay: '.4s' }}>{frontMatter.date} - {frontMatter.category}</Subtitle>
            <Body style={{ animationDelay: '.6s' }}>{children}</Body>
        </article>
    )
}

export default BlogLayout