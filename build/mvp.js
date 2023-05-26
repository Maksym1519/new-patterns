/*public class Movie {
  private String title;
  private String description;
  private String releaseDate;
  private double rating;

  // getters and setters
}

public interface MovieView {
  void showMovies(List<Movie> movies);
  void showError(String message);
}

public class MoviePresenter {
  private MovieView view;
  private MovieModel model;

  public MoviePresenter(MovieView view) {
      this.view = view;
      model = new MovieModel();
  }

  public void loadMovies() {
      List<Movie> movies = model.getMovies();
      if (movies != null) {
          view.showMovies(movies);
      } else {
          view.showError("Failed to load movies");
      }
  }

  public void addMovieToFavorites(Movie movie) {
      model.addToFavorites(movie);
  }
}

public class MovieModel {
  private List<Movie> movies;

  public MovieModel() {
      movies = new ArrayList<>();
      movies.add(new Movie("The Shawshank Redemption", "Two imprisoned men bond over a number of years...", "14/10/1994", 9.3));
      movies.add(new Movie("The Godfather", "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", "24/03/1972", 9.2));
      // Add more movies
  }

  public List<Movie> getMovies() {
      return movies;
  }

  public void addToFavorites(Movie movie) {
      // Add movie to favorites list
  }
}

class Movie {
title: string = '';
description: string = '';
releaseDate: number = 0;
setTitle(title: string) {
this.title = title
}
getTitle() {
return this.title
}
}
//view-----------------------------------------------------------
interface MovieView {
  showMovies(movies: Array<Movie>): void
  showErrors(message: string): void
}
//presenter----------------------------------------------------------
class MoviePresenter {
  private view: MovieView
  private model: MovieModel
  moviePresenter(view: MovieView) {
  this.view = view
  this.model = new MovieModel()
  }
  loadMovies(): void {
    this.view.showMovies
  }
}


//model------------------------------------------------------------
class MovieModel {

}

class UserModel {
  private name: string;
  private email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

// Представление (View) - отображает данные для пользователя
interface UserView {
  setName(name: string): void;
  setEmail(email: string): void;
}

// Презентер (Presenter) - обрабатывает взаимодействие пользователя и модели
class UserPresenter {
  private model: UserModel;
  private view: UserView;

  constructor(model: UserModel, view: UserView) {
    this.model = model;
    this.view = view;
  }

  updateView() {
    const name = this.model.getName();
    const email = this.model.getEmail();
    this.view.setName(name);
    this.view.setEmail(email);
  }
}

// Пример использования паттерна MVP
const model = new UserModel('John Doe', 'johndoe@example.com');
const view = {
  setName(name: string) {
    console.log(`Name: ${name}`);
  },
  setEmail(email: string) {
    console.log(`Email: ${email}`);
  },
};
const presenter = new UserPresenter(model, view);
presenter.updateView();
*/
//model-------------------------------------------------------
class StudentModel {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }
    getName() {
        return this.name;
    }
    getCourse() {
        return this.course;
    }
}
//presenter-----------------------------------------------
class StudentPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
    updateView() {
        this.view.setName(this.model.getName());
        this.view.setCourse(this.model.getCourse());
    }
    setName(name) {
        this.model = new StudentModel(name, this.model.getCourse());
    }
    setCourse(course) {
        this.model = new StudentModel(this.model.getName(), course);
    }
}
//using---------------------------------------------------------
class ConsoleStudentsView {
    setName(name) {
        console.log(`Name: ${name}`);
    }
    setCourse(course) {
        console.log(`Course: ${course}`);
    }
}
const student = new StudentModel("Maksym", "React");
const view = new ConsoleStudentsView();
const presenter = new StudentPresenter(student, view);
presenter.updateView();
presenter.setName("Marina");
presenter.setCourse("Python");
presenter.updateView();
export {};
//# sourceMappingURL=mvp.js.map