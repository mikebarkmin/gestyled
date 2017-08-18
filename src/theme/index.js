import pastel from './pastel';
import dark from './dark';

const getColorFromKey = (theme, key) => {
  if (theme != undefined) {
    if (key in theme.colors) {
      return theme.colors[key];
    }
  }
  if (key in pastel.colors) {
    return pastel.colors[key];
  }
  return key;
};

export { getColorFromKey, pastel, dark };
