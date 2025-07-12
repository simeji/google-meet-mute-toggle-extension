(function() {
  const muteButton = document.querySelector('[data-is-muted][data-tooltip-id]');
  if (muteButton) {
    muteButton.click();
  } else {
    console.log('Google Meet mute button not found.');
  }
})();