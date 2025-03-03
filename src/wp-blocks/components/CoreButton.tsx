import React from "react";
import { Button, Box, Link } from "@chakra-ui/react";

interface CoreButtonProps {
  block: {
    name: string;
    attributes: {
      url?: string;
      text?: string;
      className?: string;
      style?: any;
      linkTarget?: string;
      rel?: string;
    };
  };
}

export default function CoreButton({ block }: CoreButtonProps) {
  const { attributes } = block;
  const { url, text, className, style, linkTarget, rel } = attributes;

  // Extract style information
  const isOutlined = className?.includes("is-style-outline");
  const backgroundColor = style?.color?.background || "#3182CE"; // Default blue
  const textColor =
    style?.color?.text || (isOutlined ? backgroundColor : "white");
  const borderRadius = style?.border?.radius || "md";

  // Determine hover colors - slightly darker version of the background
  const hoverBgColor =
    backgroundColor !== "#3182CE"
      ? `${backgroundColor}dd` // Add transparency to make it appear darker
      : "#2B6CB0"; // Default hover color for blue

  return (
    <Box width="100%" my={4} className="wp-block-button">
      <Link
        href={url || "#"}
        target={linkTarget || "_self"}
        rel={rel}
        className={`wp-block-button__link ${className || ""}`}
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
        display="inline-block"
      >
        <Button
          variant={isOutlined ? "outline" : "solid"}
          bg={isOutlined ? "transparent" : backgroundColor}
          color={textColor}
          borderColor={isOutlined ? backgroundColor : "transparent"}
          borderWidth={isOutlined ? "1px" : "0"}
          borderRadius={borderRadius}
          size="md"
          px={6}
          py={5}
          fontWeight="500"
          _hover={{
            transform: "translateY(-4px)",
            boxShadow: "lg",
            bg: isOutlined ? `${backgroundColor}22` : hoverBgColor,
            borderColor: backgroundColor,
            filter: "brightness(110%)",
          }}
          _active={{
            transform: "translateY(-1px)",
            boxShadow: "sm",
            filter: "brightness(90%)",
          }}
          transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        >
          {text || "Button"}
        </Button>
      </Link>
    </Box>
  );
}
