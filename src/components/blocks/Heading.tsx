interface HeadingProps {
  attributes: {
    content: string;
    level: number;
    className?: string;
    style?: Record<string, string>;
  };
}

export default function Heading({ attributes }: HeadingProps) {
  const Tag = `h${attributes.level || 2}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={attributes.className}
      style={attributes.style}
      dangerouslySetInnerHTML={{ __html: attributes.content }}
    />
  );
}
