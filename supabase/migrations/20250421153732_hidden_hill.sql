/*
  # Create increment function
  
  1. New Function
    - Creates a Postgres function to safely increment the flip counter
    
  2. Security
    - Function is accessible to public
*/

CREATE OR REPLACE FUNCTION increment_flip_count()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE total_flips
  SET count = count + 1,
      updated_at = now()
  WHERE id = (SELECT id FROM total_flips LIMIT 1);
END;
$$;

-- Grant execute permission to public
GRANT EXECUTE ON FUNCTION increment_flip_count() TO public;