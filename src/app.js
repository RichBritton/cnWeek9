const yargs = require("yargs")
const { sequelize } = require("./db/connection") 
const { addFilm, listFilms, removeFilm, updateFilm } = require("./film/functions")

const app = async (yargsObject) => {
    try
    { 
        await sequelize.sync()
        if (yargsObject.create)
        {
            await addFilm({title: yargsObject.title, director: yargsObject.director})
        }
        else if (yargsObject.read)
        {
            let output = {}
            let table = await listFilms()
            for (let film of table)
            {
                output.id = film.id
                output.title = film.title
                output.director = film.director
                console.log(output)
            }
        }
        else if (yargsObject.update)
        {
            await updateFilm({title: yargsObject.title, director: yargsObject.director})
        }
        else if (yargsObject.remove)
        {
            await removeFilm({title: yargsObject.title, director: yargsObject.director})
        }
        else
        {
            console.log("incorrect command")
        }
    }
    catch (error)
    {
        console.log(error)
    }
} 

app(yargs.argv)