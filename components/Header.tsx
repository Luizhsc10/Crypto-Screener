import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="main-container inner">
        <Link href="/" aria-label="Go to homepage">
          <Image
            className="logo"
            src="logo.svg"
            alt="CoinPulse Logo"
            width={132}
            height={30}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
