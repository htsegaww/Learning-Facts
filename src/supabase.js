import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://amgsqkmdrkzpptokhegl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtZ3Nxa21kcmt6cHB0b2toZWdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE2Mzg4MTEsImV4cCI6MTk4NzIxNDgxMX0.eiouxWl19REeKwg_ySTEBti77mzHkK9nrDiPAWWW4E8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
