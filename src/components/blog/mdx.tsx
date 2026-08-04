import React from "react";
import { highlight } from "sugar-high";

type TableData = {
  headers: string[];
  rows: string[][];
};

function Table({ data }: { data: TableData }) {
  const headers = data.headers.map((header: string, index: number) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row: string[], index: number) => (
    <tr key={index}>
      {row.map((cell: string, cellIndex: number) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(
  props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string },
) {
  const { href, ...rest } = props;

  if (href.startsWith("#")) {
    return <a href={href} {...rest} />;
  }

  if (href.startsWith("/")) {
    return <a href={href} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
}

function MDXImage({
  src,
  alt,
  caption,
  width = 2000,
  height = 2000,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure style={{ margin: "2rem 0", textAlign: "center" }}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="mx-auto h-auto max-w-full rounded-md"
      />
      {caption && (
        <figcaption style={{ color: "#666", fontSize: "0.9rem" }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Code({
  children,
  ...props
}: { children: string } & React.HTMLAttributes<HTMLElement>) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string | React.ReactNode): string {
  const strValue = typeof str === "string" ? str : String(str);
  return strValue
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

export const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: MDXImage,
  a: CustomLink,
  code: Code,
  Table,
};
