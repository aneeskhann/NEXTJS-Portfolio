# Muhammad Anees - Portfolio Website

A modern, responsive portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for speed and SEO
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Animations**: Smooth animations with Framer Motion
- **Contact Form**: Working contact form with validation
- **Resume Download**: Downloadable PDF resume functionality

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Next Themes

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Markhoranees/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Start the production server:
\`\`\`bash
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading component
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── navigation.tsx    # Navigation component
│   ├── footer.tsx        # Footer component
│   └── ...
├── hooks/                # Custom hooks
├── lib/                  # Utility functions
└── public/               # Static assets
\`\`\`

## 🎨 Customization

### Colors
Update the color scheme in `app/globals.css` and `tailwind.config.ts`.

### Content
- Update personal information in each page component
- Replace placeholder images with actual project screenshots
- Add your actual resume PDF to the `public` folder

### Contact Form
The contact form uses a Next.js API route. For production, integrate with:
- Email services (SendGrid, Resend, Nodemailer)
- Database for storing messages
- Notification systems

## 📱 Pages

- **Home**: Hero section with introduction and tech stack
- **About**: Personal information, education, and skills
- **Projects**: Portfolio of projects with live demos
- **Resume**: Downloadable resume with preview
- **Contact**: Contact form and information

## 🔧 Environment Variables

Create a `.env.local` file for environment variables:

\`\`\`env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
\`\`\`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Muhammad Anees
- Email: aneeskhann666@gmail.com
- GitHub: [@Markhoranees](https://github.com/Markhoranees)
- Phone: 03468883034
