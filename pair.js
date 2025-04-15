const sessions = require('./coolsessions');

function pairUser(userId) {
  let session = sessions.getSession(userId);

  if (!session) {
    session = sessions.createSession(userId);
    console.log(`New session created for ${userId}: ${session}`);
  } else {
    console.log(`User ${userId} is already paired with session: ${session}`);
  }

  return session;
}

// Example usage
const userId = 'user123';
pairUser(userId);
