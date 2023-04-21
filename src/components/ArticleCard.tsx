import {copy} from '../assets';
import {TArticle} from '../types/article';
import {toast} from 'react-toastify';

interface IArticleCardProps {
  article: TArticle;
  setArticle: (article: TArticle) => void;
}

export const ArticleCard = ({article, setArticle}: IArticleCardProps) => {

  const handleCopy = async () => {
    await navigator.clipboard.writeText(article.url)
    toast.info('Copied!', {
      autoClose: 1000,
      hideProgressBar: true,
      theme: 'dark'
    })
  }

  const handleClick = () => setArticle(article)

  return (
    <div
      className="link_card"
      key={article.url}
      onClick={handleClick}
    >
      <button className="copy_btn" onClick={handleCopy}>
        <img
          className="w-[40%] h-[40%] object-contain"
          src={copy}
          alt="copy_icon"
        />
      </button>

      <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
        {article.url}
      </p>
    </div>
  );
};

