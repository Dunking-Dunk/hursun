# Hursun - A Full-Stack E-Commerce Website

Hursun is a feature-rich e-commerce platform built with modern web technologies. It provides a seamless shopping experience for users, from browsing products to a secure checkout process. This project showcases a full-stack application with a focus on performance, scalability, and user experience.

## Features

-   **Product Catalog:** Browse a wide range of products with detailed descriptions and images.
-   **Shopping Cart:** Add and manage products in a persistent shopping cart.
-   **User Authentication:** Secure user registration and login functionality.
-   **Order Management:** View and track your order history.
-   **Admin Dashboard:** A dedicated dashboard for administrators to manage products, orders, and users.
-   **Responsive Design:** A mobile-first design that looks great on any device.

## Tech Stack

This project is built with the following technologies:

-   **Frontend:**
    -   [Next.js](https://nextjs.org/) - A React framework for building server-side rendered and static web applications.
    -   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
    -   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
    -   [Shadcn/ui](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind CSS.
-   **Backend:**
    -   [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - For creating the backend API.
    -   [Prisma](https://www.prisma.io/) - A next-generation ORM for Node.js and TypeScript.
-   **Database:**
    -   [MySQL](https://www.mysql.com/) - A popular open-source relational database.
-   **Authentication:**
    -   [NextAuth.js](https://next-auth.js.org/) - An authentication library for Next.js applications.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:

-   [Node.js](httpss://nodejs.org/en/) (v18 or later)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Dunking-Dunk/hursun.git](https://github.com/Dunking-Dunk/hursun.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd hursun
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

### Environment Variables

This project uses environment variables to store sensitive information. Create a `.env.local` file in the root of the project and add the following variables:


Database
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"

NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Generate a secret using: openssl rand -base64 32

Google OAuth
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=


### Running the Application

1.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Dunking-Dunk - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/Dunking-Dunk/hursun](https://github.com/Dunking-Dunk/hursun)
