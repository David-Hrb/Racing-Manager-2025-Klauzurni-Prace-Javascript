export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const db = useDatabase("myDB");
  
  // Smaž staré data
  /*
  await db.sql`DELETE FROM drivers`;
  await db.sql`DELETE FROM calendar`;
  await db.sql`DELETE FROM circuits`;
  await db.sql`DELETE FROM manager`;
  await db.sql`DELETE FROM teams`;
  await db.sql`DELETE FROM leaderboard`;
  
  // Vlož nová data
  for (const driver of body.drivers) {
    await db.sql`INSERT INTO drivers (id, name, ...) VALUES (${driver.id}, ${driver.name}, ...)`;
  }
  
  return { success: true };
  */
});