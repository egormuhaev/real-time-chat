import { createClient } from "@supabase/supabase-js";
import { Database } from "../model/types/supabaseSchema";

const supabaseUrl =
  // process.env.REACT_APP_SUPABASE_URL ||
  "https://cbfnsxrpyjrgkdbxhunm.supabase.co";
const supabaseKey =
  // process.env.REACT_APP_SUPABASE_PUBLIC_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZm5zeHJweWpyZ2tkYnhodW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwNDExMTcsImV4cCI6MjAwOTYxNzExN30.Ee4OaECh0u5Opre7HTWV3uC6Wua4F-LsuOhTKEyPcyw";

export const supabaseConfig = {
  url: supabaseUrl,
  key: supabaseKey,
};

export const supabase = createClient<Database>(
  supabaseConfig.url,
  supabaseConfig.key
);
