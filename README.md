# Wanderlust

Wanderlust is a full-stack web application designed to help users explore and list various travel destinations. The application allows users to create, edit, and delete travel destination listings, leave reviews, and view locations on an interactive map.

## Features

- **User Authentication**: Sign up, log in, and manage user profiles.
- **Listings**: Create, edit, and delete travel destination listings with details such as images, descriptions, prices, and locations.
- **Reviews**: Leave reviews and ratings for each listing.
- **Responsive Design**: Seamless experience across different devices.
- **Interactive Map**: View the location of each listing on an embedded map.
- **Social Media Integration**: Links to social media profiles in the footer.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Bootstrap, EJS (Embedded JavaScript) for templating.
- **Backend**: Node.js, Express.js for server-side logic.
- **Database**: MongoDB for data storage, with Mongoose as the ODM (Object Data Modeling) library.
- **Authentication**: Passport.js for user authentication.
- **File Uploads**: Multer for handling file uploads.
- **Environment Variables**: dotenv for managing environment variables.

## Project Structure

- **Models**: Defines the data schema for users and listings.
- **Views**: EJS templates for rendering the frontend.
- **Controllers**: Handles the business logic for different routes.
- **Routes**: Defines the application endpoints and their corresponding controllers.
- **Public**: Contains static assets like CSS and JavaScript files.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/wanderlust.git
    cd wanderlust
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a [.env](http://_vscodecontentref_/0) file in the root of your project and add the following:
    ```env
    ATLASDB_URL=<your_mongodb_connection_string>
    SESSION_SECRET=<your_session_secret>
    ```

4. Start the application:
    ```sh
    npm start
    ```

5. Access the application in your web browser at `http://localhost:3000`.

## Usage

- **Home Page**: Redirects to the listings page.
- **Listings Page**: View all travel destination listings.
- **Create Listing**: Add a new travel destination listing (requires login).
- **Edit Listing**: Edit an existing listing (requires login and ownership).
- **Delete Listing**: Delete an existing listing (requires login and ownership).
- **Leave a Review**: Leave a review and rating for a listing (requires login).

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any questions or inquiries, please contact Sanket Sonkusare at [sanketsonkusare@gmail.com](mailto:sanketsonkusare@gmail.com).

---

&copy; 2023 Wanderlust. All rights reserved.