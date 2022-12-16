import bcrypt from 'bcryptjs'
const users=[
    {
        name:'Sohaib khan',
        email:'sohaibkhan@gmail.com',
        password:bcrypt.hashSync('12345',10),
        
    },
    {
        name:'Sohaib ',
        email:'sohaib@gmail.com',
        password:bcrypt.hashSync('12345',10)
    },
    {
        name:'khan',
        email:'khan@gmail.com',
        password:bcrypt.hashSync('12345',10)
    },
    {
        name:'Admin',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('12345',10),
        isAdmin:true,
    }

]

export default users