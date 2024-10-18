import SectionTitle from "@components/ui/section-title";

import GitHubIcon from "@icons/github";
import LinkedInIcon from "@icons/linkedin";
import TelegramIcon from "@icons/telegram";

import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="relative space-y-4">
        <SectionTitle title="📞 Contact" />

        <h3 className="text-secondary text-base font-normal">
          The best way to contact me is directly via email, at{" "}
          <u>
            <a href="mailto: nikitabsuir@gmail.com">nikitabsuir@gmail.com</a>
          </u>
          . Alternatively, send me a message on any platform I&apos;m active on!
        </h3>

        <div className="w-full justify-center flex flex-row gap-4 text-secondary stroke-1">
          <Link href="https://t.me/nik_yas" target="_blank" rel="noopener noreferrer" title="My Telegram" passHref>
            <TelegramIcon className="cursor-pointer hover:text-instagram transition-color duration-200" strokeWidth={1.5} />
          </Link>

          <Link href="https://github.com/NotNikita" target="_blank" rel="noopener noreferrer" title="My GitHub" passHref>
            <GitHubIcon className="cursor-pointer hover:text-github transition-color duration-200" strokeWidth={1.5} />
          </Link>

          <Link href="https://www.linkedin.com/in/nikita-yaskevich" target="_blank" rel="noopener noreferrer" title="My LinkedIn" passHref>
            <LinkedInIcon className="cursor-pointer hover:text-linkedin transition-color duration-200" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
