import { readContacts } from '../utils/readContacts.js';

export async function countContacts() {
  const contacts = await readContacts();
  console.log(`Кількість контактів: ${contacts.length}`);
}

// Execute the function for testing
countContacts();