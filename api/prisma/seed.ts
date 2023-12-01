import { DatabaseService } from '../src/services/DatabaseService';

/**
 * Create or update Test instances.
 */
async function upsert() {
  await DatabaseService.test.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      label: 'P++ website in progress'
    }
  });
}

/**
 * Execute seed script.
 */
async function main() {
  try {
    await upsert();
    await DatabaseService.$disconnect();
  } catch (error) {
    console.error(error);
    await DatabaseService.$disconnect();
  }
}

main();
