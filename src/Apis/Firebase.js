import { initializeApp } from "firebase/app";

import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    updateDoc,
    increment
    } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnLKCwt2SzT7IHzH6Pt600hSMzekqPlbk",
  authDomain: "personal-finance-app-6e15e.firebaseapp.com",
  projectId: "personal-finance-app-6e15e",
  storageBucket: "personal-finance-app-6e15e.appspot.com",
  messagingSenderId: "41433705941",
  appId: "1:41433705941:web:0af8cd6ad6563fc9e6215c"
};

const app = initializeApp(firebaseConfig);
export const DB = getFirestore(app);

export const getDB = new Promise((res,rej) => {
    const colRef = collection(DB,'resultados')
    getDocs(colRef).then((snapshot)=>{
        const resultados = snapshot.docs.map((rawDoc)=>{
            return{
                id: rawDoc.id,
                ...rawDoc.data()
            }
        })
        res(resultados)
    }).catch(error=>{
        rej(console.log("Error al traer los resultados", error))})
    }
)

export const getDBbyUser = async (user) =>{
    const itemRef = await doc(DB,'resultados', user);
    return(
        new Promise((res, rej) =>{
            getDoc(itemRef).then(snapshot =>{
                if(snapshot.exists()){
                    const resultados = snapshot.docs.map((rawDoc)=>{
                        return{
                            id: rawDoc.id,
                            ...rawDoc.data()
                        }
                    })
                    res(resultados)}
            }).catch(error => rej(error) )
        })
    )
}

export const crearGasto = (gastos) => {
    const refCol = collection(DB, "Gastos")
    return(
    new Promise((res,rej) => {
        addDoc(refCol, gastos).then(({id}) =>
            res(id))
        .catch(error => 
            rej(error))
    })
    
    ) 
}

export const crearIngreso = (ingreso) => {
    const refCol = collection(DB, "ingresos")
    return(
    new Promise((res,rej) => {
        addDoc(refCol, ingreso).then(({id}) =>
            res(id))
        .catch(error => 
            rej(error))
    })
    
    ) 
}




