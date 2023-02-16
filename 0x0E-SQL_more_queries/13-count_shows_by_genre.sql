
-- Lists all genres from the database hbtn_0d_tvshows along with the number of
-- shows linked to each.
-- Does not display genres without linked shows.
-- Records are ordered by descending number of shows linked.

SELECT tv_genres.name AS genre, 
      COUNT(*) AS number_shows
  FROM tv_genres
      INNER JOIN tv_show_genres
      ON tv_genres.id = tv_show_genres.genre_id
  GROUP BY genre
  ORDER BY number_shows DESC;
