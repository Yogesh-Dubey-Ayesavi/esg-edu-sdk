// export { default as getCountByYearByStatus, getCountTotalIntiatives } from './src/methods/analytics/get_count_by_year_by_status';
// export { default as getViewsByCityAndPage } from "./src/methods/analytics/get_views_by_city_and_page";
// export { default as getViewsByDate } from "./src/methods/analytics/get_views_by_date";
// export { default as getViewsByPage } from "./src/methods/analytics/get_views_by_page";
// export { CreateFileParams, default as createFile } from "./src/methods/git/create_file";
// export { default as deleteFile } from "./src/methods/git/delete_file";
// export { default as fetchFiles } from "./src/methods/git/fetch_files";
// export { default as getInitiativeContent } from "./src/methods/git/get_file_content";
// export { default as updateFile } from "./src/methods/git/update_file";
// export { Administrator, IAdministrator } from "./src/models/administrator";
// export { CertificateModel, ICertificationModel } from './src/models/certificate';
// export { CompositeFilter } from './src/models/composite_filter';
// export { UserRole } from './src/models/enumerations';
// export { FileComment, IFileComment } from "./src/models/file_comment";
// export { IInitiativeContent, InitiativeContent } from "./src/models/file_content";
// export { IInitiativeModel, InitiativeModel } from "./src/models/file_model";
// export { IInstitutionInitializer, InstitutionModel } from './src/models/institution';
// export { SDKInitializerConfig } from './src/models/sdk_initializer_config';
// export { IViewsByCityAndPageResponse, ViewsByCityAndPageResponse } from './src/models/views_by_city_and_page_response';
// export { IViewsByDateResponse, ViewsByDateResponse } from './src/models/views_by_date_response';
// export { IViewsByPageResponse, ViewsByPageResponse } from './src/models/views_by_page_response';
// export { default as EsgSDK } from "./src/sdk";


import EsgSDK from "./src/sdk";



const sdk = EsgSDK.initialize({
    analyticsApiKey :"qWk0Pe6jAO3mxFQCvctoIuO4PdU0IcKQ1ta6m5vhchOd0Z0KdoLWQORKAK8PZeehyfvTdtUY9DHqsMvln9z6XG1SopoqA7d8J4hXhR4zJZv4kkeHm7qNWkN8R0rq8INB",
    supabaseApiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXdzdWhwY3ducGRvcGtyZnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4ODA2OTAsImV4cCI6MjAxNzQ1NjY5MH0.UP6Ef4i4FOgWk6zCxSSdHWGMY2QoYI9rTDGnWIKqo7k",
    supabaseApiUrl :"https://mjmwsuhpcwnpdopkrfub.supabase.co/"
})

