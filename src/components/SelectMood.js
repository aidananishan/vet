import { useContext } from 'react';
import { AppContext } from '../context';
import { moods } from '../initialData';

const SelectMood = () => {
  const { setCurrentMode } = useContext(AppContext);
  return (
    <select onChange={(e) => setCurrentMode(e.target.value)}>
      <option value=""></option>
      {moods.map((m) => (
        <option key={m} value={m}>
          {m}
        </option>
      ))}
    </select>
  );
};

export default SelectMood;
