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

    // Copy to Clipboard button functionality
    const copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function () {
      copyImageToClipboard(imageUrl);
    });
  }
});

// Function to copy the image to the clipboard
function copyImageToClipboard(imageUrl) {
  fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      const clipboardItems = [
        new ClipboardItem({
          'image/png': blob
        })
      ];

      navigator.clipboard.write(clipboardItems)
        .then(() => {
          // Show a notification message
          showNotification('Image copied to clipboard!');
        })
        .catch(error => {
          console.error('Failed to copy image to clipboard:', error);
        });
    })
    .catch(error => {
      console.error('Failed to fetch image:', error);
    });
    // Create a notification message element
  const notification = document.createElement('div');
  notification.textContent = 'Image URL copied to clipboard';
  notification.classList.add('notification');

  // Append the notification to the button container
  const buttonContainer = document.querySelector('.button-container');
  buttonContainer.appendChild(notification);

  // Remove the notification after a certain time
  setTimeout(function () {
    buttonContainer.removeChild(notification);
  }, 800); // Remove the notification after 2 seconds (adjust as needed)
}

