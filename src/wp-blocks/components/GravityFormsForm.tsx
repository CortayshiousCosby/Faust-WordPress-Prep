import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface GravityFormsFormProps {
  attributes: {
    formId?: number;
    title?: boolean;
    description?: boolean;
    className?: string;
  };
}

export default function GravityFormsForm({
  attributes,
}: GravityFormsFormProps) {
  const { formId, className } = attributes;

  return (
    <Box className={className}>
      <Text>Gravity Form ID: {formId || "Not specified"}</Text>
      <Text>Form rendering would happen here</Text>
    </Box>
  );
}
