// server/api/teams/[id].get.ts
export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    
    const db = useDatabase("myDB");

    try {
        const result = await db.sql`
            SELECT * FROM Manager WHERE ID = ${id}
        `;
        return result;
    } catch (error) {
        console.error('Chyba:', error);
        throw createError({
            statusCode: 500,
            message: error instanceof Error ? error.message : 'Chyba'
        });
    }
});