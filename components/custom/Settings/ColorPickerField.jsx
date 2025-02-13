import { Input } from '@/components/ui/input';
import React from 'react'

function ColorPickerField({ label, value, onHandleStyleChange }) {
  return (
    <div className='flex items-center'>
      <label className='mr-2'>{label}</label>
      <input 
        type="color" 
        value={value} 
        onChange={(e) => onHandleStyleChange(e.target.value)} 
      />
    </div>
  );
}

export default ColorPickerField;
