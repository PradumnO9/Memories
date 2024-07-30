# Memories

- Using MERN Stack developed an efficient app which can handle multiple posts and each post have like/dislike, comments functonility for multiple users.
- UI is simple and user friendly.

# Tech Stack

- FrontEnd
    - React, CSS
- BackEnd
    - Node, Express
- Database
    - MongoDB

# Features

- Register
- Login => email & password
- Upload Images and files => Can choose during upload using Radio button (Image || File)
- Used Redux to handle Image and File data 
- Show Posts
    - Images and Files are seperated column wise
    - Each Post have 
        - Title, Caption, Image
        - Like and Dislike functionality => Used Sockets for live update
        - Comments functionality => Used Sockets for live update
- My Profile
    - Update current user details
        - username, mobile
    - Post uploaded by user
        - Each post have
            - Update post
                - Title & Caption
            - Delete post
- All Users
    - Can see all the users who created account

# App Structure

- All Users
    - All users username

- Register
    - username, email, mobile, password => form Fields
    - Redirect to Login page

- Login
    - Login using email and password
    - Redirect to ShowImages component
    - Token => Cookies
    - userData => Local Storage

- Body
    - ShowImages
        - Images/Files * N
            - Like/Dislike
            - Comments
    - ImageUpload
        - Form to upload Images/Files
    - MyProfile
        - CurrentUser => Details, Upload Posts, Update Post
    - UsersDetails
        - All users details