import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

interface GravityFormProps {
  attributes: {
    formId?: string | number;
    title?: boolean;
    description?: boolean;
    ajax?: boolean;
    inputBorderColor?: string;
    inputBackgroundColor?: string;
    inputColor?: string;
    inputPrimaryColor?: string;
  };
}

export default function GravityForm({ attributes }: GravityFormProps) {
  const { formId } = attributes;

  if (!formId) {
    return <Text>No form ID specified</Text>;
  }

  // In a real implementation, you would fetch and render the form
  // For now, we'll just show a placeholder with styling
  return (
    <Box
      className="gravityform"
      border="1px solid"
      borderColor={attributes.inputBorderColor || "gray.200"}
      borderRadius="md"
      p={6}
      bg={attributes.inputBackgroundColor || "white"}
      color={attributes.inputColor || "black"}
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Contact Form (ID: {formId})
      </Text>
      <Text mb={4}>
        This is a placeholder for Gravity Form {formId}. In a production
        environment, you would need to implement a solution to render Gravity
        Forms in your headless setup.
      </Text>
      <Link
        href="#"
        color={attributes.inputPrimaryColor || "blue.500"}
        fontWeight="bold"
      >
        Submit Form (Placeholder)
      </Link>
    </Box>
  );
}
