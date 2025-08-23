import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(import.meta.env.VITE_SUPABASE_PROJECT_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);


export function formatDates(data:any[], dateTimeKey:string) {
    for (const item of data) {
        item[dateTimeKey] = new Date(item[dateTimeKey]);        
    }
}