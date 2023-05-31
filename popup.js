// Retrieve the extracted image URL from the extension storage
chrome.storage.sync.get(['imageUrl'], function (result) {
    const imageUrl = result.imageUrl;
  
    if (imageUrl) {
      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
  
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.appendChild(imageElement);
  
      const imageUrlLink = document.getElementById('imageUrlLink');
      imageUrlLink.href = imageUrl;
    }
  });
  