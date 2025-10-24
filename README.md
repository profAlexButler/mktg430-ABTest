# MKTG 430 - A/B Test Voting Platform

A simple, clean web application for students to review and vote on A/B test submissions from their Social Media Marketing class.

## Features

- **Simple Workflow**: Name entry → Vote on 18 tests → Download CSV → Submit to myCourses
- **A/B Test Voting**: Compare 18 different A/B test submissions with image and copy variations
- **Engagement Tracking**: Rate click likelihood (1-5 scale) for both variants
- **Commenting System**: Optional feedback on each A/B test
- **CSV Download**: One-click download of all voting data
- **Mobile Responsive**: Works on all devices
- **Zero Dependencies**: Pure HTML/CSS/JavaScript - works perfectly on GitHub Pages

## How to Use

### For Students

1. Go to **profalexbutler.github.io/mktg430-ABTest**
2. Enter your name
3. For each of the 18 A/B tests:
   - View both variants (A and B)
   - Rate click likelihood for each (1-5 slider)
   - Select which variant you prefer
   - Optionally add comments
   - Submit vote
4. After completing all tests, click **"Download My Data (CSV)"**
5. Submit the CSV file to the assignment dropbox on myCourses

### For Instructors

**Data Collection:**
- Students download their individual CSV files
- Each file is named: `ABTest_StudentName_2025-10-24.csv`
- Students submit these to your LMS assignment dropbox
- You can combine all CSV files in Excel or Google Sheets for class-wide analysis

**CSV Data Includes:**
- Student Name
- Test Name (e.g., "CopyTest - Crocs")
- Test Type (Copy, Image, or Copy/Audience)
- Variant Selected (A or B)
- Variant A Click Likelihood (1-5)
- Variant B Click Likelihood (1-5)
- Comments (if provided)
- Timestamp

## A/B Tests Included

The platform includes 18 A/B tests from various brands:
- Memorial Art Gallery
- Crocs (multiple tests)
- Duolingo (multiple tests)
- Tim Hortons
- Spirit Airlines
- Wegmans (multiple tests)
- Liquid Death (multiple tests)
- Denny's (multiple tests)
- Jimmy Johns
- Arby's

## Test Types

- **Copy Tests**: Same image, different text
- **Image Tests**: Same text, different images
- **Copy/Audience Tests**: Different copy targeting different audiences

## Technical Details

- **Frontend**: Vanilla JavaScript (no frameworks)
- **Styling**: Pure CSS
- **Dependencies**: None
- **Works on**: Any modern browser, GitHub Pages, any static hosting

## Browser Compatibility

Works in all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## Privacy

All data stays in the student's browser until they download the CSV. No data is sent to external servers. Images are hosted on Google Drive.
