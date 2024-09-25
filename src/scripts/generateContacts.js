import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export async function generateContacts(amount) {
  const contacts = await readContacts();
  for (let i = 0; i < amount; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
}

// Execute the function with a default value for testing
generateContacts(5);
