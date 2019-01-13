# Weightlift Tracker

 Weightlift tracker is a weightlift journal. As progressively overloading your weights is one of the most important aspect for fitness, this web-app helps you keep track of the weights you lift day by day. 
 
 Available at: https://weightlift-tracker.firebaseapp.com/
 
 # How to use?
 
 1. Login with Google Auth.
 2. Train and add your trainings to the app.
 3. Check every 2-3 weeks, if you have improved your weights/reps/sets.
 4. ???
 5. profit.

# How to run it localy?

* Clone the repo locally.
* Rename the `src/base.example.ts` to `src/base.ts`.
* Create https://firebase.google.com/ project.
* Go to database at the same project.
* Create a realtime database named `weightlift-tracker`. (by default it will point to `null`).
* At Auth section, activate Google.
* Go back to project overview, click the code icon, copy the content of config object.
* Paste it to `firebaseApp` at `src/base.ts`.
* run `yarn || npm install`.
* `yarn start || npm run start`.
