# Speechify Landing Page

## About the Project

The Speechify Landing Page project is a web application developed as part of a technical assessment for the Landing Page Engineer position at Speechify. The project showcases a responsive, accessible, and SEO-optimized landing page built using modern web technologies. It includes a dynamic country-specific page powered by GraphQL for fetching data.

## Features

- **Responsive Design:** Tailored for optimal display on devices of all sizes using Tailwind CSS.
- **GraphQL Integration:** Fetches country-specific data dynamically from a public GraphQL API.
- **Dynamic Routing:** Implements dynamic pages (`/available/<country_code>`) to show localized content.
- **SEO Optimizations:** Ensures high Lighthouse scores through semantic HTML, metadata, and server-side rendering (SSR).
- **Accessibility Compliance:** Adheres to accessibility standards for an inclusive user experience.

## Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Data Fetching:** GraphQL API
- **Accessibility Testing:** Aria roles and semantic tags

## Getting Started

To set up the project locally, follow these steps:

### Prerequisites

Ensure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v20.x.x)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dchobarkar/speechify-landing-page.git
   cd speechify-landing-page
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

### API Setup

The project uses a public GraphQL API for country data:

- **API URL:** `https://countries.trevorblades.com/graphql`

## Usage

- **Landing Page (`/`):** Explore the core offerings of Speechify.
- **Dynamic Country Page (`/available/<country_code>`):** View localized content for each country by entering the corresponding country code in the URL.

## Deployment

This project can be deployed on any platform that supports Next.js. Suggested platforms include:

- **Vercel**: Recommended for its seamless Next.js integration.
- **AWS Amplify**: Offers serverless hosting and CI/CD pipelines.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add YourFeatureName"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more details.

## Contact

Darshan Chobarkar
[LinkedIn](https://www.linkedin.com/in/dchobarkar/) | [GitHub](https://github.com/dchobarkar) | [Portfolio](https://darshanwebdev.com)

**Project Link:** [Speechify Landing Page](https://github.com/dchobarkar/speechify-landing-page)
