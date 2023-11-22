function sendMessage() {
  var inputElement = document.querySelector('input');
  var messageContainer = document.getElementById('chat-messages');

  if (inputElement.value.trim() !== '') {
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('message');

    var userAvatar = document.createElement('div');
    userAvatar.classList.add('user-avatar');
    userAvatar.innerHTML = '<img src="https://via.placeholder.com/40" alt="User 1">';

    var messageContent = document.createElement('div');
    messageContent.classList.add('message-content');

    var username = document.createElement('div');
    username.classList.add('username');
    username.textContent = 'User 1';

    var text = document.createElement('div');
    text.classList.add('text');
    text.textContent = inputElement.value;

    messageContent.appendChild(username);
    messageContent.appendChild(text);

    messageDiv.appendChild(userAvatar);
    messageDiv.appendChild(messageContent);

    messageContainer.appendChild(messageDiv);

    inputElement.value = '';
  }
}
