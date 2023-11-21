function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var chatBox = document.getElementById("chatBox");

    var message = messageInput.value;
    if (message.trim() !== "") {
        var messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);

        messageInput.value = "";

        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
