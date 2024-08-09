// Change this to your file location.
const PDF_PATH = "./example.pdf";
const url = new URL(PDF_PATH, window.origin);

/**
 *
 * @param {string} url
 */
function renderPdf(url) {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("id", "pdf-viewer");
  iframe.setAttribute("src", url);
  document.body.appendChild(iframe);
}
renderPdf(url);
