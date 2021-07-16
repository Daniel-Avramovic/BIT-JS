
  let createdMovieList = [];
  let createdPrograms = [];

  class Genre {
    constructor(name) {
      this.genre = name;
    }
    getData() {
      let formated = "";
      formated =
        this.genre[0].toUpperCase() +
        this.genre[this.genre.length - 1].toUpperCase();
      return formated;
    }
  }
  class Movie {
    constructor(title, genre, length) {
      this.id = randomId();
      this.title = title;
      this.genre = genre;
      this.length = length;
    }
    getData() {
      // return this.title + ", " + this.length + "min, " + this.genre.getData();
      return `${this.title}, ${this.length} min, ${this.genre.getData()}`;
    }
  }

  const createMovie = (data) => {
    let genre = new Genre(data.genre);
    var movie = new Movie(data.title, genre, data.length);
    createdMovieList.push(movie);
    return movie;
  };
  class Program {
    constructor(date) {
      this.id = randomId();
      this.date = date;
      this.listOfMovies = [];
      this.totalNumberOfMovies = 0;
    }
    addMovie(movie) {
      console.log(this.calcSameGengre() + "number");
      if (this.calcDuration() <= 480) {
        if (
          this.calcSameGengre() > 3 &&
          this.nameSameGengre() === movie.genre.genre
        ) {
          throw new Error(
            `The program is filled with films of ${movie.genre.genre} genre, already has ${this.calcSameGengre()} films!!!`
          );
        } else {
          this.listOfMovies.push(movie);
          this.totalNumberOfMovies++;
        }
      } else {
        throw new Error("The length of the films is more than 480!!!");
      }
    }
    getData() {
      let month = this.date.getMonth() + 1;
      let day = this.date.getUTCDate();
      let year = this.date.getFullYear();
      let list = "";
      let duration = 0;
      for (var i = 0; i < this.listOfMovies.length; i++) {
        var element = this.listOfMovies[i];
        // list += "\t\t" + element.getData() + "\n";
        duration += element.length;
      }
      return (
        `${day}.${month}.${year}, program duration: ${duration}min; ${this.totalNumberOfMovies} Movies!!!`
      );
    }
    calcDuration() {
      let dur = 1;
      for (let i = 0; i < this.listOfMovies.length; i++) {
        let element = this.listOfMovies[i];
        dur += element.length;
      }
      return dur;
    }
    calcSameGengre() {
      let counter = 0;
      for (let i = 0; i < this.listOfMovies.length; i++) {
        let element = this.listOfMovies[i].genre.genre;
        let tempCout = 0;
        for (let i = 0; i < this.listOfMovies.length; i++) {
          let element1 = this.listOfMovies[i].genre.genre;
          if (element === element1) {
            tempCout++;
          }
        }
        if (counter < tempCout) {
          counter = tempCout;
        }
      }
      return counter;
    }
    nameSameGengre() {
      let counter = 0;
      let name = "";
      for (let i = 0; i < this.listOfMovies.length; i++) {
        let element = this.listOfMovies[i].genre.genre;
        let tempCout = 0;
        let tempName = "";
        for (let i = 0; i < this.listOfMovies.length; i++) {
          let element1 = this.listOfMovies[i].genre.genre;
          if (element === element1) {
            tempCout++;
            tempName = element1;
          }
        }
        if (counter < tempCout) {
          counter = tempCout;
          name = tempName;
        }
        return name;
      }
    }
  }
  const createProgram = (date) => {
    let created = new Program(date);
    createdPrograms.push(created);
    return created;
  };
  const randomId = () => {
    return Math.floor(Math.random() * 10000);
  };

  const getPrintData = () => {
    let printData = [];
    createdMovieList.forEach(function (element, i) {
      printData.push({ id: element.id, index: i, getData: element.getData() });
    });
    return printData;
  };

  const getPrintDataProgram = () => {
    let printDataProgram = [];
    console.log(printDataProgram);
    createdPrograms.forEach(function (element, i) {
      printDataProgram.push({
        id: element.id,
        index: i,
        date: element.date,
        getData: element.getData(),
      });
    });
    return printDataProgram;
  };

  const checkProgram = (index) => {
    for (let i = 0; i < createdPrograms.length; i++) {
      const element = createdPrograms[i];
      if (i == index) {
        return element;
      }
    }
  };

  const checkMovie = (index) => {
    for (let i = 0; i < createdMovieList.length; i++) {
      const element = createdMovieList[i];
      if (i == index) {
        return element;
      }
    }
  };

  export {
    createMovie,
    createProgram,
    getPrintData,
    getPrintDataProgram,
    checkProgram,
    checkMovie,
  };

