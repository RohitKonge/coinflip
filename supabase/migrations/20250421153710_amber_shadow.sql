/*
  # Update flip stats table structure
  
  1. Changes
    - Drop existing flip_stats table
    - Create new total_flips table with a single counter
  
  2. Security
    - Enable RLS
    - Add policies for public access
*/

DROP TABLE IF EXISTS flip_stats;

CREATE TABLE IF NOT EXISTS total_flips (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  count bigint DEFAULT 0,
  updated_at timestamptz DEFAULT now()
);

-- Insert initial record
INSERT INTO total_flips (count) VALUES (0);

-- Enable RLS
ALTER TABLE total_flips ENABLE ROW LEVEL SECURITY;

-- Allow public to read the count
CREATE POLICY "Public can read total flips"
  ON total_flips
  FOR SELECT
  TO public
  USING (true);

-- Allow authenticated to update the count
CREATE POLICY "Authenticated can update total flips"
  ON total_flips
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);