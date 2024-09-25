import { readContacts } from '../utils/readContacts.js';

export async function getAllContacts() {
  const contacts = await readContacts();
  console.log(contacts);
}

// Execute the function for testing
getAllContacts();
