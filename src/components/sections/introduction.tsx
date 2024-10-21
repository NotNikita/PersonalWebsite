"use client";

import Image from "next/image";
import Link from "next/link";

import LinkedInIcon from "@icons/linkedin";
import GitHubIcon from "@icons/github";
import { introductionItems } from "@content/introduction";
import { TypeAnimation } from "react-type-animation";
import { FileUserIcon } from "lucide-react";
import TelegramIcon from "@icons/telegram";

const Introduction = () => {
  return (
    <>
      <div className="relative space-y-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          <Image src="/me.jpeg" alt="Me (Nikita Yaskevich)" width={200} height={200} className="rounded-full animate-float" />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-primary text-3xl">
                Hey, I am <strong className="font-semibold">Nikita Yaskevich</strong>!
              </h1>

              <div className="flex flex-col text-secondary text-lg leading-6">
                <h2>
                  I am a{" "}
                  <strong className="font-semibold">
                    <TypeAnimation sequence={introductionItems} wrapper="span" cursor={true} repeat={Infinity} />
                  </strong>
                </h2>
                <h2>with 3+ years of professional experience.</h2>
              </div>
            </div>

            <div className="flex flex-row gap-4 text-secondary stroke-1">
              <Link href="./cv.pdf" target="_blank" rel="noopener noreferrer" title="My CV" passHref>
                <FileUserIcon className="cursor-pointer hover:text-teal-500 transition-color duration-200" strokeWidth={1.5} />
              </Link>

              <Link href="https://t.me/nik_yas" target="_blank" rel="noopener noreferrer" title="My Telegram" passHref>
                <TelegramIcon className="cursor-pointer hover:text-instagram transition-color duration-200" strokeWidth={1.5} />
              </Link>

              <Link href="https://github.com/notnikita" target="_blank" rel="noopener noreferrer" title="My GitHub Profile" passHref>
                <GitHubIcon className="cursor-pointer hover:text-github transition-color duration-200" strokeWidth={1.5} />
              </Link>

              <Link href="https://www.linkedin.com/in/nikita-yaskevich" target="_blank" rel="noopener noreferrer" title="My LinkedIn Profile" passHref>
                <LinkedInIcon className="cursor-pointer hover:text-linkedin transition-color duration-200" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
