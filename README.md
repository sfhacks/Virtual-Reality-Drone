# VR-Drone-Project

Virtual Reality with the AR Drone 2.0

The goal of this project is to broadcast an AR Drone 2.0's video feed onto a Google Cardboard to create an "immersive experience" for the user.

### Included Components

  * App -- The neccessary components for getting drone feed into Google Cardboard Format

  * Video -- The neccessary components to broadcast the drone's video feed onto the computer's localhost

  * PS3 -- The neccessary components to control the drone with a PS3 dualshock controller

### Neccessary Hardware/Software

  * "Duet" iOS and Mac OSX App
  * A.R. Drone 2.0
  * PS3 dualshock wireless controller
  * Google Cardboard VR Headset
  * iPhone + lightning cable (to go inside the Google Cardboard)
  * MacBookPro

### Usage

  * Download all source files
  * Connect to the drone's wifi network
  * Navigate into video file and commence with npm start (make sure to do npm install first!)
  * Go to desired browser and access your localhost
  * Make sure your video feed is showing up
  * Go back to the terminal and type ifconfig en0 to get your ip address
  * Navigate to the xcode app and replace the ip address provided with the yours
  * Start the Xcode app and the video feed should appear with Google Cardboard format
  * Go back to the terminal, navigate into the ps3 file
  * Connect the ps3 to your computer's bluetooth
  * Type 'npm start' in the terminal
  * Connect your iPhone to your Mac using the lighning cable and make sure it mirrors using the "Duet" app
  * Fire up the Xcode simulator and zoom in so its full screen on your computer
  * On the iPhone, the video from the drone should appear to be full screen and in Google Cardboard Format (it is mirroring the laptop)
  * Place the iPhone into the Google Cardboard and wear it
  * Press the Triangle on the ps3 controller and your drone should take off
  * You will now be "immersed" in the world of the drone!


Made @ MenloHacks 2016!!!
