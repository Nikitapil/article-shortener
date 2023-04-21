import {linkIcon} from '../assets'
import {useEffect, useState} from 'react';
import * as React from 'react';
import {useLazyGetSummaryQuery} from '../services/article';
import {ArticleCard} from './ArticleCard';
import {TArticle} from '../types/article';
import {ArticleSummary} from './ArticleSummary';

export const Demo = () => {
  const [article, setArticle] = useState<TArticle>({
    url: '',
    summary: ''
  })
  const [allArticles, setAllArticles] = useState<TArticle[]>([])

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {data} = await getSummary({articleUrl: article.url})
    if (data?.summary) {
      const newArticle = {...article, summary: data.summary}
      const updatedAllArticles = [newArticle, ...allArticles.slice(0, 10)]

      setArticle(newArticle)
      setAllArticles(updatedAllArticles)

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles))
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setArticle({...article, url: e.target.value})

  useEffect(() => {
    const articlesFromLocalStorage = localStorage.getItem('articles');
    if (articlesFromLocalStorage) {
      setAllArticles(JSON.parse(articlesFromLocalStorage))
    }
  }, [])

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input
            type="url"
            value={article.url}
            onChange={handleInput}
            required
            className="url_input peer"
          />

          <button type="submit" className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700">
            ↵
          </button>
        </form>

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map(article =>
            <ArticleCard key={article.url} article={article} setArticle={setArticle}/>
          )}
        </div>
      </div>

      <div className="my-10 max-w-full flex justify-center items-center">
        <ArticleSummary isLoading={isFetching} isError={!!error} summary={article.summary}/>
      </div>
    </section>
  );
};

