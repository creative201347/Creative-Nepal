import Image from "next/image";
import Link from "next/link";
import React from "react";

import { IArticle } from "../types";
interface IPropType {
  article: IArticle;
}

const BlogCardWithImage = ({ article }: IPropType) => {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64 justify-around px-2">
      <div className="flex flex-col justify-center">
        <Link href={`/article/${article.attributes.Slug}`}>
          <span className="capitalize text-2xl w-2/3 text-white p-6 font-bold after:content-[''] after:bg-primary after:block after:w-full after:h-0.5 after:rounded-md after:mt-2 after:ml-6 cursor-pointer">
            {article.attributes.Title}
          </span>
        </Link>
        <span className="mx-6 text-gray-200">
          {article.attributes.shortDescription.slice(0, 250)}{" "}
          {article.attributes.shortDescription?.length > 250 ? "..." : ""}
        </span>
      </div>
      <Image
        src="/gitbook.svg"
        width={140}
        height={140}
        alt={article.attributes.Title}
      />
    </div>
  );
};

export default BlogCardWithImage;
