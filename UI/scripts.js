const webview = document.getElementById('webview');
const serviceName = document.getElementById('serviceName');

document.getElementById('dropdownContent').addEventListener('click', function(e) {
  e.preventDefault();
  const url = e.target.closest('a').dataset.value;
  document.getElementById('selectedImage').src = e.target.closest('a').querySelector('img').src;
  serviceName.textContent = e.target.closest('a').textContent.trim();
  webview.loadURL(url);
});

// Add the new event handlers here
window.myIpcRenderer.on('update_available', (event, newVersion) => {
  window.myIpcRenderer.send('update_available', newVersion);
});

window.myIpcRenderer.on('update_downloaded', () => {
  window.myIpcRenderer.send('update_downloaded');
});

document.getElementById('dropdownContent').addEventListener('click', function(e) {
  e.preventDefault();
  const url = e.target.closest('a').dataset.value;
  document.getElementById('selectedImage').src = e.target.closest('a').querySelector('img').src;
  webview.loadURL(url);
});

function resizeWebview() {
  const controlsHeight = document.getElementById('controls').offsetHeight;
  const windowHeight = document.documentElement.clientHeight;
  webview.style.height = `${windowHeight - controlsHeight}px`;
}

window.addEventListener('resize', resizeWebview);
resizeWebview();
