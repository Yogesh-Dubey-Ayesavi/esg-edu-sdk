/**
 * Configuration model for initializing the SDK.
 */
export interface SDKInitializerConfig {
    /**
     * The API key used for analytics.
     */
    analyticsApiKey: string;
  
    /**
     * The API key for accessing Supabase services.
     */
    supabaseApiKey: string;
  
    /**
     * The base URL for the Supabase API.
     */
    supabaseApiUrl: string;
  }
  