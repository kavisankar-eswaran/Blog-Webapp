import Link from "next/link";
import { Mulish } from "next/font/google";
import { BackArrowIcon } from "./Icons";

const font = Mulish({ weight: "400", subsets: ["latin"] });

const CmsNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowIcon />
      </Link>

      <div className={`${font.className} text-3xl dark:text-amber-50`}>
        Kavisankar | 
        <span className="text-green-500">Blog</span>
      </div>
    </div>
  );
};

export default CmsNavbar;
