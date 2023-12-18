import { SupabaseClient } from "@supabase/supabase-js";
import { CertificateModel } from "../../../../models/certificate";

export default async function uploadDocument(supabase:SupabaseClient,docName:string,blob:Blob,bucketName:string):Promise<any> {
    const { data, error } = await supabase
    .storage
    .from(bucketName)
    .upload(docName, blob, {
      cacheControl: '3600',
      upsert: false
    });

    return data;
}