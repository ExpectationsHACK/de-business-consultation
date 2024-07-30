'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";



const BlogNavLinks = () => {

    const links = [
        { name: 'All categories', href: '/blog/all-categories' },
        { name: 'Design', href: '/blog/design' },
        { name: 'Finance', href: '/blog/finance' },
        { name: 'Business', href: '/blog/business' },
        { name: 'Healthcare', href: '/blog/healthcare' },
        { name: 'Science', href: '/blog/science' },
      ];

    const pathname = usePathname();

  return (
    <div className="mt-8">
        <div className="w-full gap-8 flex flex-row">
            {links.map((link) => {
            return (
            <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.showDiv)}
                className={clsx(
                'text-[#525866] flex gap-2 rounded-lg  bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-[#03713A]',
                {
                    'text-[#03713A]': pathname === link.href,
                },
                )}
            >
                <p className="">{link.name}</p>
            </Link>
            );
        })}      
        </div>
     
    </div>
  )
}

export default BlogNavLinks