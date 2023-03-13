import { getConnection }  from "../database/database.js";

const getEvents = async (request, response) => {
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT ID, Nombre, Lugar FROM eventos");
        response.json(result);
    } catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const getEvent = async (request, response) => {
    try{
        const {ID}=request.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT ID, Nombre, Lugar FROM eventos WHERE ID = ?", ID);
        response.json(result);
    } catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const addEvent = async (request, response) => {
    try{
        const { ID, Nombre, Lugar } = request.body;

        if(ID==undefined || Nombre == undefined){
            response.status(400),json({ message: "Bad Request. Please fill all field."})
        }

        const evento = {ID, Nombre, Lugar}; 
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO eventos SET ?", evento);

        response.json("Event Added")
    } catch{
        response.status(500);
        request.send(error.message);
    }
}

const UpdateEvent = async (request, response) => {
    try{
        const {ID}=request.params;
        const {Nombre, Lugar } = request.body;

        if(ID==undefined  || Nombre == undefined || Lugar == undefined){
            response.status(400).json({ message: "Bad Request. Please fill all fields."})
        };

        const evento = {ID, Nombre,Lugar};
        const connection = await getConnection();
        const result = await connection.query("UPDATE eventos SET ? WHERE ID = ?", [evento, ID]);
        response.json(result);
    } catch(error){
        response.status(500);
        response.send(error.message);
    }
};

const DeleteEvent = async (request, response) => {
    try{
        const {ID}=request.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM eventos WHERE ID = ?", ID);
        response.json(result);
    } catch(error){
        response.status(500);
        response.send(error.message);
    }
};

export const methods = {
    getEvents,
    getEvent,
    addEvent,
    UpdateEvent,
    DeleteEvent,
    
};