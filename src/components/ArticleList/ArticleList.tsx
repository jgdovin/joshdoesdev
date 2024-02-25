"use client";
import React, { useEffect, useState } from 'react'
import ArticlePreview, { ArticlePreviewType } from '@/components/ArticlePreview'
import { getArticlePreviews } from '@/actions/ArticleActions';
type Props = {}

const ArticleList = (props: Props) => {
  const [articles, setArticles] = useState<ArticlePreviewType[]>()

  useEffect(() => {
    getArticlePreviews().then((res) => setArticles(res))
  }, [])

  return (
    <div className="relative flex flex-col gap-6 w-full">
      {
        articles?.map((article) => (
          <ArticlePreview
            key={article.title}
            title={article.title}
            date={article.date}
            description={article.description}
          />
        ))
      }
    </div>
  )
}

export default ArticleList