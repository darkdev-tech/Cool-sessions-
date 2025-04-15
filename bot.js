const session = require('./coolSessions');

const userId = 'user123';

const newSessionId = session.createSession(userId);
console.log("Created session:", newSessionId);

console.log("Fetched session:", session.getSession(userId));

session.deleteSession(userId);
console.log("Session after deletion:", session.getSession(userId));
