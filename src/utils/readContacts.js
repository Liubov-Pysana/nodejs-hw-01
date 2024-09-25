import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function readContacts() {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(data);
}
