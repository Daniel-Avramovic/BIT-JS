
  const $movieList = document.querySelector("#movieList");
  const $movieTitle = document.querySelector("#name");
  const $movieLength = document.querySelector("#length");
  const $movieGenre = document.querySelector("#genre");
  const $errorDisplay = document.querySelector("#error");
  const $programDate = document.querySelector("#date");
  const $programList = document.querySelector("#programList");
  const $movieListToAdd = document.querySelector("#listToAdd");
  const $addProgarm = document.querySelector("#listToAddProgram");
  const $addMovie = document.querySelector("#addMovieToProgram");
  const $errorDisplayProgram = document.querySelector("#errorProgram");
  const resetForm = () => {
    $movieTitle.value = "";
    $movieLength.value = "";
    $programDate.value = "";
  }
  const getForm = () => {
    return {
      title: $movieTitle.value,
      genre: $movieGenre.value,
      length: parseInt($movieLength.value),
    };
  }
  const getFormForAddMovie = () => {
    return {
      movie: $movieListToAdd.value,
      program: $addProgarm.value,
    };
  };
  const getProgramForm = () => {
    return{
      date: $programDate.value
    }
  }
  const validateFormData = (data) => {
    Object.keys(data).forEach(function (key) {
      if (!data[key]) {
        var capitalizedKey =
          key.charAt(0).toUpperCase() + key.substring(1, key.length);
       throw new Error(capitalizedKey + " is requierd!");
      }
    });
  }
  const printError = (p, message) => {
    p.textContent = message;
  }
  const resetError = (p) => {
    p.textContent = "";
  }
  const printCreatedMovieList = (movies) => {
    resetError($errorDisplay);
    $movieList.textContent = "";
    movies.forEach((movie) => {
      let li = document.createElement("li");
      li.textContent = movie.getData;
      $movieList.appendChild(li);
    });
  }
  const showOptionMovies = (movies) => {
    $movieListToAdd.textContent = "";
    movies.forEach((movie) => {
      var option = document.createElement("option");
      option.value = movie.index;
      option.innerText = movie.getData;
      $movieListToAdd.appendChild(option);
    });
  }
  const printCreatedProgramList = (programs) => {
    $programList.textContent = "";
    programs.forEach((program) => {
      var li = document.createElement("li");
      li.textContent = program.getData;
      $programList.appendChild(li);
    });
  };
  const showOptionProgram = (programs) => {
    $addProgarm.textContent = "";
    programs.forEach((program) => {
      var option = document.createElement("option");
      option.value = program.index;
      option.innerText = program.date;
      $addProgarm.appendChild(option);
    });
  };
  export {
    $errorDisplay,
    $programDate,
    $addMovie,
    $errorDisplayProgram,
    getProgramForm,
    resetForm,
    getForm,
    printError,
    resetError,
    validateFormData,
    printCreatedMovieList,
    showOptionMovies,
    printCreatedProgramList,
    showOptionProgram,
    getFormForAddMovie,
  };

