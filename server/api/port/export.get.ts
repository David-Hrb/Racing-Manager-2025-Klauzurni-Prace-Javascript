export default defineEventHandler(async (event) => {
  const db = useDatabase("myDB");
  
  // Exportuj všechny tabulky
  const drivers = await db.sql`SELECT * FROM drivers`;
  const calendar = await db.sql`SELECT * FROM calendar`;
  const circuits = await db.sql`SELECT * FROM circuits`;
  const manager = await db.sql`SELECT * FROM manager`;
  const teams = await db.sql`SELECT * FROM teams`;
  const leadboard = await db.sql`SELECT * FROM leaderboard`;

  
  const data = {
    drivers: drivers.rows,
    calendar: calendar.rows,
    circuits: circuits.rows,
    manager: manager.rows,
    teams: teams.rows,
    leaderboard: leadboard.rows,
    // další tabulky...
  };
  
  setResponseHeader(event, 'Content-Type', 'application/json');
  setResponseHeader(event, 'Content-Disposition', 'attachment; filename="mydata.json"');
  
  return data;
});