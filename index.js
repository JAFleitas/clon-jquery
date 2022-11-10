
export function $ (arg) {
  let elements
    if(typeof arg === "function"){
        document.addEventListener("DOMContentLoaded",arg)
    }
    if (typeof arg === "string"){
         elements = document.querySelectorAll(arg)
        
        
    }
    if(arg instanceof HTMLElement){
      elements= [arg]
    }
    const jQuery = {
        css:(property, value) => {
            const isString= typeof property === "string"
            elements.forEach((el) => {
                if(isString) el.style[property] = value
                else {
                    const entriesCSS = Object.entries(property)
                    entriesCSS.forEach(([property, value])=>{
                        el.style[property] = value
                    })
                }
            })
            
            return jQuery
        } ,
        on: (event, fn)=>{
            elements.forEach(el=>{
                el.addEventListener(event,fn)
                return jQuery
            })
        },
        each: (fn) => {
            elements.forEach((el, index) => fn(index, el));

            return jQuery
        }
    
    
    
    }
    return jQuery
}