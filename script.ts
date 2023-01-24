import { join } from 'path';
import { translateJsonFile } from './translator';

export async function getTransData() {
  const jsonPath = join(process.cwd(), 'json', 'example.json');
  await translateJsonFile(jsonPath, 'ar', 'en');
  await translateJsonFile(jsonPath, 'ar', ['en', 'da', 'de']);
}

getTransData();
