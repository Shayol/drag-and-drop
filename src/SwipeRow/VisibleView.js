import React, { useState } from "react";
import "./VisibleView.css";

function VisibleView({ children, swipable }) {
  const [initialPos, setInitialPos] = useState(null);
  const [prevPos, setPrevPos] = useState(null);
  const [translate, setTranslate] = useState(0);
  const threshold = 2;

  function onSwipeStart(event) {
    event = event.changedTouches ? event.changedTouches[0] : event;

    setInitialPos({ x: event.clientX, y: event.clientY });
  }

  function onSwipeMove(event) {
    if (event.changedTouches) {
      event = event.changedTouches[0];
      document.addEventListener("touchend", onSwipeEnd);
    } else {
      document.addEventListener("mouseup", onSwipeEnd);
    }

    if (!initialPos) {
      return;
    }
    const deltaX = prevPos
      ? prevPos.x - event.clientX
      : initialPos.x - event.clientX;
    let deltaY = Math.abs(
      prevPos ? prevPos.y - event.clientY : initialPos.y - event.clientY
    );
    deltaY = deltaY ? deltaY : 1;
    const s = Math.abs(deltaX / deltaY);

    if (s > threshold) {
      if (deltaX > 10) {
        setTranslate("-25");
        setPrevPos({ x: event.clientX, y: event.clientY });
      } else if (deltaX < -10) {
        setTranslate("0");
        setPrevPos({ x: event.clientX, y: event.clientY });
      }
    }
  }

  function onSwipeEnd(event) {
    setInitialPos(null);
    setPrevPos(null);
    document.removeEventListener("touchend", onSwipeEnd);
    document.removeEventListener("mouseup", onSwipeEnd);
  }
  return (
    <div
      style={{ transform: `translateX(${translate}%)` }}
      onMouseDown={swipable ? onSwipeStart : undefined}
      onTouchStart={swipable ? onSwipeStart : undefined}
      onMouseMove={swipable ? onSwipeMove : undefined}
      onTouchMove={swipable ? onSwipeMove : undefined}
      className="VisibleView"
    >
      {children}
    </div>
  );
}

export default VisibleView;
