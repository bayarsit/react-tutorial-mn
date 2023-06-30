import { useEffect, useState } from "react";

export const Mario = (props) => {
  const constSpeed = 0.005;
  const { scene } = props;
  const [direction, setDirection] = useState("right");
  const [movement, setMovement] = useState("mario_standing");
  let [x, setX] = useState(scene.width / 2); //  centering
  let [y, setY] = useState(scene.floor); // staying on the floor
  const [isWaiting, setIsWaiting] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  let [walkSpeed, setWalkSpeed] = useState(0.05);
  const [scale, setScale] = useState(0.25);
  let [counter, setCounter] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  let [jumpVelocity, setJumpVelocity] = useState(0);
  let [jumpGravity, setJumpGravity] = useState(0);

  let constJumpVelocity = 0.34;
  let constGravity = 0.0002;

  function getHeight(imgName) {
    let origHeight = 500;
    if (imgName == "mario_punch") {
      origHeight = 588;
    }

    return origHeight * scale;
  }

  function getDiffY(imgName) {
    let diffXY = { x: 0, y: 0 };
    if (imgName == "mario_punch") {
      diffXY = { x: -350, y: -80 };
    }

    diffXY = { x: diffXY.x * scale, y: diffXY.y * scale };

    return diffXY;
  }

  function move() {
    //  resetting walkSpeed
    if (!isMoving && !isJumping) {
      walkSpeed = constSpeed;
    }

    if (isMoving) {
      console.log("moving now");

      // defining direction
      let dir = -1;
      if (direction == "right") {
        dir = 1;
      }

      //  moving to direction within speed
      if (walkSpeed < constSpeed * 3) {
        walkSpeed *= 1.05;
      }

      x += walkSpeed * dir;

      //  stay inside boundary
      if (x > scene.width - getHeight() / 2) {
        x = scene.width - getHeight() / 2;
      }
      if (x < 0) {
        x = 0;
      }
      setWalkSpeed(walkSpeed);
      setMovement("mario_walking");
    }

    // Check if the player is jumping
    if (isJumping) {
      // Update vertical position
      y -= jumpVelocity;
      jumpVelocity -= jumpGravity;
      setMovement("mario_jumping");

      // Check if the player has landed
      if (y >= scene.floor) {
        y = scene.floor;

        setIsJumping(false);
        jumpVelocity = 0;
        setMovement("mario_standing");
      }

      setJumpVelocity(jumpVelocity);
      setJumpGravity(jumpGravity);
      //   when jumping change movement
    }

    console.log(
      "y: " + y + "velo: " + jumpVelocity + ", gravity: " + jumpGravity
    );

    setX(x);
    setY(y);
  }

  const _onKeyDown = (event) => {
    // do nothing while pending
    if (isWaiting) {
      return;
    }

    // changin direction
    if (event.code == "ArrowRight") {
      setDirection("right");
      setMovement("mario_walking");
      //   starting to move
      setIsMoving(true);
    }
    if (event.code == "ArrowLeft") {
      setDirection("left");
      setMovement("mario_walking");
      //   starting to move
      setIsMoving(true);
    }
    // sitting
    if (event.code == "ArrowDown") {
      setMovement("mario_sit");
    }

    console.log("keydown: ", event);
    console.log(isWaiting, isMoving, x);
  };

  const _onKeyUp = (event) => {
    // do nothing while pending
    if (isWaiting) {
      return;
    }

    // changin direction
    if (event.key == "ArrowRight") {
      setMovement("mario_standing");
      //   stopping move
      setIsMoving(false);
    }
    if (event.key == "ArrowLeft") {
      setMovement("mario_standing");
      //   stopping move
      setIsMoving(false);
    }
    // punching
    if (event.code == "KeyZ") {
      setMovement("mario_punch");
      // lock keys temporary
      setIsWaiting(true);
      // unlocking after 2 seconds - after animation ends
      setTimeout(() => {
        setMovement("mario_standing");
        setIsWaiting(false);
      }, 2000);
    }
    // changin sitting to standing
    if (event.key == "ArrowDown") {
      setMovement("mario_standing");
    }
    // jumping
    if (event.code == "Space") {
      setIsJumping(true);
      // reseting jump velocity
      setJumpVelocity(constJumpVelocity);
      setJumpGravity(constGravity);
      document.getElementById("marioJump").play();
    }
  };

  //   hook for movement
  useEffect(() => {
    if (isMoving || isJumping) {
      move();
    }

    return () => {
      // Cleanup function
      // Code to run when the component unmounts or when the userName prop changes again
    };
  }, [counter, isMoving, isJumping, x, y, jumpGravity, jumpVelocity]); //  to check isWaiting, should listen every update

  useEffect(() => {
    // binding onkey down to main page
    document.onkeydown = _onKeyDown;
    document.onkeyup = _onKeyUp;

    return () => {
      // Cleanup function
      // Code to run when the component unmounts or when the userName prop changes again
    };
  }, [isWaiting, isMoving, walkSpeed]); //  to check isWaiting, should listen every update

  return (
    <div
      className="no-border player-mario"
      style={{
        left: x + getDiffY(movement).x,
        top: y + getDiffY(movement).y - getHeight(),
      }}
    >
      {/* mario image */}
      <img
        height={getHeight(movement)}
        src={`/images/animated/${movement}_${direction}.gif`}
      />
      {/* mario sound */}
      <audio id="marioJump">
        <source src="/sounds/jump.wav" type="audio/wav" />
      </audio>
      <audio id="marioPunch">
        <source src="/sounds/shrink.wav" type="audio/wav" />
      </audio>
    </div>
  );
};
