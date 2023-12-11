

```typescript
// Example usage of the EsgSDK class with FileContent and FileModel
import {EsgSDK} from "esg-sdk";

// Initialize the EsgSDK singleton instance
const esgSDK = EsgSDK.initialize();

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


```

These modified examples use instances of `FileContent` and `FileModel` directly when calling the methods of the `EsgSDK` class. Adjust these examples based on your actual data and use case.