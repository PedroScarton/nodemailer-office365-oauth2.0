# Express Mailer with Microsoft 365 and OAuth 2.0

This repository contains a sample application demonstrating how to implement an email sending service using Express.js and Nodemailer with a MongoDB database. The main feature of the project is the detailed setup and necessary code to integrate Microsoft 365 using OAuth 2.0 for secure authentication.

The focus is on showing how developers can build the foundation of a solution that maintains access tokens updated automatically to ensure a smooth and reliable email sending experience with Microsoft's authentication infrastructure.

## [Step-by-Step Guide](https://guiapasoapaso.medium.com)

- **Nodemailer Integration**: Utilizing Nodemailer to effectively send emails through the Microsoft 365 API.
- **Persistence with MongoDB**: Instructions and code to store and refresh tokens in MongoDB, ensuring the continuity of the mail service.
- **Token Renewal Management**: Code for the automatic renewal of tokens to prevent expiration and uninterrupted mail service.
- **Code Examples**: Code samples for individual email send-outs.
- **Security Guide**: Best practices to keep credentials and access tokens secure in your application.

## Getting Started

This project is designed to be up and running quickly with minimal setup. To start using this Showcase application, follow these steps:

### Initial Setup

1. **Install Node.js**: Ensure you have Node.js installed on your machine. If you do not have it installed, download and install it from [nodejs.org](https://nodejs.org/).

2. **Clone the Repository**: Clone this repository to your local machine using `git clone` followed by the URL to this repository.

3. **Install Dependencies**: Navigate to the root directory of the project in your terminal and run `yarn install` to install all the required dependencies.

### Configuration

1. **Environment Variables**: Copy the `.env.dist` file to a new file named `.env` in the same directory. This file should contain all the necessary environment variables required for the project to run.

   ```
   cp .env.dist .env
   ```

   Open the `.env` file and fill in the details with your Microsoft 365 credentials and MongoDB URI.

2. **Run the Application**: Once the configuration is set, you can start the application by running the following command in your terminal:

   ```
   yarn dev
   ```

   This command will start the development server. Any changes you make to the source code will be automatically reloaded.

### Testing API Endpoints with Postman

The repository includes a `api-doc` file that contains the API configuration for Postman. To import this configuration into Postman, follow these steps:

1. **Open Postman**: Launch the Postman application.

2. **Import API Configuration**: Click on `Import` at the top left corner of the Postman window.

3. **Choose File**: Select the `api-doc` file from the repository and confirm the import. This will set up all the routes in Postman for you to test the API.

By following these steps, you should have a fully configured environment to develop and test your email service with Microsoft 365. Remember to keep your `.env` variables secure and never commit sensitive data to your repository.


## Documentation and Resources

For a deeper understanding of the individual components and their roles in this application, please consult the official Microsoft 365 documentation:

- [Authenticate an IMAP, POP, or SMTP connection using OAuth](https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth)
- [Get access on behalf of a user](https://learn.microsoft.com/en-us/graph/auth-v2-user?tabs=http)
- [OAuth 2.0 in Microsoft 365](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)

## Contributions

Contributions to this project are welcome. If you find a bug or have suggestions for improving the implementation, please open an 'issue' or submit a 'pull request'.

## License

This project is under the [MIT License](LICENSE). Feel free to use, study, modify, and distribute it in accordance with the license.
