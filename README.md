# example-nextjs-app

This is an example NextJS app with NextAuth for authentication w/ Prisma.

## Built in pages & routes

``/`` Shows login button when not signed in/displays user profile info.
``/dashboard`` Protected page that redirects to /signin if not authenticated.
``/signin`` Simple signin page.
``/api/protected`` Example protected API route. Returns 401 if not authenticated/shows user info.

## Setup

```bash
git clone https://github.com/linuskang/example-nextjs-app
cd example-nextjs-app
npm install
cp .env.example .env # edit the values to your own

sudo mysql
create database your_db_name
CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'your_database_user_password';
GRANT ALL PRIVILEGES ON *.* TO 'testuser'@'localhost';
FLUSH PRIVILEGES;
exit;

npx prisma migrate deploy
npx prisma generate

npm run dev # run the dev server
```