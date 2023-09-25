import { createClient } from "@supabase/supabase-js";
const supabaseUrl =
  process.env.REACT_APP_SUPABASE_URL ||
  "https://wglgllhehvxgusuogusm.supabase.co";
const supabaseKey =
  process.env.REACT_APP_SUPABASE_PUBLIC_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnbGdsbGhlaHZ4Z3VzdW9ndXNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2NzUwNTgsImV4cCI6MjAwNTI1MTA1OH0.gHqb_EIjKUickf2y-6bBRaDibUKplWvwqiwlUwyI3R4";

export const supabaseConfig = {
  url: supabaseUrl,
  key: supabaseKey,
};

const supabase = createClient(supabaseConfig.url, supabaseConfig.key);

export default supabase;
