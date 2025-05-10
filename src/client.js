import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://ydejjvfkygxnktjjheqy.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkZWpqdmZreWd4bmt0ampoZXF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3OTkzMzYsImV4cCI6MjA2MjM3NTMzNn0.D2J99wS_ax30rAolHsgYXpsExh7eifCZGSnhvVthGQY'
export const supabase = createClient(supabaseUrl, supabaseKey)
