import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function writeContacts(contacts) {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
}
