export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const method = event.method;
    
    console.log('Method:', method, 'ID:', id);
    
    const db = useDatabase("myDB");

    // GET 
    if (method === 'GET') {
        const result = await db.sql`SELECT * FROM teams WHERE ID = ${id}`;
        return result;
    }

    // PUT nebo PATCH 
    if (method === 'PUT' || method === 'PATCH') {
        try {
            const requestBody = await readBody(event);
            
            console.log('Request body:', requestBody);
            
            const current = await db.sql`SELECT * FROM manager WHERE ID = ${id}`;
            
            console.log('Current data:', current);
            
            let currentData;
            if (Array.isArray(current) && current.length > 0) {
                currentData = current[0];
            } else if (current.rows && current.rows.length > 0) {
                currentData = current.rows[0];
            } else {
                currentData = current;
            }

            console.log('Parsed current data:', currentData);
            
            if (!currentData || !currentData.ID) {
                throw createError({
                    statusCode: 404,
                    message: 'Tým nebyl nalezen'
                });
            }

            const updated = { ...currentData, ...requestBody };
            
            console.log('Updated data:', updated);

            const result = await db.sql`
                UPDATE teams SET
                    name = ${updated.name},
                    nationality = ${updated.nationality},
                    color1 = ${updated.color1},
                    color2 = ${updated.color2},
                    color3 = ${updated.color3},
                    creationyear = ${updated.creationyear},
                    logo = ${updated.logo},
                    driverpolitics = ${updated.driverpolitics},
                    driver1 = ${updated.driver1},
                    driver2 = ${updated.driver2},
                    testdriver = ${updated.testdriver},
                    sponzor1 = ${updated.sponzor1},
                    sponzor2 = ${updated.sponzor2},
                    sponzor3 = ${updated.sponzor3},
                    championshipplace = ${updated.championshipplace},
                    aerodynamics = ${updated.aerodynamics},
                    gearbox = ${updated.gearbox},
                    brakes = ${updated.brakes},
                    rearwing = ${updated.rearwing},
                    frontwing = ${updated.frontwing},
                    reliability = ${updated.reliability},
                    historytitles = ${updated.historytitles},
                    historywins = ${updated.historywins},
                    historypodiums = ${updated.historypodiums},
                    fanspopularity = ${updated.fanspopularity}
                WHERE ID = ${id}
                RETURNING *
            `;
            
            console.log('Update result:', result);

            return result;
        } catch (error) {
            console.error('Update error:', error);
            throw createError({
                statusCode: 500,
                message: error instanceof Error ? error.message : 'Chyba při aktualizaci'
            });
        }
    }

    // DELETE 
    if (method === 'DELETE') {
        const result = await db.sql`
            DELETE FROM teams WHERE ID = ${id} RETURNING *
        `;

        return {
            success: true,
            message: 'Tým byl smazán',
            data: result
        };
    }

    throw createError({
        statusCode: 405,
        message: `Metoda ${method} není podporována`
    });
});