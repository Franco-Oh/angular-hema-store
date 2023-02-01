export interface UsersInterface {
    id?:string|null;
    name:string;
    apellido:string;
    edad:any;
    email:string;
    password:string;
    perfil:'usuario'|'admin';
}
