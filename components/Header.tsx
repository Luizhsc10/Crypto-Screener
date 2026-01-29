import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="main-container inner">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/public/logo.svg"
            alt="CoinCash Logo"
            width={132}
            height={40}
            priority
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
