(function() {
    require("ps3.js");

    var arDrone  = require("ar-drone"),
        client   = arDrone.createClient(),
        angle    = 128,
        speed    = 0.15;

    var flippedL = false;
    var flippedR = false;

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
    console.log("  Circle: Flip Right");
    console.log("  Square: Flip Left");
    console.log("");
    console.log("  Left Joypad: Front/Back/Side");
    console.log("  Right Joypad: Up/Down");


    setInterval(function() {
        on("x", rdata[24]);
        on("circle", rdata[23]);
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

            if(type=="square" && value > 100 && !flippedL) {
              console.log("Flip Left");
              client.animate("flipLeft", 1500);
              flippedL = true;
            }

            if(type=="circle" && value > 100 && !flippedR) {
              console.log("Flip Right");
              client.animate("flipRight", 1500);
              flippedR = true;
            }
        }
    }
})();
