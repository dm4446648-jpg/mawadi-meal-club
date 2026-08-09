# Marwadi Meal Club

Full stack website for a tiffin service business.

## Project structure

- `client` - React + Vite frontend
- `server` - Node.js + Express backend

## Local setup

1. Open terminal in `d:\MARAWADI MEAL CLUB`.
2. Install dependencies:
   - `cd client && npm install`
   - `cd ../server && npm install`
3. Run backend:
   - `cd server && npm run dev`
4. Run frontend:
   - `cd ../client && npm run dev`

## Environment variables

Create `.env` in `client` with:

```
VITE_API_URL=http://localhost:5000/api/bookings
```

## Deployment notes

### Frontend (Vercel)

Option 1: Deploy from root monorepo
1. Push the project to GitHub.
2. In Vercel, import the repository root.
3. Use the root build command:
   - `npm run build`
4. Set the output directory to:
   - `client/dist`
5. Add an environment variable:
   - `VITE_API_URL=https://your-backend-url/api/bookings`

Option 2: Deploy directly from `client`
1. Import the `client` folder in Vercel.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set `VITE_API_URL` the same way.

### Backend (Railway)

1. Push the project to GitHub if it is not already in a repo.
2. In Railway, create a new project and choose GitHub deployment.
3. Select the repository and set the root directory to `server`.
4. Railway should detect `package.json`. If it asks for a start command, use:
   - `npm start`
5. Railway automatically provides the `PORT` environment variable.
6. After deployment, copy the Railway service URL and use it in the frontend `VITE_API_URL`.

Example frontend URL setting:

```
VITE_API_URL=https://your-railway-service.up.railway.app/api/bookings
```

### Frontend (Vercel)

1. Push the project to GitHub.
2. In Vercel, import the `client` folder as a new project.
3. Set the build command to `npm run build` and the output directory to `dist`.
4. Add an environment variable:
   - `VITE_API_URL=https://your-railway-service.up.railway.app/api/bookings`

### Notes

- Deploy the backend from `server` on Railway.
- Deploy the frontend from `client` on Vercel.
- Use the Railway service URL for `VITE_API_URL` in the frontend.
