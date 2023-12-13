// export { default as createFile } from "./src/methods/git/create_file";
// export { default as deleteFile } from "./src/methods/git/delete_file";
// export { default as fetchFiles } from "./src/methods/git/fetch_files";
// export { default as getFileContent } from "./src/methods/git/get_file_content";
// export { default as updateFile } from "./src/methods/git/update_file";
// export { Administrator, IAdministrator } from "./src/models/administrator";
// export { FileComment, IFileComment } from "./src/models/file_comment";
// export { FileContent, IFileContent } from "./src/models/file_content";
// export { FileModel, IFileModel } from "./src/models/file_model";
// export { default as EsgSDK } from "./src/sdk";
// export {ViewsByDateResponse, IViewsByDateResponse} from './src/models/views_by_date_response';
// export {ViewsByPageResponse,IViewsByPageResponse} from './src/models/views_by_page_response';
// export {ViewsByCityAndPageResponse,IViewsByCityAndPageResponse} from './src/models/views_by_city_and_page_response';
// export {default as getViewsByDate} from "./src/methods/analytics/get_views_by_date";
// export {default as getViewsByPage} from "./src/methods/analytics/get_views_by_page";
// export {default as getViewsByCityAndPage} from "./src/methods/analytics/get_views_by_city_and_page";

import EsgSDK from "./src/sdk";


const sdk : EsgSDK = EsgSDK.initialize("qWk0Pe6jAO3mxFQCvctoIuO4PdU0IcKQ1ta6m5vhchOd0Z0KdoLWQORKAK8PZeehyfvTdtUY9DHqsMvln9z6XG1SopoqA7d8J4hXhR4zJZv4kkeHm7qNWkN8R0rq8INB","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qbXdzdWhwY3ducGRvcGtyZnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4ODA2OTAsImV4cCI6MjAxNzQ1NjY5MH0.UP6Ef4i4FOgWk6zCxSSdHWGMY2QoYI9rTDGnWIKqo7k","https://mjmwsuhpcwnpdopkrfub.supabase.co")

 sdk.getComments("c5ebf762-3f49-43e1-a437-27acc3094673").then(console.log);