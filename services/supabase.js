import { createClient } from "@supabase/supabase-js";

const KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlkdGhtbm5jcWVxemlhcXBiZGt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2Njk5MDEsImV4cCI6MjA0OTI0NTkwMX0.ACLif8p3y84DYyo3u2fJJCMbiv6oE-LeaVbCSia6IaA";

const supabaseUrl = "https://idthmnncqeqziaqpbdku.supabase.co";
const supabaseKey = KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export { supabaseUrl };
