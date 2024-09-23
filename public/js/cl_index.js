// Fetches everything inside users
const server = "fetch";
const method = server === "update" ? "PATCH" : "POST";
const table = "users";
const data = {};
const change = {};

makeServerRequest(server, method, table, data, change).then((data) => {
  if (data.type === "ERROR") {
    test = confirm(
      server + " failder, " + data.msg + "! Want to see our documentation?"
    );
    if (test) {
      window.location.href = baseUrl + "/explain";
    }
    return;
  } else {
    console.log(data);
    test = confirm(server + " was a succes! Want to see our documentation?");
    if (test) {
      window.location.href = baseUrl + "/explain";
    }
  }
});
