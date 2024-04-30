import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://voyqlncxtsknnikgurvo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZveXFsbmN4dHNrbm5pa2d1cnZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MzAwMDMsImV4cCI6MjAyNTMwNjAwM30.XB-Js9jCqvrrE27NHc3cAs-Q3J74Av0S7Ec1cdGZV0A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
