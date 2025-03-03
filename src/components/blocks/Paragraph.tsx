interface ParagraphProps {
  attributes: {
    content: string;
    className?: string;
    style?: Record<string, string>;
  };
}

export default function Paragraph({ attributes }: ParagraphProps) {
  return (
    <p
      className={attributes.className}
      style={attributes.style}
      dangerouslySetInnerHTML={{ __html: attributes.content }}
    />
  );
}
