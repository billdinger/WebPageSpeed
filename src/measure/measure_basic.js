// eslint-disable-next-line no-unused-vars
const registerPerformance = function(markName) {
  const endName = `END_${markName}`;
  const measureName = `MEASURE_${markName}`;
  window.performance.mark(markName);

  return () => {
    window.performance.mark(endName);
    window.performance.measure(measureName, markName, endName);
    console.log(window.performance.getEntriesByName(measureName, 'measure'));
  };
};
