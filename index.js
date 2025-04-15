const express = require('express');
const sessions = require('./coolsessions');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Cool Sessions is running!');
});

app.post('/pair', (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).send('Missing userId');

  const sessionId = sessions.createSession(userId);
  res.json({ userId, sessionId });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Cool Sessions live at http://localhost:${PORT}`);
});
