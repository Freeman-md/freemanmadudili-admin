# Freeman Madudili Admin App

## Introduction

This is the admin application repository for managing content for Freeman Madudili's portfolio. It is built with Strapi.

## Getting Started

### Prerequisites

- Node.js (v20 or higher)

- npm (v9 or higher)

### Installation

1\. **Clone the repository**

 ```bash

 git clone https://github.com/Freeman-md/freemanmadudili-admin.git

 cd freemanmadudili-admin

 ```

2\. **Install dependencies**

 ```bash

 npm install

 ```

3\. **Copy environment variables**

 ```bash

 cp .env.example .env

 ```

4\. **Update environment variables**

   - Open the `.env` file and set all necessary variables. Ensure they are updated with appropriate values. Most of them require random strings.

5\. **Run the admin server**

 ```bash

 npm run develop

 ```

## Initial Setup and Permissions

1\. **Create Admin Account**

   - Navigate to the admin panel (typically running on `http://localhost:1337/admin`)

   - Create an admin account

2\. **Set Permissions**

   - Go to **Settings** > **Users & Permissions Plugin** > **Roles**

   - Select the **Public** role

   - Enable the "Find" permission for `App-Config` and `MetaData`

   - Similarly, enable "Find" and "FindOne" permissions for other resources without enabling create, delete, or update options

## Deployment

1\. **Build the admin panel**

 ```bash

 npm run build

 ```

2\. **Start the admin panel**

 ```bash

 npm run start

 ```

3\. **Deploy to a hosting service (e.g., Render)**

   - Follow the hosting service's instructions to deploy your Strapi application.

   - Make sure to set the environment variables in your hosting environment.

## Contributing

Contributions are welcomed!
