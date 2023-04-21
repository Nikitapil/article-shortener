import {logo} from '../assets/index';

export const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-3 mb-10">
        <img src={logo} alt="shortener_logo" className="w-28 object-contain"/>
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open('https://github.com/Nikitapil')}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Shorten articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">Simplify your reading with Article shortener than transforms length articles into</h2>
    </header>
  );
};

