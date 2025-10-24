# MKTG 430 - A/B Test Voting Platform

An interactive web application for students to review, vote on, and comment on A/B test submissions from their Social Media Marketing class. The platform collects engagement data and provides analytics to demonstrate what social media analysts look for in A/B testing.

## Features

- **User Authentication**: Students enter their name to personalize their voting experience
- **A/B Test Voting**: Compare 18 different A/B test submissions with image and copy variations
- **Engagement Tracking**: Rate click likelihood (1-5 scale) for both variants
- **Commenting System**: Leave feedback and insights on each A/B test
- **Data Persistence**: All votes and comments are saved in browser localStorage
- **Real-time Results**: See vote counts and engagement scores after voting on each test
- **Analytics Dashboard**: Comprehensive analytics showing:
  - Overall performance metrics
  - Winner distribution across all tests
  - Performance by test type (Copy vs Image tests)
  - Click likelihood distributions
  - Key insights for social media analysts

## How to Use

### Opening the Website

1. **Simple Method**: Open `index.html` directly in a web browser
   - Right-click on `index.html` and select "Open with" > your preferred browser
   - Or drag and drop `index.html` into an open browser window

2. **Local Server Method** (recommended for best performance):
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Python 2
   python -m SimpleHTTPServer 8000

   # Using Node.js (if you have npx)
   npx http-server
   ```
   Then open `http://localhost:8000` in your browser

### Using the Platform

1. **Enter Your Name**: Start by entering your name on the welcome screen
2. **Vote on Tests**:
   - View the A/B test variants side-by-side
   - Rate click likelihood for each variant (1-5)
   - Choose which variant you prefer
   - Optionally add comments with your thoughts
   - Submit your vote
3. **View Results**: After voting, see the results for that specific test
4. **Navigate Tests**: Use Previous/Next buttons to move through all 18 tests
5. **View Summary**: After completing all tests, see a summary of all results
6. **Analytics Dashboard**: Click "View Analytics Dashboard" to see comprehensive insights

## Data Structure

### A/B Tests Included

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

### Test Types

- **Copy Tests**: Same image, different text
- **Image Tests**: Same text, different images
- **Copy/Audience Tests**: Different copy targeting different audiences

## Data Persistence

All data is stored locally in your browser using localStorage:
- **Votes**: Preference, likelihood scores, and voter information
- **Comments**: User feedback on each test
- **User Name**: Your name for attribution

To reset all data, use the "Start New Session" button in the Summary view.

## Analytics Insights

The analytics dashboard provides insights that social media analysts typically look for:

1. **Variant Performance**: Which variant (A or B) performs better overall
2. **Engagement Quality**: Average click likelihood scores
3. **Test Type Effectiveness**: Performance breakdown by test type
4. **Community Engagement**: Comment participation rates

## Technical Details

- **Frontend**: React 18 with JSX
- **Charts**: Recharts for data visualization
- **Styling**: Tailwind CSS
- **Data Storage**: Browser localStorage
- **Dependencies**: Loaded via CDN (no installation required)

## For Instructors

### Exporting Data

To collect student data for analysis:
1. Have students open browser console (F12)
2. Run: `console.log(JSON.stringify(localStorage))`
3. Copy the output and save to a file

### Analyzing Data

The localStorage contains:
- `abTestVotes`: All voting data with timestamps and user names
- `abTestComments`: All comments with timestamps and user names
- This data can be imported into Excel, Google Sheets, or statistical software for further analysis

## Browser Compatibility

Works best in modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Privacy

All data is stored locally in the user's browser. No data is sent to external servers. Images are hosted on Google Drive and loaded directly from there.
