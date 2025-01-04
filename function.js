async function deleteWebhook(webhook) {
  try {
    const response = await fetch(webhook, {
      method: 'DELETE',
    });
    return response.ok;
  } catch {
    return false;
  }
}

/* Example usage:
const webhook = 'discord-webhook-url';
deleteWebhook(webhook).then(success => {
  console.log(success ? 'Deleted successfully' : 'Deletion failed');
}); 
Note, that everything beyond deleteWebhook(webhook) is optional and for logging. */ 
