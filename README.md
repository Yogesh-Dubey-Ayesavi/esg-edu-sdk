# EsgSDK

The EsgSDK is a typescript library that provides methods for file management and analytics using the ESG API. It follows the Singleton pattern to ensure a single instance is used throughout the application.

## Installation

```bash
npm install esg-sdk
```

## Usage

```typescript
// Example usage of the EsgSDK class with FileContent and FileModel
import { EsgSDK, FileContent, FileModel } from "esg-sdk";

// Initialize the EsgSDK singleton instance
const esgSDK = EsgSDK.initialize("your-analytics-api-key");

// Example file content data
const fileContentData = new FileContent({
  sha: "abc123",
  path: "environment/file1",
  name: "file1",
  type: "file",
  content: "# Hi \n This is the rest content...."
});

// Example file model data
const fileModelData = new FileModel({
  sha: "def456",
  path: "social/file2",
  name: "file2",
  type: "file"
});

// Using createFile method with FileContent
async function createFileExample() {
  const fileContentInstance = new FileContent(fileContentData);
  const success = await esgSDK.createFile(fileContentInstance);
  console.log("File creation success:", success);
}

// Using fetchFiles method with FileModel
async function fetchFilesExample() {
  const directory = "environment";
  const files = await esgSDK.fetchFiles(directory);
  console.log("Fetched Files:", files.map(file => new FileModel(file)));
}

// Using updateFile method with FileContent
async function updateFileExample() {
  const fileContentInstance = new FileContent(fileContentData);
  const success = await esgSDK.updateFile(fileContentInstance);
  console.log("File update success:", success);
}

// Using getFileContent method with FileContent
async function getFileContentExample() {
  const dir = "environment";
  const fileName = "file1";
  const fileContentInstance = await esgSDK.getFileContent(dir, fileName);
  console.log("File Content:", new FileContent(fileContentInstance));
}

// Using deleteFile method with FileContent
async function deleteFileExample() {
  const fileContentInstance = new FileContent(fileContentData);
  const success = await esgSDK.deleteFile(fileContentInstance);
  console.log("File deletion success:", success);
}

// Using getViewsByDate method
async function getViewsByDateExample() {
  const viewsByDateData = await esgSDK.getViewsByDate();
  console.log("Views by Date:", viewsByDateData);
}

// Using getViewsByPage method
async function getViewsByPageExample() {
  const perPageViewsData = await esgSDK.getViewsByPage();
  console.log("Per-Page Views:", perPageViewsData);
}

// Using getViewsByCityAndPage method
async function getViewsByCityAndPageExample() {
  const viewsByCityAndPageData = await esgSDK.getViewsByCityAndPage();
  console.log("Views by City and Page:", viewsByCityAndPageData);
}
```

**Note**: Replace `"your-analytics-api-key"` with your actual analytics API key when using these methods.

## Methods

### `createFile(file: FileContent): Promise<boolean>`

Creates a file with the specified content at the given path.

### `fetchFiles(dir: string): Promise<FileModel[]>`

Fetches a list of FileModel instances from the specified API endpoint.

### `updateFile(file: FileContent): Promise<boolean>`

Updates a file with the specified content at the given path.

### `getFileContent(dir: string, fileName: string): Promise<FileContent>`

Fetches the content of a file from the specified API endpoint.

### `deleteFile(fileContent: FileContent): Promise<boolean>`

Deletes a file at the specified path.

### `getViewsByDate(): Promise<ViewsByDateResponse[]>`

Fetches views by date from the analytics API.

### `getViewsByPage(): Promise<ViewsByPageResponse[]>`

Fetches per-page views data from the analytics API.

### `getViewsByCityAndPage(): Promise<ViewsByCityAndPageResponse[]>`

Fetches views data by city and page from the analytics API.
