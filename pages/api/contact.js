import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ status: 'fail', message: 'Invalid input!' });
      return;
    }

    /// store it
    const newMessage = { email, name, message };
    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://giorgi:Justbreakitfree1@cluster0.dilfnvv.mongodb.net/blog_next?retryWrites=true&w=majority'
      );
    } catch (err) {
      res.status(500).json({ message: 'Could not connect to database!' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    res.status(201).json({
      status: 'success',
      message: 'Successfuly stored',
      message: newMessage,
    });
  }
}

export default handler;
