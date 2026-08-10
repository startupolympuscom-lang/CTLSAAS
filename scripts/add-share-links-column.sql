-- Add share_links column to blog_posts table if it doesn't exist
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS share_links JSONB;

-- Verify the table structure
SELECT * FROM information_schema.columns WHERE table_name = 'blog_posts' ORDER BY ordinal_position;
