function sendMessage() {
    var messageInput = document.getElementById ('message-input');
    var chatContainer = document.getElementById('chat-container');

    var message = messageInput.value.trim();

    if (message !== '') {
        var newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.textContent = message;
        chatContainer.appendChild(newMessage);

        messageInput.value = '';

        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
}