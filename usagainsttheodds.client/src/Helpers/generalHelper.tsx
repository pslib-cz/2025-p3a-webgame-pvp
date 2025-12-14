export const isDeepEqual = (obj1: any, obj2: any): boolean => {
  // 1. Pokud jsou to stejné reference (nebo primitivní typy jako string/number), jsou si rovny
  if (obj1 === obj2) return true;

  // 2. Pokud je jeden z nich null nebo to není objekt, nejsou si rovny
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  // 3. Získáme klíče obou objektů
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // 4. Pokud mají jiný počet klíčů, končíme
  if (keys1.length !== keys2.length) return false;

  // 5. Projdeme klíče a rekurzivně voláme isDeepEqual na hodnoty
  for (const key of keys1) {
    if (!keys2.includes(key) || !isDeepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
};