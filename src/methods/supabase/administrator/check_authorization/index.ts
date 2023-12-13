// import { SupabaseClient } from "@supabase/supabase-js";




// export default async function checkAuthorization(supabase:SupabaseClient): Promise<> {
//     const userId = (await supabase.auth.getUser()).data.user?.id;
//     const {data,error} = await (supabase.rpc("get_authorization",{
//         "uid":userId
//     }))
//     if(error){
//         throw error;
//     }else{
//         return data;
//     }

// }