import pastel from './pastel';

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

export { getColorFromKey, pastel };
