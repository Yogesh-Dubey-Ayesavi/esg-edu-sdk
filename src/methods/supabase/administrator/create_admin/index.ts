import { SupabaseClient } from "@supabase/supabase-js";

async function createDiscardAdmin(supabase:SupabaseClient, userId : string,is_admin:Boolean) {
    supabase.from("administrators").update({"is_admin":is_admin});
}