import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/companylogo.png"
        alt="Company Logo"
        width={40}
        height={40}
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
