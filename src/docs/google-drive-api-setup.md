# Google Drive API Setup for Stella Di Pietra Catalogues

This guide will help you set up the Google Drive API to display PDF catalogues on the Stella Di Pietra website.

## 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top of the page and select "New Project"
3. Name your project (e.g., "Stella Di Pietra Catalogues") and click "Create"
4. Select your new project from the dropdown once it's created

## 2. Enable the Google Drive API

1. In the Google Cloud Console, navigate to "APIs & Services" > "Library"
2. Search for "Google Drive API" and select it from the results
3. Click "Enable" to activate the API for your project

## 3. Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" and select "API Key"
3. Your new API key will be displayed. Copy this key.
4. Click "Restrict Key" to set up restrictions:
   - Under "Application restrictions," select "HTTP referrers (websites)"
   - Add your website's domain (e.g., `*.stelladipietra.com/*`, `localhost:*` for development)
   - Under "API restrictions," select "Restrict key" and choose "Google Drive API"
   - Click "Save"

## 4. Configure API Key in the Application

1. Open `src/utils/googleDriveApi.js`
2. Replace `'YOUR_API_KEY'` with your actual API key:

```javascript
const API_KEY = 'YOUR_ACTUAL_API_KEY'; // Replace with your API key
```

## 5. Google Drive Folder Structure

1. Ensure your Google Drive folder structure is:
   - Main folder: https://drive.google.com/drive/folders/1JxGJxzHW9qYB_d9AGnV8G-qsmLHVgbDX
   - CATALOG subfolder inside the main folder
   - Category subfolders inside the CATALOG folder
   - PDF files inside each category subfolder

2. Verify folder permissions:
   - Right-click on the main folder
   - Select "Share"
   - Make sure "Anyone with the link" is selected
   - Set permission to "Viewer"
   - Click "Done"

## 6. Testing

1. Run the application locally
2. Navigate to the Catalogues page
3. You should see your PDF catalogues displayed with their respective categories

## Troubleshooting

If the catalogues don't appear:

1. Check the browser console for errors
2. Verify that your API key is correct and has the proper restrictions
3. Ensure the Google Drive folder structure is correct and accessible
4. Check that the folder and files have the appropriate sharing permissions

## API Usage Limits

The Google Drive API has the following limits:

- 1,000,000 requests per day
- 1,000 requests per 100 seconds per user
- 2 KiB per file for thumbnails

Monitor your API usage in the Google Cloud Console under "APIs & Services" > "Dashboard". 