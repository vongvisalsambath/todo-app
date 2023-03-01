CREATE TABLE IF NOT EXISTS notes (
  id SERIAL PRIMARY KEY,
  label VARCHAR(50) NOT NULL,
  is_checked BOOLEAN,
  updated_at VARCHAR(20),
  created_at VARCHAR(20)
)