import Link from "next/link";
import Image from "next/image";
import ConnectButton from "../ConnectButton";
import NavBar from "./NavBar";
import logo from "../../static/nftbazaar-logo.png"

const TopBar = () => {
  return (
    <div className="fixed top-0 w-full nav-bar">
      <div className="relative flex w-full items-center px-4  py-4 shadow">
        <Link href="/">
          <Image src={logo} alt="NFT Bazaar" width={"70px"} height={"70px"} />
        </Link>
        <div className="flex-grow">
          <NavBar />
        </div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default TopBar;
