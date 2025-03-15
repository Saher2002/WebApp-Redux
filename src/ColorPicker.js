import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setColor } from './redux/colorSlice';
import './ColorPicker.css';

const ColorPicker = () => {
  const color = useSelector((state) => state.color.color);
  const dispatch = useDispatch();

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    dispatch(setColor(newColor));
  };

  const copyColorCode = () => {
    navigator.clipboard.writeText(color)
      .then(() => alert(`Copied: ${color}`))
      .catch((err) => console.error('Failed to copy:', err));
  };

  React.useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  
  return (
    <div className="container">
      <h1>COLOR PICKER APP</h1>
      <h2>Get your colors!</h2>
      <input type="color" value={color} onChange={handleColorChange} />
      <div className="color_box" style={{ backgroundColor: color }}></div>
      <p>{color}</p>
      <button onClick={copyColorCode}>Copy Color</button>
    </div>
  );
};

export default ColorPicker;
