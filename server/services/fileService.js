const fs = require("fs")
const config = require("config")

class FileService{

    createDir(file){
        const filePath = `${config.get("filePath")}\\${file.user}\\${file.path}`
        return new Promise((resolve, reject) => {
            try{
                if (!fs.existsSync(filePath)){
                    fs.mkdirSync(filePath)
                    return resolve({message: "File wal created"})
                }else{
                    return reject({message: "Name of file already exist"})
                }
            }catch{
                return reject({message: "File error"})
            }
        })
    }

}


module.exports = new FileService()