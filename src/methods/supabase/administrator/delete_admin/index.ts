import { SupabaseClient } from "@supabase/supabase-js";


export default async function deleteAdmin(supabase:SupabaseClient,userId:string): Promise<void>{
    await supabase.from("administrators").delete().eq("user_id",userId);
}