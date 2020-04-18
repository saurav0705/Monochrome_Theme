export const parrallax = {
    'backgroundImage':"linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('https://picsum.photos/800')",
    'background-attachment': 'fixed',
  'background-position': 'center',
  'background-repeat': 'no-repeat',
  'background-size':'cover',
  

}

export const getFormatedDate = (date) => {
    if(date.length === 0){
        return "";
    }
    
    let month= ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    date = new Date(date);

    return month[date.getMonth()]+" "+date.getFullYear();




}