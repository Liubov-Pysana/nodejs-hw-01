import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export async function removeLastContact() {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    await writeContacts(contacts);
  }
}

// Execute the function for testing
removeLastContact();
