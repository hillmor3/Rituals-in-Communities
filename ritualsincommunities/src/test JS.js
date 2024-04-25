document.addEventListener('DOMContentLoaded', () => {
  window.storiiiesViewerInstance = new StoriiiesViewer({ //const myViewer = new StoriiiesViewer({
    container: "#storiiies-viewer", // or document.querySelector("#storiiies-viewer")
    manifestUrl: "https://manifest.storiiies-editor.cogapp.com/v3/455u2", //455u2 for pano , f95jn deatail test
  });
});
 