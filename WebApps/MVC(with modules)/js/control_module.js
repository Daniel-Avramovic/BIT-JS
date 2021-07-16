import * as data from './data_module_class.js';
import * as view from './view_module.js';
document.addEventListener('DOMContentLoaded', function(){
  init()
});

  function setUpEventListeners() {
    const $createMovie = document.querySelector("#createMovie");
    const $createProgram = document.querySelector("#createProgram");
    $createProgram.addEventListener("click", onCreateProgram);
    $createMovie.addEventListener("click", onMovieCreate);
    view.$addMovie.addEventListener("click", addMov);
  }

  const onMovieCreate = function () {
    view.resetError(view.$errorDisplay);
    const getForm = view.getForm();
    try {
      view.validateFormData(getForm);
    } catch (error) {
      view.printError(view.$errorDisplay, error.message);
      return;
    }
    data.createMovie(getForm);
    view.printCreatedMovieList(data.getPrintData());
    view.showOptionMovies(data.getPrintData());
    view.resetForm();
  };

  const onCreateProgram = function () {
    view.resetError(view.$errorDisplayProgram);
    const dateValue = view.getProgramForm().date;
    try {
      view.validateFormData(view.getProgramForm());
    } catch (error) {
      view.printError(view.$errorDisplayProgram, error.message);
      return;
    }
    data.createProgram(new Date(dateValue));
    view.printCreatedProgramList(data.getPrintDataProgram());
    view.showOptionProgram(data.getPrintDataProgram());
    view.resetForm();
  };

  const addMov = function () {
    view.resetError(view.$errorDisplayProgram);
    const getForm = view.getFormForAddMovie();
    try {
      view.validateFormData(getForm);
      data.checkProgram(getForm.program).addMovie(data.checkMovie(getForm.movie));
    } catch (error) {
      view.printError(view.$errorDisplayProgram, error.message);
      return;
    }

    view.printCreatedProgramList(data.getPrintDataProgram());
  };
   
  function init() {
    console.log("App initialized!!!");
      setUpEventListeners();
  };
  

  // return {
  //   init: function () {
  //     console.log("App initialized!!!");
  //     setUpEventListeners();
  //   },
  // };

