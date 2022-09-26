const {User,Photo,Albulm,sequelize} = require('./models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const log = (data)=>{
   console.log(JSON.stringify(data, null, 2)) 
}

const createUser = async (name,password) =>{
    try{
        const res = await User.create({name:name, password:passwor})
        log(res)
    }catch(error){
        throw(error)
    }
}
const createPhoto = async (albulm_id, user_id,content) =>{
    try{
        const res = await Photo.create({albulm_id:albulm_id,user_id:user_id,content:content})
        log(res)
    }catch(error){
        throw(error)
    }
}
const createAlbulm = async (user_id,name) =>{
    try{
        const res = await Albulm.create({user_id:user_id, name:name})
        log(res)
    }catch(error){
        throw(error)
    }
}

const getPhotosByUser = async (user_id) => {
    try{
        const res = await Photo.findAll({user_id:user_id})
        log(res)
    }catch(error){
        throw error
    }
}


const run = async () =>{
    try{
        //await createUser()
        //await createPhoto()
        //await createAlbulm()
        await getPhotosByUser(1)
    }catch(error){
        throw error
    }finally{
        await sequelize.close()
    }
}

run()