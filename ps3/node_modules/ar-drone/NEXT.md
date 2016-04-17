* Undo stupid changes to master branch and push newClient into master

* Disable emergency mode

* Figure out a better way to record control (to include config commands)

* Discard / log out of order navdata

* Decide on name for Navdata data
* Parse pwm and rawMeasures again

* Rename clockSpin/clockWise

* Maybe change udpControlStream interface to accept buffers

* Do sensor data stuff

* ClientControl.config
* 'tricks' / 'leds' object
* Convert everything to functional style
* move createAtCommand one level up

* Map battery event
* Document events and properties
* Create client.sensors, client.commands streams

* Document new AR Drone libs
* Finish AR Drone Png thingy
* Delete old shit
* Document what needs to be done
* Logging !
* Build new AR Drone client

# Features

* control.flip() (POST /control/flip)

# Consistency

* client.navdata.raw -> client.navdata.udpStream
* message / command: number -> message.sequenceNumber
* Rename navdata message to navdata

# Logging

* node version
* v8 version
* get drone config
* get memory usage
* get operating systme
* raw video stream
* raw at stream
* raw navdata stream
