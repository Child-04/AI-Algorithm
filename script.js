// Get elements
const chatButton = document.getElementById('chat-button');
const chatBox = document.getElementById('chatbox');
const closeBtn = document.getElementById('close-chat');

// Show chatbox when chat button is clicked
chatButton.addEventListener('click', function() {
    chatBox.style.display = 'block';
});

// Close chatbox when close button is clicked
closeBtn.addEventListener('click', function() {
    chatBox.style.display = 'none';
});
