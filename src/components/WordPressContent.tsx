import React, { useEffect } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface WordPressContentProps extends BoxProps {
  content: string;
}

/**
 * A component that renders WordPress content with proper styling
 */
export default function WordPressContent({
  content,
  ...props
}: WordPressContentProps) {
  if (!content) return null;

  // Effect to fix any columns that might need JavaScript to render properly
  useEffect(() => {
    // For columns that might have inline styles
    const columns = document.querySelectorAll(".wp-block-column");
    columns.forEach((column) => {
      if (!column.getAttribute("style")?.includes("flex-basis")) {
        // Default to equal width columns if not specified
        column.setAttribute(
          "style",
          `${column.getAttribute("style") || ""}flex-basis: 50%;`
        );
      }
    });

    // For columns that might have specific width settings
    const flexColumns = document.querySelectorAll(".wp-block-columns");
    flexColumns.forEach((flexColumn) => {
      // Make sure columns container is displayed as flex
      flexColumn.setAttribute(
        "style",
        `${
          flexColumn.getAttribute("style") || ""
        }display: flex; flex-wrap: wrap;`
      );
    });

    // Make columns clickable if they have a learn more button
    columns.forEach((column) => {
      const button = column.querySelector(".wp-block-button a");
      if (button && button.getAttribute("href")) {
        const url = button.getAttribute("href");

        // Create an invisible link that covers the whole column
        const columnLink = document.createElement("a");
        columnLink.setAttribute("href", url);
        columnLink.setAttribute("class", "column-link");
        columnLink.setAttribute("aria-label", "Read more");

        // Prevent the click from going to both the column link and the button
        column.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", (e) => {
            e.stopPropagation();
          });
        });

        // Add the link to the column
        column.setAttribute(
          "style",
          `${column.getAttribute("style") || ""}position: relative;`
        );
        column.appendChild(columnLink);
      }
    });
  }, [content]);

  return (
    <Box
      className="wp-content entry-content"
      css={{
        // Typography
        p: { marginBottom: "1rem", fontSize: "1rem", lineHeight: 1.8 },
        "h1, h2, h3, h4, h5, h6": {
          fontWeight: "bold",
          lineHeight: 1.2,
          marginTop: "1.5rem",
          marginBottom: "1rem",
        },
        h1: { fontSize: "2rem" },
        h2: { fontSize: "1.75rem" },
        h3: { fontSize: "1.5rem" },
        h4: { fontSize: "1.25rem" },
        h5: { fontSize: "1rem" },
        h6: { fontSize: "0.875rem" },

        // Lists
        "ul, ol": {
          marginLeft: "1.5rem",
          marginBottom: "1rem",
          paddingLeft: "0.5rem",
        },
        li: {
          marginBottom: "0.5rem",
        },
        "li > ul, li > ol": {
          marginTop: "0.5rem",
        },

        // Cover block
        ".wp-block-cover": {
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "430px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1.5rem",
          padding: "1rem",
          color: "white",
          borderRadius: "0.375rem",
          overflow: "hidden",
        },

        // Columns
        ".wp-block-columns": {
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          marginBottom: "1.5rem",
          width: "100%",
        },

        // Only center buttons in columns, not in other contexts
        ".wp-block-column .wp-block-buttons": {
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "1rem",
        },
        ".wp-block-column .wp-block-button": {
          marginBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        },

        // Default button styling (not centered by default)
        ".wp-block-buttons": {
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "1rem",
        },
        ".wp-block-button": {
          marginBottom: "1rem",
        },
        ".wp-block-button__link": {
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          borderRadius: "9999px",
          fontWeight: 500,
          textDecoration: "none",
          backgroundColor: "#3182ce",
          color: "white",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        },
        ".wp-block-button__link:hover": {
          backgroundColor: "#2b6cb0",
          textDecoration: "none",
          transform: "translateY(-4px)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
          filter: "brightness(110%)",
        },
        ".is-style-outline .wp-block-button__link": {
          backgroundColor: "transparent",
          border: "2px solid",
          borderColor: "#3182ce",
          color: "#3182ce",
        },
        ".is-style-outline .wp-block-button__link:hover": {
          backgroundColor: "rgba(49, 130, 206, 0.1)",
          transform: "translateY(-4px)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },

        // Media queries for responsive design
        "@media (min-width: 768px)": {
          ".wp-block-columns": {
            flexWrap: "nowrap",
          },
          ".wp-block-column": {
            flex: "1 1 0",
          },
        },

        // Images
        ".wp-block-image": {
          marginBottom: "1rem",
          textAlign: "center",
        },
        ".wp-block-image img": {
          maxWidth: "100%",
          height: "auto",
          borderRadius: "0.375rem",
          margin: "0 auto",
        },

        // Group
        ".wp-block-group": {
          marginBottom: "1.5rem",
        },

        // Gravity Forms
        ".gform_wrapper": {
          marginBottom: "1.5rem",
        },
        ".gform_wrapper input, .gform_wrapper textarea": {
          width: "100%",
          padding: "0.5rem",
          border: "1px solid",
          borderColor: "#E2E8F0",
          borderRadius: "0.375rem",
        },
        ".gform_wrapper input:focus, .gform_wrapper textarea:focus": {
          borderColor: "#3182ce",
          boxShadow: "0 0 0 1px #3182ce",
        },
        ".gform_button": {
          backgroundColor: "#3182ce",
          color: "white",
          padding: "0.5rem 1.5rem",
          borderRadius: "9999px",
          fontWeight: 500,
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",
        },
        ".gform_button:hover": {
          backgroundColor: "#2b6cb0",
          transform: "translateY(-2px)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
      }}
      dangerouslySetInnerHTML={{ __html: content }}
      {...props}
    />
  );
}
