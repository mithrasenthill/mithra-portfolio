
console.log("Welcome to Mithra's Portfolio!");

document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function () {
    console.log("Navigating to: " + link.textContent);
  });
});
