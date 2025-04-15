const fs = require('fs');

const SESSION_FILE = './sessions.json';

function generateSessionId(length = 24) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let sessionId = '';
  for (let i = 0; i < length; i++) {
    sessionId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return sessionId;
}

// Load or initialize sessions
let sessions = {};
if (fs.existsSync(SESSION_FILE)) {
  sessions = JSON.parse(fs.readFileSync(SESSION_FILE));
}

function saveSessions() {
  fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}

function createSession(userId) {
  const sessionId = generateSessionId();
  sessions[userId] = sessionId;
  saveSessions();
  return sessionId;
}

function getSession(userId) {
  return sessions[userId] || null;
}

function deleteSession(userId) {
  delete sessions[userId];
  saveSessions();
}

module.exports = {
  createSession,
  getSession,
  deleteSession
};
