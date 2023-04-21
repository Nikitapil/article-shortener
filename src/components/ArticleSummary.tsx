import {loader} from '../assets';

interface IArticleSummaryProps {
  isLoading: boolean;
  isError: boolean;
  summary: string;
}

export const ArticleSummary = ({isLoading, isError, summary}: IArticleSummaryProps) => {

  if (isLoading) {
    return <img src={loader} alt="loader" className="w-20 h-20 object-contain"/>
  }

  if (isError) {
    return <p className="font-inter font-bold text-black text-center">Something went wrong</p>
  }

  if (summary) {
    return (
      <div className="flex flex-col gap-3">
        <h2 className="font-satoshi font-bold text-gray-600 text-xl">
          Article <span className="blue_gradient">Summary</span>
        </h2>
        <div className="summary_box">
          <p className="font-inter font-medium text-sm text-gray-700">{summary}</p>
        </div>
      </div>
    )
  }

  return null;
};

