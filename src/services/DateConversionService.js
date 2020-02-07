const getDays = data => {
  var result = [];
  var prev = null;
  var result_index = -1;

  for (var index in data) {
    if (data[index].dt_txt.slice(0, 10) !== prev) {
      result_index += 1;
      result.push([data[index]]);
      prev = data[index].dt_txt.slice(0, 10);
    } else {
      result[result_index].push(data[index]);
    }
  }
  console.log(result)
  return result;
};
export default getDays;
