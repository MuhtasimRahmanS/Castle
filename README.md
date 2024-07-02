# Castel

Welcome to Castel! Castel is a residential property website where users can find their ideal home. Users can browse through a wide range of residential properties, and login securely using Firebase Authentication.
Live Link: https://castle-residential.netlify.app/
## Features

- **Browse Residential Properties**: Users can search and filter properties based on various criteria.
- **Property Details**: Detailed information about each property, including images, price, location, and amenities.
- **User Authentication**: Secure user login and registration using Firebase Authentication.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: Node.js, Express.js
- **Database**: Firestore (Firebase)
- **Authentication**: Firebase Authentication
- **Styling**: Tailwind CSS

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/castel.git
    cd castel
    ```

2. **Install dependencies**:
    ```bash
    # For backend
    cd backend
    npm install

    # For frontend
    cd ../frontend
    npm install
    ```

3. **Set up Firebase**:
    - Create a new project on the [Firebase Console](https://console.firebase.google.com/).
    - Enable Firestore and Authentication (Email/Password).
    - Get your Firebase configuration details and add them to the project.

4. **Set up environment variables**:
    Create a `.env` file in the `frontend` directory and add the following variables:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    ```

5. **Start the development server**:
    ```bash
    # For backend
    cd backend
    npm start

    # For frontend
    cd ../frontend
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

### Browsing Properties

1. Navigate to the homepage.
2. Use the search bar and filters to find properties that match your criteria.
3. Click on a property to view detailed information.

### User Authentication

1. Click on the "Login" button in the top right corner.
2. Sign up or log in using your email and password.
3. Once logged in, you can save your favorite properties and manage your profile.

## Contributing

We welcome contributions to the project! Here are some ways you can contribute:

- Report bugs and issues
- Suggest new features
- Submit pull requests with improvements

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or need further assistance, feel free to reach out to us at [email@example.com](mailto:email@example.com).

---

Thank you for using Castel! We hope you find your dream home.

