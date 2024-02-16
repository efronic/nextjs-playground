This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Using Validbot and Check-Node-Version

This project uses two important packages to ensure code quality and compatibility: validbot and check-node-version.

## validbot

The core function of Valibot is to create a schema that describes a structured data set. A schema can be compared to a type definition in TypeScript. The big difference is that TypeScript types are "not executed" and are more or less a DX feature. A schema on the other hand, apart from the inferred type definition, can also be executed at runtime to guarantee type safety of unknown data.

```bash
import { email, minLength, object, Output, parse, string } from 'valibot'; // 1.54 kB

// Create login schema with email and password
const LoginSchema = object({
  email: string([email()]),
  password: string([minLength(8)]),
});

// Infer output TypeScript type of login schema
type LoginData = Output<typeof LoginSchema>; // { email: string; password: string }

// Throws error for `email` and `password`
parse(LoginSchema, { email: '', password: '' });

// Returns data as { email: string; password: string }
parse(LoginSchema, { email: 'jane@example.com', password: '12345678' });
```
## check-node-version
`Check-Node-Version` is a package that helps to ensure your application is running on a compatible version of Node.js. It checks your current Node.js version against a specified range and throws an error if your version is not compatible. This helps to prevent issues that can arise from using features that are not available in your version of Node.js. To use check-node-version, you can run the following command:
```bash
npm install check-node-version
```
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.