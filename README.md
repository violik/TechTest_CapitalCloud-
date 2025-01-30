# Getting Started

## Frontend (ReactJS & Next.js)

The frontend is built using **ReactJS** and **Next.js**, and written in **TypeScript**.

### Features:

- The app currently has one page, the login page, which is **fake**. Simply click "Login" to proceed.
- The **Dashboard** allows the user to:
  - View offers available for purchase.
  - See owned shares.
  - Create an offer to sell their shares.
  - Track the status of their existing offers.

### To run the frontend:

1. Navigate to the `investhub` directory:

   ```bash
   cd investhub
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Libraries used:

- **TailwindCSS** for UI component styling: [Shadcn UI](https://ui.shadcn.com/)

---

## Backend (PHP 8.2 & Docker)

The backend is built using **PHP 8.2**, running inside a **Docker** container.

- **Database**: A MySQL database is mounted but not currently used. A **fake JSON database** is used instead.
- **Controllers**: The main controller, `OfferController.php`, handles **Create** and **Read** operations for offers. **Update** and **Delete** operations will follow.
- **Issues**: There’s an issue with the **CORS middleware** that still needs to be resolved.
- **Doctrine ORM**: The initial setup of **Doctrine ORM** is in progress for database management.

### Prerequisites:

- Ensure **Docker** is installed on your system.

### To run the backend:

1. Navigate to the `investhub_back` directory:

   ```bash
   cd investhub_back
   ```

2. Install dependencies using Composer:

   ```bash
   docker-compose run --rm composer install
   ```

3. Build and start the Docker containers:

   ```bash
   docker-compose up --build
   ```

   Or, if already initialized:

   ```bash
   docker-compose up -d
   ```

4. Access the API at:
   ```
   http://localhost:8000/offers
   ```

### Libraries used:

- **Doctrine ORM** for database management: [Doctrine Project](https://www.doctrine-project.org/)
- **Slim 4** for API routing: [Slim Framework](https://www.slimframework.com/)

---

## Notes:

- The frontend and backend are both set up to run on `localhost` but on different ports (`3000` for frontend and `8000` for backend).
- The backend is still under development, with certain features (like database management) being worked on.

Let me know if you need any additional information!
