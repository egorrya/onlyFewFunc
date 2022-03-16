const ids = document.querySelector("#ids");
const howMany = document.querySelector("#howMany");

function result() {
  let idsArray = ids.value.split("\n"),
    hash = {},
    result = idsArray.filter(
      (v) => (hash[v] = (hash[v] || 0) + 1) === Number(howMany.value)
    );

  document.querySelector("#output").innerHTML = result.join("\n");
}

ids.addEventListener("change", () => {
  result();
});

howMany.addEventListener("change", () => {
  result();
});
