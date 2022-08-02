const getDate = () => { 
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const d = date.getDate();
  return `${d}-${month}-${year}`;
}

const getTime = () => {
  const date = new Date();
  const h = date.getHours();
  if(h>= 7 && h<=17) {
    return false;
  }else{
    return false;
  }
}

export {getDate, getTime};