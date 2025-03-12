import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ghhsyidclpnoexrrvhub.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdoaHN5aWRjbHBub2V4cnJ2aHViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5NDY2MzIsImV4cCI6MjAwMDUyMjYzMn0.JSd2ayL6fUOZKZ7ekyyKM52exI3_FmSCKaaEvP7vPck';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
