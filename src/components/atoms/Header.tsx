import { FC } from 'react';

interface LinkProps {
  text: string;
  href: string;
}

const Link: FC<LinkProps> = ({ text, href }) => (
  <a
    href={href}
    rel="noreferrer"
    target="_blank"
    className="font-medium text-md mx-3"
  >
    {text}
  </a>
);

const Header = () => (
  <header className="bg-white w-full shadow-md py-2 fixed top-0 z-20">
    <div className="flex flex-row items-center justify-between px-4 sm:px-16">
      <img
        src="/assets/png/logo.png"
        alt="User"
        height={122}
        width={167}
        className="object-contain"
      />
      <nav>
        <Link text="About" href="https://anuraggarg.vercel.app/" />
        <Link
          text="Blogs"
          href="https://medium.com/@garganurag893/how-to-build-game-using-react-native-853455e5b1f5"
        />
        <Link
          text="Special"
          href="https://www.npmjs.com/package/react-native-phone-number-input"
        />
      </nav>
    </div>
  </header>
);

export default Header;
