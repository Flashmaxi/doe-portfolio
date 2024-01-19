"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-mark.svg";
import NostrIcon from "../../public/nostr.svg";
import TwitterIcon from "../../public/twitter.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-3xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row items-center gap-3">
          <Link href="https://damus.io/npub16yvvw6g8dn9pqmh6uymjcsmy69lpdj0zch7jjy4sk67rpespc6gs596q7y">
            <Image src={NostrIcon} alt="Nostr Icon" height={36} width={36}/>
          </Link>
          <Link href="https://github.com/Flashmaxi">
            <Image src={GithubIcon} alt="Github Icon" height={36} width={36}/>
          </Link>
          <Link href="https://twitter.com/dev21M">
            <Image src={TwitterIcon} alt="Twitter Icon" height={36} width={36} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;