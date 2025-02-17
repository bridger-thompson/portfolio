import Link from "next/link";
import { FC } from "react"

export interface Section {
  title: string;
  articles: {
    title: string;
    url: string;
    description: string;
  }[]
}

const ArticleSection: FC<{
  section: Section
}> = ({ section }) => {
  return (
    <>
      <div className="flex items-center">
        <div className="mr-2 text-2xl">{section.title}</div>
        <div className="flex-1 border-t border-gray-600"></div>
      </div>
      <div className="mx-5 mb-16">
        <div className="mt-2 text-gray-200">
          {section.articles.map((a, i) => (
            <div className="mb-5" key={i}>
              <div className="flex items-start text-lg">
                <i className="fas fa-caret-right text-blue-500 mr-3 mt-1"></i>
                <Link href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-500 underline">
                  {a.title}
                </Link>
              </div>
              <div className="ms-6 font-light">{a.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ArticleSection