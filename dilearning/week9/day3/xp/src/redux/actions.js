// all the functions goes here

export const contentupdate = (value)=> {
    return{
        type:"UPDATE",
        payload:value
    }
}
export const addNew = (content)=> {
    return{
        type:"ADD",
        payload:content
    }
}
export const delme = (value)=> {
    return{
        type:"DEL",
        payload:value
    }
}
