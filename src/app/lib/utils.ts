export function generatePagination(currentPage: number, totalPages: number) {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}

const ClaudeModelId = "anthropic.claude-v2";
const dataType = "application/json";

export const promptClaude2Default =
  "Human: Please find the potential duplicate code snippet in the code:\n";
export const promptClaude2MultipleFiles =
  "Human: please find the potential duplicate code snippet that can be extracted in the code files below, I have provided the file name, also please briefly summarize if the code looks OK:\n";

export const prepareModelRequestClaude2 = (code: string, prompt?: string) => {
  return {
    modelId: ClaudeModelId,
    contentType: dataType,
    accept: dataType,
    body: JSON.stringify({
      prompt: `${prompt ?? promptClaude2Default}${code}\n\n Assistant:`,
      max_tokens_to_sample: 5000,
      temperature: 0.5,
      top_k: 250,
      top_p: 1,
    }),
  };
};

export const ITEMS_PER_PAGE = 6;
