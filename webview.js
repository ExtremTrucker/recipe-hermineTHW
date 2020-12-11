 module.exports = (Franz) => {
  const getMessages = function getMessages() {
	const directMessages = document.querySelectorAll('app-conversation-list-item .has-new-messages').length;
    const allMessages = document.querySelectorAll('app-channel-list-item .has-new-messages').length - directMessages;
    // set Franz badge
    Franz.setBadge(directMessages, allMessages);
  };
  Franz.loop(getMessages);
};