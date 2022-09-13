
const Film = require("./table")

exports.addFilm = async (filmObject) => {
    try
    {
        await Film.create(filmObject);
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.removeFilm = async (filmObject) => {
    try
    {
        await Film.destroy({where:{title:filmObject.title}});
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.updateFilm = async (filmObject) => {
    try
    {
        await Film.update({director:filmObject.director}, {where:{title:filmObject.title}});
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.listFilms = async () => {
    try
    {
        return await Film.findAll()
    }
    catch (error)
    {
        console.log(error)
    }
}