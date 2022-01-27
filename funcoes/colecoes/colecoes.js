// Maps

function getAdmins(map){
    let admins = [];
    for([key, value] of map){
            if (value === 'Admins'){
                admins.push(key);
            }
    }
    return admins;
}

const usuarios = nem Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));