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
*/
class UserModel {
    constructor(name, email) {
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
// Презентер (Presenter) - обрабатывает взаимодействие пользователя и модели
class UserPresenter {
    constructor(model, view) {
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
    setName(name) {
        console.log(`Name: ${name}`);
    },
    setEmail(email) {
        console.log(`Email: ${email}`);
    },
};
const presenter = new UserPresenter(model, view);
presenter.updateView();
export {};
//# sourceMappingURL=mvp.js.map