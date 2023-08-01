import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open('https://github.com/donleonardo101/ai1')}
          className="black_btn"
        >
          kod źródłowy strony by Krzysztof G
        </button>
      </nav>

      <h1 className="head_text">
        Streszczaj artykuły za pomocą <br className="max-md:hidden" />
        <span className="orange_gradient">sztucznej inteligencji</span>
      </h1>
      <h2 className="desc">
        Uprość sobie czytanie dzięki Sumz, otwartoźródłowemu streszczaczowi artykułów, który przekształca długie artykuły w jasne i zwięzłe streszczenia.
      </h2>
    </header>
  )
}

export default Hero