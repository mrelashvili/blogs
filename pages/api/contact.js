function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ status: 'fail', message: 'Invalid input!' });
      return;
    }

    /// store it
    const newMessage = { email, name, message };
    console.log(newMessage);

    res
      .status(201)
      .json({
        status: 'success',
        message: 'Successfuly stored',
        message: newMessage,
      });
  }
}

export default handler;
