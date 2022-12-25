import Link from "next/link";
import React from "react";

import { IArticle } from "../types";
import { formatDate } from "../utils/index";

interface IPropType {
  article: IArticle;
}

const Blogcard = ({ article }: IPropType) => {
  console.log(article.attributes.shortDescription, "short");
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className="text-xl capitalize text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>

      <div className="flex items-center my-4">
        <div className="mr-2">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src={`http://localhost:1337${article.attributes.author.data.attributes.avatar.data.attributes.formats.thumbnail.url}`}
            height={40}
            width={40}
            alt={article.attributes.author.data.attributes.firstname}
          />
        </div>
        <span className="text-md font-bold text-gray-600">
          {article.attributes.author.data.attributes.firstname}{" "}
          <span className="text-sm">
            {article.attributes.author.data.attributes.lastname} on &nbsp;
          </span>
          <span className="text-gray-400 font-normal text-sm">
            {formatDate(article.attributes.createdAt)}
          </span>
        </span>
      </div>
      <div className="text-gray-500">
        {article.attributes.shortDescription.slice(0, 300)}{" "}
        {article.attributes.shortDescription?.length > 300 ? "..." : ""}
      </div>
    </div>
  );
};

export default Blogcard;
