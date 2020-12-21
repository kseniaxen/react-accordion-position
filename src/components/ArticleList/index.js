import Article from '../Article'
import './style.css'
import { useState } from "react";

export default function ArticleList({ articles, checkBoxState }) {
    const [openArticleId, setOpenArticleId] = useState(null)
    const handleClick = (articleId) => setOpenArticleId(openArticleId === articleId ? null : articleId)
    const articleElements =
        articles.map((article, idx) =>
                <li
                    key={idx}
                    className='article-list__li'
                    style={checkBoxState ? { 'width': '30%'} : {'width' : '100%'}}>
                    <Article
                        article={article}
                        isOpen={openArticleId === article.id}
                        onButtonClick={() => { handleClick(article.id) }}
                    />
                </li>)
    return (
        <ul style={checkBoxState ? { 'display': 'flex'} : { 'display': 'inline' }} className='main'>
            {articleElements}
        </ul>
    )
}
