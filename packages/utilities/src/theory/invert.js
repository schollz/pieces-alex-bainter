import transpose from './transpose';

const invert = (notes, inversion = 0) => {
  const inverted = notes.slice(0);
  let addFn = Array.prototype.push;
  let removeFn = Array.prototype.shift;
  let semitones = 12;
  if (inversion < 0) {
    addFn = Array.prototype.unshift;
    removeFn = Array.prototype.pop;
    semitones = -semitones;
  }
  for (let i = 0; i < Math.abs(inversion); i += 1) {
    console.log(`transposing ${notes[notes.length - 1]} ${semitones}`);
    addFn.call(inverted, transpose(removeFn.call(inverted), semitones));
  }
  return inverted;
};

export default invert;
