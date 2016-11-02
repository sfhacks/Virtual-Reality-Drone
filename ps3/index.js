(function() {
    require("ps3.js");

    var arDrone  = require("ar-drone"),
        client   = arDrone.createClient(),
        angle    = 128,
        speed    = 0.7;

    var flippedL = 1;
    var flippedR = 1;

    client.config('control:altitude_max', 200000)
    client.config('control:control_vz_max', 2000)
    client.config('control:control_yaw', 6.0)
    client.config('control:euler_angle_max', 0.52)

    client.config('control:outdoor', false)
    client.config('control:flight_without_shell', false)

    console.log("Controls:")
    console.log("");
    console.log("  Triangle: Takeoff");
    console.log("  X: Land");
    console.log("");
    console.log("  Square: Initiate LED sequence");
    console.log("");
    console.log("  Left Joypad: Front/Back/Side");
    console.log("  Right Joypad: Up/Down");


    setInterval(function() {
        on("x", rdata[24]);
        on("triangle", rdata[22]);
        on("square", rdata[25]);
        on("left", {x: rdata[6], y: rdata[7]});
        on("right", {x: rdata[8], y: rdata[9]});

    }, 50);

    var flying   = false,
        hovering = true;

    function on(type, value) {
        if (type == "triangle" && value > 50) {
            if (!flying) {
                console.log("takeoff");
                flying = true;
                flippedR = false;
                flippedL = false;
                client.takeoff(function() {
                    hovering = true;
                    console.log("flying");
                });
            }
        }

        if (type == "x" && value) {
            if (flying) {
                console.log("land");
                flying   = false;
                hovering = false;
                flippedR = true;
                flippedL = true;
                client.land(function() {
                    console.log("landed");
                    client.stop();
                });
            }
        }
        if(type=="square" && value > 44) {
          console.log("Blinking");
          client.animateLeds('snakeGreenRed', 5 , 4);
        }

        if (hovering) {
            if (type == "left" && value.y <= 128) {
                client.front((128 - value.y) / angle * speed);
            } else if (type == "left" && value.y > 128) {
                client.back((value.y - 128) / angle * speed);
            }

            if (type == "left" && value.x <= 128) {
                client.left((128 - value.x) / angle * speed);
            } else if (type == "left" && value.x > 128) {
                client.right((value.x - 128) / angle * speed);
            }

            if (type == "right" && value.x <= 128) {
                client.counterClockwise((128 - value.x) / angle * speed);
            } else if (type == "right" && value.x > 128) {
                client.clockwise((value.x - 128) / angle * speed);
            }

            if (type == "right" && value.y <= 128) {
                client.up((128 - value.y) / angle * speed);
            } else if (type == "right" && value.y > 128) {
                client.down((value.y - 128) / angle * speed);
            }




        }
    }
})();
