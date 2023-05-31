// Get the meta tag with property="og:image"
const ogImageMeta = document.querySelector('meta[property="og:image"]');

// Extract the content attribute value which contains the URL
const imageUrl = ogImageMeta ? ogImageMeta.getAttribute('content') : null;

// Send the URL to the extension storage
chrome.storage.sync.set({ imageUrl: imageUrl });
