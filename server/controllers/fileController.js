const fileService = require("./../services/fileService")
const User = require("./../models/User")
const File = require("./../models/File")

class FileController{
    async createDir(req, res){
        try {
            const {name, type, parent} = req.body
            const file = new File({name, type, parent,user: req.user.id})
            const parentFile = User.findOne({_id: parent})
            if (parentFile){
                file.path = name
                await fileService.createDir(file)
            }else{
                file.path = `${parentFile.path}\\${file.name}`
                await fileService.createDir(file)
                parentFile.childl.push(file._id)
                await parentFile.save()
            }
            await file.save()
            return res.json(file)
        }catch(e){
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async fetFiles(req, res){
        try{
            const files = await User
                .find({_id: req.user.id, parent:req.query.parent })
              //  console.log("from fetFiles")
            return res.json(files)
        }catch (e) {
           console.log(e)
            return res.status(500).json({message: "Can't get a file"})
        }
    }
}

module.exports = new FileController()