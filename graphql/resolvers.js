import { getById, getMovies, addMovie, deleteMovie, getAPIMovies } from './db';

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
        APIMovies: (_, { rating, limit }) => getAPIMovies(limit, rating)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id)
    }
};

export default resolvers;
