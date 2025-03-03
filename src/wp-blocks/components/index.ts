import CoreParagraph from "./CoreParagraph";
import CoreHeading from "./CoreHeading";
import CoreImage from "./CoreImage";
import CoreButton from "./CoreButton";
import CoreButtons from "./CoreButtons";
import CoreColumns from "./CoreColumns";
import CoreColumn from "./CoreColumn";

export { default as CoreParagraph } from "./CoreParagraph";
export { default as CoreHeading } from "./CoreHeading";
export { default as CoreImage } from "./CoreImage";
export { default as CoreButton } from "./CoreButton";
export { default as CoreButtons } from "./CoreButtons";
export { default as CoreColumns } from "./CoreColumns";
export { default as CoreColumn } from "./CoreColumn";

export const blockComponents = {
  "core/paragraph": CoreParagraph,
  "core/heading": CoreHeading,
  "core/image": CoreImage,
  "core/button": CoreButton,
  "core/buttons": CoreButtons,
  "core/columns": CoreColumns,
  "core/column": CoreColumn,
};
