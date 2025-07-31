@@ .. @@
 import { createClient } from '@supabase/supabase-js'

-const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'your-supabase-url'
-const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-supabase-anon-key'
+const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://yiisewfnctvifpostlxy.supabase.co'
+const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpaXNld2ZuY3R2aWZwb3N0bHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NjU3NzAsImV4cCI6MjA2OTQ0MTc3MH0.N9mn7sNZxz_nd57TADXy5l2JLax_1Th6qxS0436GeZk'

 export const supabase = createClient(supabaseUrl, supabaseAnonKey)