import { useState } from 'react';

export default () => {
  let [width, setWidth] = useState(100);
  let [height, setHeight] = useState(100);
  let [border, setBorder] = useState(0);
  let [rotation, setRotation] = useState(0);
  let [color, setColor] = useState("#000000");
  let [opacity, setOpacity] = useState(1);

  return (
    <div className="text-center">
      <p>
        Color: {color} <br />
        Border: {border}px <br />
        Rotation: {rotation}° <br />
        Opacity: {opacity} <br />
        Width: {width}px <br />
        Height: {height}px <br />
      </p>

      <div className="grid grid-cols-3 max-w-[800px] mx-auto mt-32 gap-5">


        <input
          type="color"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          className="w-full border border-black rounded-lg px-2 py-1"
        />


        <input
          className="w-full border border-black rounded-lg px-2 py-1"
          type="number"
          placeholder="Width"
          onChange={(e) => setWidth(Number(e.target.value))}
          value={width}
        />


        <input
          className="w-full border border-black rounded-lg px-2 py-1"
          type="number"
          placeholder="Height"
          onChange={(e) => setHeight(Number(e.target.value))}
          value={height}
        />


        <input
          className="w-full border border-black rounded-lg px-2 py-1"
          type="range"
          min={0}
          max={360}
          step={1}
          placeholder="Rotation"
          onChange={(e) => setRotation(Number(e.target.value))}
          value={rotation}
        />


        <input
          className="w-full border border-black rounded-lg px-2 py-1"
          type="number"
          placeholder="Border Width"
          onChange={(e) => setBorder(Number(e.target.value))}
          value={border}
        />


        <input
          className="w-full border border-black rounded-lg px-2 py-1"
          type="range"
          min={0}
          max={1}
          step={0.1}
          placeholder="Opacity"
          onChange={(e) => setOpacity(Number(e.target.value))}
          value={opacity}
        />
      </div>

      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: color,
          border: `${border}px solid #000`,
          transform: `rotate(${rotation}deg)`,
          opacity: opacity,
          transition: 'all 0.3s ease'
        }}
        className="mx-auto mt-8"
      ></div>
    </div>
  );
}
