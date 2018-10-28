INSERT INTO jaye_calendar (event, date, location)
    VALUES ($1, $2, $3)
    RETURNING *;