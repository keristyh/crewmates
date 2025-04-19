import { createClient } from '@supabase/supabase-js'

const URL = "https://iztptsjpcbcryysatwcj.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dHB0c2pwY2Jjcnl5c2F0d2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NTA4MjIsImV4cCI6MjA2MDUyNjgyMn0.IeGn3ZRWsJ-gQ3jgWpEm4PTDy1lcO8gN9HyNJECBDvM";

export const supabase = createClient(URL, API_KEY);

