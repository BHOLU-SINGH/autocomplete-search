let searchTerms = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "React",
  "Angular",
  "Node.js",
  "Django",
  "Ruby on Rails",
  "UX design",
  "UI design",
  "FreeProjects1",
  "Get free source code",
  "Best website to download free source code",
  "JavaScript Autocomplete Search",
  "Autocomplete Search JavaScript",
  "Autocomplete Search",
  "How to design a website",
  "Web design tutorials",
  "Web design portfolio",
  "Web design tools",
  "Web design courses",
  "How to build a website",
  "Web development tutorials",
  "Web development frameworks",
  "Web development libraries",
  "Web development tools",
  "How to build a website from scratch?",
  "What are the different types of web development?",
  "What are the most popular web development frameworks?",
  "What are the best practices for web development?",
  "How to secure a web application?",
  "How to optimize a web application for search engines?",
  "How to test a web application?",
  "How to deploy a web application?",
  "How to maintain a web application?",
  "How to learn web development?",
  "What are the best web development resources?",
  "How to get started with web development?",
  "What are the challenges of being a web developer?",
];

const resultBx = document.querySelector(".result-box");
const inputBx = document.getElementById("search-term");
const search = document.querySelector(".fa-solid");

inputBx.onkeyup = function () {
  if (inputBx.value.length > 0) {
    if (!resultBx.classList.contains("active")) {
      resultBx.classList.add("active");
    }
  } else if (inputBx.value.length <= 0) {
    resultBx.classList.remove("active");
  }

  let result = [];
  let input = inputBx.value;

  if (input.length) {
    result = searchTerms.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  displayData(result);

  if (!result.length) {
    // resultBx.innerHTML = '';
    resultBx.classList.remove("active");
  }
};

function displayData(result) {
  const content = result.map((list) => {
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resultBx.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBx.value = list.innerHTML;
  //   resultBx.innerHTML = "";
  resultBx.classList.remove("active");
}

search.onclick = function () {
  if (!inputBx.value == "") {
    window.location = "https://www.google.com/search?q=" + inputBx.value;
  }
};
