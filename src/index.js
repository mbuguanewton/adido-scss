// our main js file is src/index.js
import './scss/base.scss'

const element = document.querySelector('.articles__wrapper--list-items')

const arrowLeft = document.querySelector('.arrow-left')
const arrowRight = document.querySelector('.arrow-right')
const articles = document.querySelectorAll('.article')

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left <
            (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight)
    )
}

window.addEventListener('load', () => {
    if (isElementInViewport(articles[0])) {
        arrowLeft.classList.add('disabled')
    }
})

const scrollToNextArticle = () => {
    arrowLeft.classList.remove('disabled')

    const ArticleWidth = articles[0].offsetWidth
    const containerWidth = element.offsetWidth

    if (ArticleWidth === containerWidth) {
        element.scrollBy({
            top: 0,
            left: ArticleWidth + 16,
            behavior: 'smooth',
        })
    }

    if (ArticleWidth < containerWidth) {
        element.scrollBy({
            top: 0,
            left: ArticleWidth + 16,
            behavior: 'smooth',
        })
    }

    const lastArticleInViewPort = isElementInViewport(
        articles[articles.length - 1]
    )

    if (lastArticleInViewPort) {
        arrowRight.classList.add('disabled')
    }
}

const scrollToPreviousArticle = () => {
    arrowRight.classList.remove('disabled')

    const ArticleWidth = articles[0].offsetWidth
    const containerWidth = element.offsetWidth

    if (ArticleWidth === containerWidth) {
        element.scrollBy({
            top: 0,
            left: -ArticleWidth - 16,
            behavior: 'smooth',
        })
    }

    if (ArticleWidth < containerWidth) {
        element.scrollBy({
            top: 0,
            left: -ArticleWidth - 16,
            behavior: 'smooth',
        })
    }

    const firstArticleInViewPort = isElementInViewport(articles[0])

    if (firstArticleInViewPort) {
        arrowLeft.classList.add('disabled')
    }
}

arrowRight.addEventListener('click', scrollToNextArticle)
arrowLeft.addEventListener('click', scrollToPreviousArticle)
