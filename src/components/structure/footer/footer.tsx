import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 text-secondary text-base font-normal">
      <h3>
        Built with{" "}
        <Link href="https://nextjs.org/">
          <strong className="font-semibold">Next.js</strong>
        </Link>{" "}
        and{" "}
        <Link href="https://tailwindcss.com/">
          <strong className="font-semibold">Tailwind CSS</strong>
        </Link>
      </h3>
      <h3>© {(new Date().getFullYear())} Nikita Yaskevich</h3>
    </div>
  );
};

export default Footer;
