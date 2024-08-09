// Change this to your file location.
const PDF_PATH = "./example.pdf";
const PDFJS_VIEWER_URL = "https://mozilla.github.io/pdf.js/web/viewer.html";
const url = new URL(PDF_PATH, window.location.href);

/**
 *
 * @param {string} url
 */
function renderPdf(url) {
  const iframe = document.createElement("iframe");
  const queryParams = new URLSearchParams({
    file: url.toString(),
  });
  console.log(`${PDFJS_VIEWER_URL}?file=./example.pdf`);
  iframe.setAttribute("src", `${PDFJS_VIEWER_URL}?${queryParams}`);
  iframe.setAttribute("id", "pdf-viewer");
  document.body.appendChild(iframe);
}
renderPdf(url);
