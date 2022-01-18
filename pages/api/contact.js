import { MongoClient } from "mongodb";
import { validateEmail } from "../../helpers/validation-utils";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !validateEmail(email) ||
      !name ||
      !name.trim() ||
      !message ||
      !message.trim()
    ) {
      res.status(422).send({ message: "Invalid Input" });
      return;
    }
    const newMessage = { email, name, message };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://admin:admin@cluster0.kypnj.mongodb.net/my-blogs?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).send({ message: "Connecting to database failed." });
      return;
    }
    try {
      const db = client.db();
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).send({ message: "Storing message failed." });
      return;
    }
    client.close();
    res
      .status(201)
      .send({ message: "Successfully stored.", message: newMessage });
  }
}
