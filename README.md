# EsgSDK

The EsgSDK is a typescript library that provides methods for file management and analytics using the ESG API. It follows the Singleton pattern to ensure a single instance is used throughout the application.

## Installation

```bash
npm install esg-sdk
```

## Usage

```typescript
// Example usage of the EsgSDK class with InitiativeContent and InitiativeModel
import { EsgSDK, InitiativeContent, InitiativeModel } from "esg-sdk";

// Initialize the EsgSDK singleton instance
const esgSDK = EsgSDK.initialize({
     analyticsApiKey :"YOUR_API_KEY",
     supabaseApiKey:"YOUR_API_KEY",
     supabaseApiUrl :"SUPBASE_API_URL"
});


### Using EsgSDK instance
EsgSDK instance once initilized can be obtained anywhere just by calling static method `getInstance`;


const sdk = EsgSDK.getInstance;

// Example file content data
const fileContentData = new InitiativeContent({
  sha: "abc123",
  path: "environment/file1",
  name: "file1",
  type: "file",
  content: "# Hi \n This is the rest content...."
});

// Example file model data
const fileModelData = new InitiativeModel({
  sha: "def456",
  path: "social/file2",
  name: "file2",
  type: "file"
});

// Using createFile method with InitiativeContent
async function createFileExample() {
  const fileContentInstance = new InitiativeContent(fileContentData);
  const success = await esgSDK.createFile(fileContentInstance);
  console.log("File creation success:", success);
}

// Using fetchFiles method with InitiativeModel
async function fetchFilesExample() {
  const directory = "environment";
  const files = await esgSDK.fetchFiles(directory);
  console.log("Fetched Files:", files.map(file => new InitiativeModel(file)));
}

// Using updateFile method with InitiativeContent
async function updateFileExample() {
  const fileContentInstance = new InitiativeContent(fileContentData);
  const success = await esgSDK.updateFile(fileContentInstance);
  console.log("File update success:", success);
}

// Using getInitiativeContent method with InitiativeContent
async function getInitiativeContentExample() {
  const dir = "environment";
  const fileName = "file1";
  const fileContentInstance = await esgSDK.getInitiativeContent(dir, fileName);
  console.log("File Content:", new InitiativeContent(fileContentInstance));
}

// Using deleteFile method with InitiativeContent
async function deleteFileExample() {
  const fileContentInstance = new InitiativeContent(fileContentData);
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

// Sign In Usage
try {
  const authSuccess = await esgSDK.signIn(() => {
    // Auth event listener
    console.log('User authenticated!');
  });
  console.log('Authentication success:', authSuccess);
} catch (error) {
  console.error('Error during sign-in:', error);
}

// getUserInfo Usage
try {
  const userInfo = await esgSDK.getUserInfo();
  console.log('User information:', userInfo);
} catch (error) {
  console.error('Error getting user information:', error);
}

// signOut Usage
try {
  await signOut();
  console.log('User signed out successfully.');
} catch (error) {
  console.error('Error during sign-out:', error);
}


// getComments Usage
try {
  const pageId = "examplePageId";
  const comments = await esgSDK.getComments(pageId);
  console.log('Comments:', comments);
} catch (error) {
  console.error('Error fetching comments:', error);
}

// inviteAdmin Usage
try {
  const email = "admin@example.com";
  await esgSDK.inviteAdmin(email);
  console.log('Admin invitation sent successfully.');
} catch (error) {
  console.error('Error sending admin invitation:', error);
}



// acceptInvitation Usage
try {
  const access_token = "exampleAccessToken";
  const success = await esgSDK.acceptInvitation(access_token);
  console.log('Invitation acceptance success:', success);
} catch (error) {
  console.error('Error accepting invitation:', error);
}

// checkAuthorization Usage
try {
  const isAuthorized = await esgSDK.checkAuthorization();
  console.log('User authorization status:', isAuthorized);
} catch (error) {
  console.error('Error checking authorization:', error);
}


// createDiscardAdminRole Usage
try {
  const userId = "exampleUserId";
  const is_admin_role = true;
  await esgSDK.createDiscardAdminRole(userId, is_admin_role);
  console.log('Admin role created successfully.');
} catch (error) {
  console.error('Error creating/discarding admin role:', error);
}


// deleteAdmin Usage
try {
  const userId = "exampleUserId";
  await esgSDK.deleteAdmin(userId);
  console.log('Admin role deleted successfully.');
} catch (error) {
  console.error('Error deleting admin role:', error);
}
```

## Methods

### `createFile(file: InitiativeContent): Promise<boolean>`

Creates a file with the specified content at the given path.

### `fetchFiles(dir: string): Promise<InitiativeModel[]>`

Fetches a list of InitiativeModel instances from the specified API endpoint.

### `updateFile(file: InitiativeContent): Promise<boolean>`

Updates a file with the specified content at the given path.

### `getInitiativeContent(dir: string, fileName: string): Promise<InitiativeContent>`

Fetches the content of a file from the specified API endpoint.

### `deleteFile(fileContent: InitiativeContent): Promise<boolean>`

Deletes a file at the specified path.

### `getViewsByDate(): Promise<ViewsByDateResponse[]>`

Fetches views by date from the analytics API.

### `getViewsByPage(): Promise<ViewsByPageResponse[]>`

Fetches per-page views data from the analytics API.

### `getViewsByCityAndPage(): Promise<ViewsByCityAndPageResponse[]>`

Fetches views data by city and page from the analytics API.
