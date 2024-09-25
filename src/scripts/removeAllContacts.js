import { writeContacts } from '../utils/writeContacts.js';

export async function removeAllContacts() {
  await writeContacts([]);
}

// Execute the function for testing
removeAllContacts();
