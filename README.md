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

You will need Node.js installed on your machine, as well as access to a Microsoft 365 account as a tenant administrator and a MongoDB instance.

## Documentation and Resources

For a deeper understanding of the individual components and their roles in this application, please consult the official Microsoft 365 documentation:

- [Authenticate an IMAP, POP, or SMTP connection using OAuth](https://learn.microsoft.com/en-us/exchange/client-developer/legacy-protocols/how-to-authenticate-an-imap-pop-smtp-application-by-using-oauth)
- [Get access on behalf of a user](https://learn.microsoft.com/en-us/graph/auth-v2-user?tabs=http)
- [OAuth 2.0 in Microsoft 365](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow)

## Contributions

Contributions to this project are welcome. If you find a bug or have suggestions for improving the implementation, please open an 'issue' or submit a 'pull request'.

## License

This project is under the [MIT License](LICENSE). Feel free to use, study, modify, and distribute it in accordance with the license.
