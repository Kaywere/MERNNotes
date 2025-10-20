<div align="center">
<img src="https://image.soss.site/api/assets/326dfa21-389d-4932-a1f0-6873d21bbec1/thumbnail?size=preview&key=EuY1LeE5IJUPVdMHKxj7x7HjqqXBWQHYoBYyR8aQAcrZyFK5DqtEtxt8HlkSHtdAbq0&c=0fYFDIIIWJh1eHqNh4hJdp98%2BA%3D%3D" alt="Notes app" width="400" />
</div>


# [MERN-Notes](https://notes.soss.site/) 

MERN-Notes is a simple Project based on the foundation of MERN stack.

## The Goal of the project
The goal of this project is to strengthen my foundation in MERN stack with minimal to no interaction from AI (only debugging and learning some concept), By writing the code myself and facing problems head-on gave me more experience in problem-solving and allowed me to see the bigger picture of what a full-stack developer is.

## Tech Stack
- **Backend**  
  - [Node.js](https://nodejs.org/)  
  - [Express](https://expressjs.com/)  
  - [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)  
  - [Upstash Redis](https://upstash.com/) & [upstash/ratelimit](https://github.com/upstash/ratelimit) for rate limiting  
  - [dotenv](https://github.com/motdotla/dotenv) for environment variables  

- **Frontend**  
  - [React 19](https://reactjs.org/)  
  - [Vite 7](https://vitejs.dev/)  
  - [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)  
  - [Axios](https://axios-http.com/) for HTTP requests  
  - [react-hot-toast](https://github.com/timolins/react-hot-toast) for notifications  

## Website Architecture
* **Backend**
  - **Express.js** :The server.js is written in clean code using a REST API architecture with distinct routes and controllers. Middleware is used for handling CORS and API rate limiting via Upstash.
  - **MongoDB** :Simple schemas and models are used to structure the data. Redis is implemented for caching database data to improve performance.

* **Frontend**
  - **React** :Designed as a Single Page Application (SPA) with reusable components, following the DRY (Don't Repeat Yourself) standard. State is managed in the main pages and passed down to components via props.
  - **Vite-react** :Running Vite for more lightweight application
  - **UI Libraries** :Implemented DaisyUI, lucide-react, and react-hot-toast to enhance the user interface and experience.
  - **Theme Switcher** (BETA*) :Used React-context to change multiple themes provided by DaisyUI library

## Current Deployment
* Homelab server (linux truenas Scale)
* Docker images
* Nginx proxy mangaer
* Cloudflare free tier proxy

[Notes Website](https://notes.soss.site/)
## Installation

* Clone the Repository
```bash
git clone https://github.com/Kaywere/MERNNotes.git
cd MERNNotes
```

* Create the .env File
```bash
# .env

# --- Variable for the Frontend Build ---
# The full URL for your backend API
VITE_API_URL=http://localhost:5011/api

# --- Variables for the Backend Environment ---
# Your MongoDB connection string
MONGO_URI=your_mongodb_connection_string_goes_here

# Your Upstash Redis URL
UPSTASH_REDIS_REST_URL=your_redis_url_goes_here

# Your Upstash Redis Token
UPSTASH_REDIS_REST_TOKEN=your_redis_token_goes_here
```

 * use Docker Compose to build the images for the frontend and backend
```bash
docker-compose up --build -d
```

* Access the Application

Frontend :http://localhost:8050 (you can change the ports in Docker-compose.yml)

backend :the backend is accessible at http://localhost:5011,but make sure to include it in .env file


## Contributing

Feel free to contribute in anyway shape or form, I'm open to all feedback and suggestion 🫡

## License

[MIT](https://choosealicense.com/licenses/mit/)