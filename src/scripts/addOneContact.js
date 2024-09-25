import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export async function addOneContact() {
  const contacts = await readContacts();
  contacts.push(createFakeContact());
  await writeContacts(contacts);
}

// Execute the function for testing
addOneContact();
