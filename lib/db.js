import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://akshay00711:j68Ya1UJrfx3un8U@cluster0.tk9apbk.mongodb.net/events?retryWrites=true&w=majority'
  );
  
/**
 * email:  "abc@abc.com"
   password : "1234567"
 */
 // console.log(client)

  return client;
}
