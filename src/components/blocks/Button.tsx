import React from "react";
import { Button as ChakraButton, Link } from "@chakra-ui/react";

interface ButtonProps {
  attributes: {
    className?: string;
    url?: string;
    text?: string;
  };
  innerBlocks?: any[];
  children?: React.ReactNode;
}

export default function Button({
  attributes,
  innerBlocks,
  children,
}: ButtonProps) {
  const { className, url } = attributes;

  if (url) {
    return (
      <Link
        href={url}
        className={`wp-block-button__link ${className || ""}`}
        _hover={{ textDecoration: "none" }}
      >
        <ChakraButton colorScheme="blue" as="span">
          {children || attributes.text || "Learn More"}
        </ChakraButton>
      </Link>
    );
  }

  return (
    <ChakraButton
      colorScheme="blue"
      className={`wp-block-button__link ${className || ""}`}
    >
      {children || attributes.text || "Learn More"}
    </ChakraButton>
  );
}
