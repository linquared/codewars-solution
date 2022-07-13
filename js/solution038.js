// Complete the function/method so that it returns the url with anything after the anchor (#) removed

function removeUrlAnchor(url){
    const position = url.indexOf('#')
  
    if(position != -1){
      return url.slice(0, position)
    } else{
      return url
    }
    
  }