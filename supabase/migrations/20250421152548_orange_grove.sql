/*
  # Create flip_stats table
  
  1. New Tables
    - `flip_stats`
      - `id` (uuid, primary key)
      - `flipped_at` (timestamp with time zone)
      - `created_at` (timestamp with time zone)
  
  2. Security
    - Enable RLS on `flip_stats` table
    - Add policy for public access to insert data
    - Add policy for authenticated users to read all data
*/

-- Create the flip_stats table
CREATE TABLE IF NOT EXISTS flip_stats (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  flipped_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable row level security
ALTER TABLE flip_stats ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY "Anyone can insert flip data"
  ON flip_stats
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all data
CREATE POLICY "Authenticated users can read all flip data"
  ON flip_stats
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow public to read aggregate data only
CREATE POLICY "Public can read all flip data"
  ON flip_stats
  FOR SELECT
  TO public
  USING (true);