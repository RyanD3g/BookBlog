const {connect} = require('mongoose');

const connect_DB = async ()=>{
    await connect(`mongodb+srv://${process.env.USER_MONGO}:${process.env.PASS_MONGO}@cluster0.txpvv0t.mongodb.net/?retryWrites=true&w=majority`, (e)=>{
        if(e){
            return console.log('[ x ] Erro ao se conectar com o banco [ x ]', e)
        }else{
            console.log('[ + ] Conectado com sucesso!! [ + ]')
        }
    })
}

module.exports = connect_DB;
