const sessions = require('./coolsessions');

// Example usage
const userId = 'user_' + Math.floor(Math.random() * 1000);
const sessionId = sessions.createSession(userId);

console.log(`Session created for ${userId}: ${sessionId}`);

const fetched = sessions.getSession(userId);
console.log(`Fetched session: ${fetched}`);
