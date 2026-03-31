# Smart Student AI Toolkit - Complete Project

## 📦 Project Overview

A modern, fast, SEO-optimized web application with 10 productivity tools for students and job seekers.

**Live Demo:** https://smart-student-ai-5.preview.emergentagent.com

---

## ✨ Features

### 🤖 AI-Powered Tools (4 tools)
- **Text Summarizer** - AI summarization with 5000 char limit
- **Paraphrasing Tool** - Rewrite text maintaining meaning
- **Grammar Corrector** - Fix grammar and spelling errors
- **Bio Generator** - Create professional bios

### 🚀 Productivity Tools (6 tools)
- **Word Counter** - Count words, characters, sentences
- **Percentage Calculator** - Calculate percentages with tabs
- **Study Planner** - Generate study schedules
- **Resume Generator** - Create & download PDF resumes
- **To-Do List** - Task management with localStorage
- **Pomodoro Timer** - Focus sessions with breaks

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **AI:** Google Gemini API (gemini-2.5-flash)
- **PDF:** jsPDF + Browser Print API
- **Database:** MongoDB (optional, not required for tools)
- **State:** React Hooks + localStorage

---

## 📋 Prerequisites

- Node.js 18+ 
- Yarn package manager
- Google Gemini API key (free at https://aistudio.google.com/app/apikey)

---

## 🚀 Quick Start

### 1. Extract & Install

```bash
# Extract the ZIP file
unzip smart-student-ai-toolkit.zip
cd smart-student-ai-toolkit

# Install dependencies
yarn install
```

### 2. Configure Environment

Create/update `.env` file:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=your_database_name
NEXT_PUBLIC_BASE_URL=http://localhost:3000
CORS_ORIGINS=*
NEXT_PUBLIC_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

**Important:** 
- Variable must be `NEXT_PUBLIC_GEMINI_API_KEY` for frontend access
- Get free API key at: https://aistudio.google.com/app/apikey

### 3. Run Development Server

```bash
yarn dev
```

Visit: http://localhost:3000

### 4. Build for Production

```bash
yarn build
yarn start
```

---

## 📁 Project Structure

```
smart-student-ai-toolkit/
├── app/
│   ├── layout.js              # Root layout with theme provider
│   ├── page.js                # Homepage with hero & tool cards
│   ├── globals.css            # Global styles
│   ├── api/                   # API routes (deprecated)
│   └── tools/                 # Tool pages
│       ├── word-counter/
│       ├── text-summarizer/
│       ├── paraphrasing/
│       ├── grammar-corrector/
│       ├── bio-generator/
│       ├── resume-generator/
│       ├── percentage-calculator/
│       ├── study-planner/
│       ├── todo-list/
│       └── pomodoro-timer/
├── components/
│   ├── Navbar.js              # Navigation with logo & links
│   ├── Footer.js              # Footer with social links
│   ├── ToolCard.js            # Tool card component
│   ├── ToolLayout.js          # Shared layout for tools
│   ├── ThemeToggle.js         # Dark/light mode toggle
│   └── ui/                    # shadcn/ui components
├── lib/
│   ├── toolsData.js           # Tool metadata & configuration
│   └── utils.js               # Utility functions
├── hooks/
│   ├── use-toast.js
│   └── use-mobile.jsx
├── .env                       # Environment variables
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── README.md                  # This file
```

---

## 🔧 Configuration

### Theme Colors (tailwind.config.js)

The app uses a blue/purple gradient theme. Customize in `tailwind.config.js`:

```javascript
primary: '262 83% 58%',  // Purple
```

### Tool Configuration (lib/toolsData.js)

Add/modify tools by editing the `tools` array:

```javascript
{
  id: 'tool-id',
  title: 'Tool Name',
  description: 'Tool description',
  icon: IconComponent,
  category: 'category-id',
  path: '/tools/tool-name',
  aiPowered: true // Optional
}
```

---

## 🤖 AI Integration

### How AI Tools Work

All AI tools use **direct frontend API calls** to Google Gemini:

1. User enters text
2. Frontend calls Gemini API directly (no backend)
3. Response displayed instantly
4. Copy button for results

### Switching AI Providers

To switch from Gemini to OpenAI/Claude:

1. Update environment variable name in `.env`
2. Modify fetch calls in tool pages:
   - `/app/tools/text-summarizer/page.js`
   - `/app/tools/paraphrasing/page.js`
   - `/app/tools/grammar-corrector/page.js`
   - `/app/tools/bio-generator/page.js`

3. Change API endpoint and request format

---

## 📱 Features in Detail

### Resume Generator
- Form-based resume builder
- Live preview before download
- **Download PDF:** Uses `window.print()` with A4 layout
- **Copy Resume:** Copies text to clipboard
- Add multiple experiences/education entries

### To-Do List
- Uses localStorage (no backend needed)
- Add, complete, delete tasks
- Persistent across sessions

### Pomodoro Timer
- 25-minute work sessions
- 5-minute breaks
- Session counter
- Start/pause/reset controls

### AI Tools
- 5000 character limit (text tools)
- Real-time character counter
- Error handling with user-friendly messages
- Loading states

---

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility classes
- **shadcn/ui** for pre-built components
- **next-themes** for dark/light mode
- **Lucide React** for icons

### Dark Mode

Default theme is dark. Users can toggle via navbar.

Implemented using `next-themes`:
```javascript
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem
/>
```

---

## 🧪 Testing

The project includes test structure in `/tests`:

```bash
# Backend tests (if needed)
python backend_test.py

# Frontend testing would require Playwright
# (Not included in base project)
```

---

## 📦 Dependencies

### Main Dependencies
- `next`: 14.2.3
- `react`: 18
- `tailwindcss`: 3.4.1
- `next-themes`: 0.4.6
- `jspdf`: 4.2.1
- `lucide-react`: 0.516.0
- `mongodb`: 6.6.0 (optional)

### shadcn/ui Components
All UI components from shadcn/ui are included in `/components/ui`

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The app works on any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

**Environment Variables Required:**
- `NEXT_PUBLIC_GEMINI_API_KEY`
- `NEXT_PUBLIC_BASE_URL`

---

## 🔒 Security Notes

1. **API Key Exposure:** The Gemini API key is exposed in frontend (NEXT_PUBLIC_*). 
   - This is by design for direct frontend calls
   - Use API key restrictions in Google Cloud Console
   - Set allowed referrers to your domain

2. **Rate Limiting:** Implement rate limiting if needed using middleware

3. **CORS:** Currently set to `*` - restrict in production

---

## 🐛 Troubleshooting

### AI Tools Not Working

1. Check `.env` file has correct key format:
   ```
   NEXT_PUBLIC_GEMINI_API_KEY=AIzaSy...
   ```

2. Restart dev server:
   ```bash
   yarn dev
   ```

3. Check browser console for errors

### Dark Mode Not Working

Clear localStorage and refresh:
```javascript
localStorage.clear();
location.reload();
```

### Resume PDF Issues

Resume Generator uses browser's print dialog:
1. Click "Download PDF"
2. Print dialog opens
3. Select "Save as PDF"
4. Choose location and save

---

## 📄 License

MIT License - Feel free to use for personal or commercial projects

---

## 🤝 Contributing

This is a complete, production-ready project. You can:
- Add more tools
- Customize styling
- Add authentication
- Integrate analytics
- Add more AI features

---

## 📞 Support

For issues or questions about this project:
- Check the README thoroughly
- Review code comments
- Test locally before deploying

---

## 🎯 Key Files to Customize

1. **Homepage:** `/app/page.js`
2. **Navbar:** `/components/Navbar.js`
3. **Footer:** `/components/Footer.js`
4. **Colors:** `/tailwind.config.js`
5. **Tools List:** `/lib/toolsData.js`
6. **SEO:** `/app/layout.js` (metadata)

---

## ✅ Production Checklist

Before deploying:

- [ ] Add your Gemini API key
- [ ] Update `NEXT_PUBLIC_BASE_URL`
- [ ] Restrict API key to your domain
- [ ] Update social media links in Footer
- [ ] Test all 10 tools
- [ ] Test dark/light mode
- [ ] Test mobile responsiveness
- [ ] Run `yarn build` successfully
- [ ] Update SEO metadata

---

## 🎉 Built With

- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui
- Google Gemini AI
- jsPDF
- Lucide Icons

**Created:** 2025
**Version:** 1.0.0

---

Enjoy building with Smart Student AI Toolkit! 🚀
