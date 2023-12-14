import { SupabaseClient } from "@supabase/supabase-js";

export default async function createDiscardAdminRole(supabase:SupabaseClient, userId : string,is_admin:Boolean):Promise<void> {
   await supabase.from("administrators").update({"is_admin":is_admin,
"user_id":userId});
}